"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface PillarsProps {
  gridSize?: number; // Number of pillars in each row/column
  pillarHeight?: number; // Base height of pillars
  pillarColor?: string; // Color of pillars' edges
  innerColorTop?: string; // Top color for gradient inside pillars
  innerColorBottom?: string; // Bottom color for gradient inside pillars
  hoverColor?: string; // Color when hovered
  waveSpeed?: number; // Speed of wave animation
  waveIntensity?: number; // Height of wave peaks
  pillarRadius?: number; // Radius of each pillar
  pillarSpacing?: number; // Spacing between pillars (deprecated, now uses radius)
  backgroundColor?: string; // Background color
  useGradient?: boolean; // Whether to use gradient on pillars
  cameraAngle?: "top" | "perspective"; // Camera angle: top-down or perspective
  adaptToScreenSize?: boolean; // Whether to adapt camera and grid to screen size
  aspectRatio?: number; // Current screen aspect ratio
  // New properties for directed wave
  directedWaveTimeout?: number; // Time before triggering directed wave
  directedWaveSpeed?: number; // Speed of the directed wave
  useColorGradient?: boolean; // Whether to use a color gradient across pillars
  gradientColors?: string[]; // Array of colors to use in the gradient
  innerGradientColors?: string[]; // For inner cube coloring
  edgeGradientColors?: string[]; // For edge coloring
}

const PillarsThreeJS: React.FC<PillarsProps> = ({
  gridSize = 15,
  pillarHeight = 2,
  pillarColor = "#1a1a2e", // Dark edges
  innerColorTop = "#8ab4f8", // Light blue top
  innerColorBottom = "#3a3a3a", // Gray bottom
  hoverColor = "#ff3030",
  waveSpeed = 0.8,
  waveIntensity = 1.5,
  pillarRadius = 0.5, // Larger radius for tighter packing
  pillarSpacing = 1, // This is now ignored as we're using radius for spacing
  backgroundColor = "#050505",
  useGradient = true, // Use gradient for inner boxes
  cameraAngle = "perspective", // Default to perspective view
  adaptToScreenSize = true,
  aspectRatio = window.innerWidth / window.innerHeight,
  // New props
  directedWaveTimeout = 5000, // Default to 5 seconds
  directedWaveSpeed = 0.7, // Default wave speed
  useColorGradient = false,
  gradientColors = [
    "#F09B37",
    "#EC395B",
    "#BF2579",
    "#931F92",
    "#3437AA",
    "#3E90C6",
  ],
  innerGradientColors = [
    "#FFD1DC",
    "#FFB6C1",
    "#FF99AC",
    "#FF6B8B",
    "#FF4976",
    "#DB3A68",
  ],
  edgeGradientColors = [
    "#BFE3FF",
    "#99CCFF",
    "#66B2FF",
    "#3399FF",
    "#0080FF",
    "#0066CC",
  ],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef<THREE.Vector2>(new THREE.Vector2(-10000, -10000));
  const [isHovering, setIsHovering] = useState(false);
  const lastMouseMoveTime = useRef<number>(0);
  const directedWaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDirectedWaveActive = useRef<boolean>(false);
  const waveDirection = useRef<{ x: number; z: number }>({ x: 0, z: 0 });
  const waveOrigin = useRef<{ x: number; z: number }>({ x: 0, z: 0 });
  const waveStartTime = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Calculate actual spacing based on pillar radius for a tight grid
    const actualSpacing = pillarRadius * 2;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const aspectRatio = viewportWidth / viewportHeight;

    // Calculate grid size in world coordinates
    const gridWorldSize = (gridSize - 1) * actualSpacing;

    // Calculate scaling factor to ensure grid covers viewport width
    // We'll adjust the camera to fit the grid size rather than changing grid dimensions
    const extraPadding = 1; // Add 10% extra coverage on each side

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      // Use appropriate FOV based on camera angle
      cameraAngle === "top" ? 75 : 60,
      aspectRatio,
      0.1,
      1000
    );

    // Position camera based on selected angle
    if (cameraAngle === "top") {
      // For perfect 90-degree top-down view
      const screenAspect = aspectRatio;

      // Calculate field of view to use
      const baseFov = 75; // Reduced for less distortion in top-down view
      const fovAdjustment = Math.max(0, 10 * (screenAspect - 1.5));
      const fov = baseFov + fovAdjustment;

      // Set FOV
      camera.fov = fov;
      camera.updateProjectionMatrix();

      // Calculate height for full coverage with pure top-down view
      const heightForFullCoverage =
        gridWorldSize / 2 / Math.tan((fov * Math.PI) / 180 / 2);

      // Height multiplier for top-down view
      const heightMultiplier = screenAspect > 1.7 ? 1.05 : 0.95;
      const cameraHeight = heightForFullCoverage * heightMultiplier;

      // Position camera directly above the center of the grid
      camera.position.set(
        gridWorldSize * 0.5, // Centered on X axis
        cameraHeight, // Positioned high enough to see the whole grid
        gridWorldSize * 0.5 // Centered on Z axis
      );

      // Look directly down at grid center
      camera.lookAt(gridWorldSize * 0.5, 0, gridWorldSize * 0.5);

      // Reset all rotations for perfect top-down view
      camera.rotation.x = -Math.PI / 2; // -90 degrees (looking straight down)
      camera.rotation.y = 0;
      camera.rotation.z = 0;
    } else {
      // For perspective view (unchanged)
      camera.position.set(
        gridWorldSize * 0.6,
        gridWorldSize * 0.5,
        gridWorldSize * 1.0
      );
      camera.lookAt(gridWorldSize * 0.5, 0, gridWorldSize * 0.5);

      // Apply Y-axis rotation for this view
      camera.rotation.y = Math.PI * (15 / 180);
    }

    // Set up renderer with better shadows
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add subtle ambient light (increase intensity from 1.2 to 2.0)
    const ambientLight = new THREE.AmbientLight(0x404040, 2.0);
    scene.add(ambientLight);

    // Update lighting for pure top-down view

    // Add directional light coming from directly above
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.2);
    if (cameraAngle === "top") {
      // Position light directly above for top-down view
      directionalLight.position.set(0, 10, 0);
    } else {
      directionalLight.position.set(1, 3, 2);
    }
    scene.add(directionalLight);

    // Add complementary fill lights from different angles to provide definition
    const fillLight1 = new THREE.DirectionalLight(0xffffee, 1.0);
    fillLight1.position.set(5, 3, 5);
    scene.add(fillLight1);

    const fillLight2 = new THREE.DirectionalLight(0x8080ff, 1.0);
    fillLight2.position.set(-5, 3, 5);
    scene.add(fillLight2);

    const fillLight3 = new THREE.DirectionalLight(0xffffaa, 1.0);
    fillLight3.position.set(0, 3, -5);
    scene.add(fillLight3);

    // Add a gentle uplight from below to create some contrast
    const upLight = new THREE.DirectionalLight(0xffffaa, 0.5);
    upLight.position.set(0, -1, 0);
    scene.add(upLight);

    // Update the gradient shader to add a subtle shine effect
    const gradientShader = {
      uniforms: {
        colorTop: { value: new THREE.Color(innerColorTop) },
        colorBottom: { value: new THREE.Color(innerColorBottom) },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorTop;
        uniform vec3 colorBottom;
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          // Normalize y position for gradient (0 at bottom, 1 at top)
          float normalizedY = (vPosition.y + 1.0) / 2.0;
          
          // Create base color from gradient
          vec3 baseColor = mix(colorBottom, colorTop, normalizedY);
          
          // Add subtle lighting based on normal direction
          vec3 lightDir = normalize(vec3(1.0, 2.0, 1.0));
          float diffuse = max(0.0, dot(vNormal, lightDir)) * 0.3;
          
          // Add highlight to make colors pop more
          vec3 finalColor = baseColor * (1.0 + diffuse);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    };

    // Base plane for shadow/reflection effect and raycasting
    const planeGeometry = new THREE.PlaneGeometry(
      gridWorldSize + actualSpacing * 2,
      gridWorldSize + actualSpacing * 2
    );

    const planeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(backgroundColor).lerp(
        new THREE.Color(innerColorBottom),
        0.05
      ),
      roughness: 0.8,
      metalness: 0.2,
    });

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(gridWorldSize * 0.5, -0.01, gridWorldSize * 0.5); // Slightly below zero
    scene.add(plane);

    // Helper function to get color from gradient based on position
    const getColorFromGradient = (position: number, colors: string[]) => {
      // Normalize position to [0, 1]
      const normalizedPos = Math.min(1, Math.max(0, position));

      // Calculate which segment of the gradient we're in
      const segment = normalizedPos * (colors.length - 1);
      const index = Math.floor(segment);
      const remainder = segment - index;

      // Get the two colors to interpolate between
      const color1 = new THREE.Color(colors[index]);
      const color2 = new THREE.Color(
        colors[Math.min(colors.length - 1, index + 1)]
      );

      // Interpolate between them
      return color1.clone().lerp(color2, remainder);
    };

    // Create rectangular pillars with gradient bodies and dark edges
    const pillars: THREE.Group[] = [];
    const pillarBodies: THREE.Mesh[] = []; // Store pillar bodies separately for animation

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const pillarGroup = new THREE.Group();

        // Calculate position in the grid
        const xPos = x * actualSpacing;
        const zPos = z * actualSpacing;

        // If using color gradient, determine colors based on position
        let pillarEdgeColor = pillarColor;
        let pillarTopColor = innerColorTop;
        let pillarBottomColor = innerColorBottom;

        if (useColorGradient) {
          // Calculate position in grid as value between 0 and 1
          // Use diagonal position (x + z) for gradient flow
          const normalizedX = x / (gridSize - 1);
          const normalizedZ = z / (gridSize - 1);
          const diagonalPos = (normalizedX + normalizedZ) / 2;

          // Get colors from separate gradients

          // For inner cube body, use the pink gradient
          const innerGradientToUse =
            innerGradientColors && innerGradientColors.length >= 2
              ? innerGradientColors
              : gradientColors;

          const topColorObj = getColorFromGradient(
            diagonalPos,
            innerGradientToUse
          );
          const bottomColorObj = getColorFromGradient(
            Math.max(0, diagonalPos - 0.15), // Offset for darker bottom
            innerGradientToUse
          );

          // For edges, use the blue gradient
          const edgeGradientToUse =
            edgeGradientColors && edgeGradientColors.length >= 2
              ? edgeGradientColors
              : gradientColors;

          const edgeColorObj = getColorFromGradient(
            diagonalPos,
            edgeGradientToUse
          );

          // Convert to hex strings
          pillarEdgeColor = "#" + edgeColorObj.getHexString();
          pillarTopColor = "#" + topColorObj.getHexString();
          pillarBottomColor = "#" + bottomColorObj.getHexString();
        }

        // Inner box (slightly smaller - with gradient)
        const innerGeometry = new THREE.BoxGeometry(
          pillarRadius * 1.95, // Slightly smaller than outer box
          pillarHeight * 0.95,
          pillarRadius * 1.95
        );

        // Clone the material to avoid shared state for hover effects
        const innerBoxMaterial = useGradient
          ? new THREE.ShaderMaterial({
              uniforms: {
                colorTop: { value: new THREE.Color(pillarTopColor) }, // #187c19 (24, 124, 25)
                colorBottom: { value: new THREE.Color(pillarBottomColor) }, // Darker green
                time: { value: 0 },
              },
              vertexShader: gradientShader.vertexShader,
              fragmentShader: gradientShader.fragmentShader,
            })
          : new THREE.MeshStandardMaterial({
              color: pillarTopColor, // #187c19 (24, 124, 25)
              roughness: 0.3, // Decreased from 0.4 for more shininess
              metalness: 0.8, // Increased from 0.6 for more reflectivity
              envMapIntensity: 1.5, // New property to enhance environment reflections
            });

        const innerBox = new THREE.Mesh(innerGeometry, innerBoxMaterial);

        // Outer box (wireframe with edges - dark color)
        const outerGeometry = new THREE.BoxGeometry(
          pillarRadius * 2,
          pillarHeight,
          pillarRadius * 2
        );

        // Extract edges from geometry
        const edges = new THREE.EdgesGeometry(outerGeometry);
        // Update edge line material for better visibility
        const edgeLines = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({
            color: new THREE.Color(pillarEdgeColor),
            transparent: true,
            opacity: 1.0, // Increased from 0.9 for more vibrant lines
            linewidth: 1.8, // Increased from 1.5 for thicker lines (though this has limitations in WebGL)
          })
        );

        // Position inner box inside the edge frame
        innerBox.position.y = 0;

        // Add both to the group
        pillarGroup.add(innerBox);
        pillarGroup.add(edgeLines);

        // Position the group
        pillarGroup.position.set(xPos, pillarHeight / 2, zPos);

        // Store original position for animation
        pillarGroup.userData = {
          originalHeight: pillarHeight,
          originalY: pillarHeight / 2,
          gridX: x,
          gridZ: z,
          baseColor: pillarEdgeColor,
          topColor: pillarTopColor,
          bottomColor: pillarBottomColor,
          // Calculate custom hover color based on position in gradient
          hoverColor: useColorGradient
            ? "#" +
              getColorFromGradient(
                (x + z) / (gridSize * 2 - 2) + 0.2,
                gradientColors
              ).getHexString()
            : hoverColor,
        };

        scene.add(pillarGroup);
        pillars.push(pillarGroup);
        pillarBodies.push(innerBox); // Store inner boxes for animation
      }
    }

    // Function to start directed wave animation
    const startDirectedWave = () => {
      isDirectedWaveActive.current = true;
      waveStartTime.current = performance.now() / 1000;

      // Store current mouse position as wave origin
      waveOrigin.current = {
        x: lastMouseWorldPos.x,
        z: lastMouseWorldPos.z,
      };

      // Generate random direction for the wave to travel
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      waveDirection.current = {
        x: Math.cos(angle),
        z: Math.sin(angle),
      };
    };

    // Last mouse world position (for when mouse moves outside canvas)
    const lastMouseWorldPos = {
      x: gridWorldSize * 0.5,
      z: gridWorldSize * 0.5,
    };

    // Mouse interaction tracking
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      // Update last mouse move time
      lastMouseMoveTime.current = Date.now();

      // Cancel any pending timeout
      if (directedWaveTimeoutRef.current) {
        clearTimeout(directedWaveTimeoutRef.current);
      }

      // Set new timeout to start directed wave
      directedWaveTimeoutRef.current = setTimeout(
        startDirectedWave,
        directedWaveTimeout
      );

      // Stop any active directed wave
      isDirectedWaveActive.current = false;

      // Calculate mouse position in normalized device coordinates (-1 to +1)
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Try to get world position right away
      raycaster.setFromCamera(mousePos.current, camera);
      const intersects = raycaster.intersectObject(plane);

      if (intersects.length > 0) {
        lastMouseWorldPos.x = intersects[0].point.x;
        lastMouseWorldPos.z = intersects[0].point.z;
      }

      setIsHovering(true);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);

      // Cancel any directed wave
      isDirectedWaveActive.current = false;

      // Clear any pending timeout
      if (directedWaveTimeoutRef.current) {
        clearTimeout(directedWaveTimeoutRef.current);
      }

      // Set new timeout
      directedWaveTimeoutRef.current = setTimeout(
        startDirectedWave,
        directedWaveTimeout
      );
    };

    const handleMouseLeave = () => {
      setIsHovering(false);

      // Trigger directed wave immediately when mouse leaves
      if (directedWaveTimeoutRef.current) {
        clearTimeout(directedWaveTimeoutRef.current);
      }
      startDirectedWave();
    };

    // Initialize last mouse move time
    lastMouseMoveTime.current = Date.now();

    // Set initial timeout for directed wave
    directedWaveTimeoutRef.current = setTimeout(
      startDirectedWave,
      directedWaveTimeout
    );

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newAspect = newWidth / newHeight;

      camera.aspect = newAspect;

      if (cameraAngle === "top") {
        // Apply the same FOV and height calculations for resize
        const newScreenAspect = newAspect;
        const baseFov = 75; // Reduced for pure top-down view
        const fovAdjustment = Math.max(0, 10 * (newScreenAspect - 1.5));
        const fov = baseFov + fovAdjustment;

        camera.fov = fov;

        const heightForFullCoverage =
          gridWorldSize / 2 / Math.tan((fov * Math.PI) / 180 / 2);
        const heightMultiplier = newScreenAspect > 1.7 ? 1.05 : 0.95;
        const cameraHeight = heightForFullCoverage * heightMultiplier;

        // Update position while maintaining 90-degree view
        camera.position.set(
          gridWorldSize * 0.5,
          cameraHeight,
          gridWorldSize * 0.5
        );

        // Maintain the look-at point
        camera.lookAt(gridWorldSize * 0.5, 0, gridWorldSize * 0.5);

        // Maintain perfect top-down rotation
        camera.rotation.x = -Math.PI / 2; // -90 degrees
        camera.rotation.y = 0;
        camera.rotation.z = 0;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const time = clock.getElapsedTime();

      // Calculate hover point in world space
      let hoverPointX = lastMouseWorldPos.x; // Default to last known position
      let hoverPointZ = lastMouseWorldPos.z;
      let usingMouseInput = false;

      // If we're hovering and not in idle mode, try to use actual mouse position
      if (isHovering && !isDirectedWaveActive.current) {
        // Cast ray from mouse position to get world coordinates
        raycaster.setFromCamera(mousePos.current, camera);
        const intersects = raycaster.intersectObject(plane);

        if (intersects.length > 0) {
          // Use actual mouse position
          hoverPointX = intersects[0].point.x;
          hoverPointZ = intersects[0].point.z;

          // Save this position for when mouse leaves
          lastMouseWorldPos.x = hoverPointX;
          lastMouseWorldPos.z = hoverPointZ;

          usingMouseInput = true;
        }
      }

      // If directed wave is active, update hover point based on wave travel
      if (isDirectedWaveActive.current) {
        // Calculate how far the wave has traveled
        const elapsedTime = performance.now() / 1000 - waveStartTime.current;
        const distanceTraveled =
          elapsedTime * directedWaveSpeed * actualSpacing * 3; // Speed * grid spacing

        // Move hover point in the wave direction
        hoverPointX =
          waveOrigin.current.x + waveDirection.current.x * distanceTraveled;
        hoverPointZ =
          waveOrigin.current.z + waveDirection.current.z * distanceTraveled;

        // Check if wave has moved off grid (far enough to not affect any pillars)
        const gridBoundary = gridWorldSize * 1.5; // Well beyond grid edge
        const isOffGrid =
          hoverPointX < -gridBoundary ||
          hoverPointX > gridWorldSize + gridBoundary ||
          hoverPointZ < -gridBoundary ||
          hoverPointZ > gridWorldSize + gridBoundary;

        // If wave is off grid and not hovering, disable it until next interaction
        if (isOffGrid && !isHovering) {
          isDirectedWaveActive.current = false;
        }
      }

      // Update pillars
      pillars.forEach((pillarGroup, index) => {
        const userData = pillarGroup.userData;
        const { gridX, gridZ, originalHeight, originalY } = userData;

        // Get pillar's world position
        const pillarX = gridX * actualSpacing;
        const pillarZ = gridZ * actualSpacing;

        // Calculate distance from hover point
        const dx = pillarX - hoverPointX;
        const dz = pillarZ - hoverPointZ;
        const distance = Math.sqrt(dx * dx + dz * dz);

        // Wave parameters
        const waveRadius = 5 * actualSpacing;
        const wavePhase = time * waveSpeed;

        // Calculate wave effect based on distance
        let waveEffect = 0;

        if (distance < waveRadius) {
          // Apply wave effect - ripple outward from hover point
          const normalizedDistance = distance / waveRadius;

          // Create a delayed wave effect based on distance
          const waveOffset = normalizedDistance * Math.PI * 2;
          waveEffect =
            Math.sin(wavePhase - waveOffset) *
            (1 - normalizedDistance) *
            waveIntensity;

          // Scale down idle animation intensity gradually
          if (isDirectedWaveActive.current) {
            // Calculate transition progress (0 to 1)
            const elapsedTime =
              performance.now() / 1000 - waveStartTime.current;
            const transitionProgress = Math.min(
              1.0,
              elapsedTime / directedWaveTimeout
            );

            // Gradually reduce intensity from 100% to 40% during transition
            const intensityFactor = THREE.MathUtils.lerp(
              1.0,
              0.4,
              transitionProgress
            );
            waveEffect *= intensityFactor;
          }

          // Color effect - closer to hover point = more intense color
          let colorIntensity = 0.7; // Active intensity

          if (isDirectedWaveActive.current) {
            // Calculate transition progress (0 to 1)
            const elapsedTime =
              performance.now() / 1000 - waveStartTime.current;
            const transitionProgress = Math.min(
              1.0,
              elapsedTime / directedWaveTimeout
            );

            // Gradually reduce color intensity during transition
            colorIntensity = THREE.MathUtils.lerp(0.7, 0.3, transitionProgress);
          }

          const colorLerpFactor =
            Math.max(0, 1 - normalizedDistance) * colorIntensity;

          // Find the edge lines in the pillar group
          const edges = pillarGroup.children[1] as THREE.LineSegments;
          const lineMaterial = edges.material as THREE.LineBasicMaterial;

          // Change edge color and opacity based on distance to hover point
          if (usingMouseInput) {
            // Lerp between base color and hover color
            const hoverColorObj = new THREE.Color(userData.hoverColor);
            const baseColorObj = new THREE.Color(userData.baseColor);
            lineMaterial.color.copy(
              baseColorObj.lerp(hoverColorObj, colorLerpFactor)
            );

            // Increase opacity near hover point
            lineMaterial.opacity = Math.min(1, 0.9 + colorLerpFactor * 0.1);
          }

          // For shader material, update shader uniforms for hover effect
          const innerBox = pillarGroup.children[0] as THREE.Mesh;
          if (
            useGradient &&
            innerBox.material instanceof THREE.ShaderMaterial
          ) {
            // For gradient material, we'd enhance the top color towards the hover color
            if (normalizedDistance < 0.3) {
              const glowFactor = (1 - normalizedDistance / 0.3) * 0.5;
              const hoverColorObj = new THREE.Color(userData.hoverColor); // #8dc71e (141, 199, 30)
              const baseTopColor = new THREE.Color(userData.topColor);

              // Enhance glow effect for green color scheme
              innerBox.material.uniforms.colorTop.value.copy(
                baseTopColor.lerp(hoverColorObj, glowFactor * 1.2) // Slightly stronger effect
              );
            } else {
              // Reset to original colors when not hovered
              innerBox.material.uniforms.colorTop.value = new THREE.Color(
                userData.topColor
              );
            }
          }
          // For standard material, add emissive glow on hover
          else if (innerBox.material instanceof THREE.MeshStandardMaterial) {
            if (normalizedDistance < 0.3) {
              const glowFactor = (1 - normalizedDistance / 0.3) * 0.2;
              innerBox.material.emissive.set(userData.hoverColor);
              innerBox.material.emissiveIntensity = glowFactor;
            } else {
              innerBox.material.emissive.set(0x000000);
              innerBox.material.emissiveIntensity = 0;
            }
          }
        } else {
          // Reset color when outside wave radius
          const edges = pillarGroup.children[1] as THREE.LineSegments;
          const lineMaterial = edges.material as THREE.LineBasicMaterial;
          lineMaterial.color.set(userData.baseColor);
          lineMaterial.opacity = 0.9;

          // Reset inner box colors/emissive
          const innerBox = pillarGroup.children[0] as THREE.Mesh;
          if (
            useGradient &&
            innerBox.material instanceof THREE.ShaderMaterial
          ) {
            innerBox.material.uniforms.colorTop.value = new THREE.Color(
              userData.topColor
            );
            innerBox.material.uniforms.colorBottom.value = new THREE.Color(
              userData.bottomColor
            );
          } else if (innerBox.material instanceof THREE.MeshStandardMaterial) {
            innerBox.material.emissive.set(0x000000);
            innerBox.material.emissiveIntensity = 0;
          }
        }

        // Apply height change based on wave effect
        const newHeight = originalHeight + Math.max(0, waveEffect);
        const scaleY = newHeight / originalHeight;

        // Scale both the group and update its position
        pillarGroup.scale.y = scaleY;
        pillarGroup.position.y = originalY * scaleY;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      // Clear timeout
      if (directedWaveTimeoutRef.current) {
        clearTimeout(directedWaveTimeoutRef.current);
      }

      if (containerRef.current) {
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }

      // Dispose geometries and materials
      scene.traverse((object) => {
        if (
          object instanceof THREE.Mesh ||
          object instanceof THREE.LineSegments
        ) {
          if (object.geometry) object.geometry.dispose();

          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [
    gridSize,
    pillarHeight,
    pillarColor,
    innerColorTop,
    innerColorBottom,
    hoverColor,
    waveSpeed,
    waveIntensity,
    pillarRadius,
    backgroundColor,
    directedWaveTimeout,
    directedWaveSpeed,
    useGradient,
    cameraAngle,
    adaptToScreenSize,
    aspectRatio,
    useColorGradient,
    gradientColors,
    innerGradientColors,
    edgeGradientColors,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default PillarsThreeJS;
