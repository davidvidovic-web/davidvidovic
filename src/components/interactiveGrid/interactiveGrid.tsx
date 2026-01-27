import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface InteractiveGridProps {
  gridSize?: number;
  cellSize?: number;
  gridColor?: string;
  pillarHeight?: number;
  animationDuration?: number;
  backgroundColor?: string;
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({
  gridSize = 40,
  cellSize = 2,
  gridColor = "#444444",
  pillarHeight = 2,
  animationDuration = 0.3,
  backgroundColor = "#1a1a1a",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Update the type definition for the pillars ref
  const pillars = useRef<{ 
    [key: string]: THREE.Mesh | THREE.LineSegments<THREE.EdgesGeometry, THREE.LineBasicMaterial> 
  }>({});
  const raycaster = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouse = useRef<THREE.Vector2>(new THREE.Vector2());
  const isGridFilled = useRef<boolean>(false); // Add this ref at the top of the component with other refs

  // Add these parameters for hover effect
  const HOVER_PARAMS = {
    MAX_HEIGHT: 4,      // Maximum height on hover
    RADIUS: 2,         // How many surrounding pillars to affect
    FALLOFF: 0.5,      // How quickly the height decreases with distance
  };

  // Add this helper function for random number generation
  const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  // Update the WAVE_PARAMS with more extreme height variations
  const WAVE_PARAMS = {
    SPEED: 0.3,
    MAX_DISTANCE: 40,
    DELAY_FACTOR: 0.15,
    MIN_HEIGHT: 0.1, // Reduced minimum height for more variation
    MAX_HEIGHT: 1.5, // Increased maximum height multiplier
    HEIGHT_VARIANCE: 0.5, // Added parameter for random height variation
  };

  // Update the useEffect hook
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60, // Reduced FOV from 75 to 60 for less distortion
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Move camera closer to the grid
    camera.position.set(
      gridSize / 2, // Center X
      gridSize * 0.4, // Reduced Y height from 0.8 to 0.4
      gridSize * 0.4 // Reduced Z distance from 0.8 to 0.4
    );

    // Tilt camera down more to see grid better
    camera.lookAt(
      gridSize / 2, // Look at center X
      -2, // Look slightly below grid
      gridSize / 2 // Look at center Z
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Grid creation
    const gridGeometry = new THREE.PlaneGeometry(
      gridSize * cellSize,
      gridSize * cellSize,
      gridSize,
      gridSize
    );
    const gridMaterial = new THREE.MeshStandardMaterial({
      color: gridColor,
      side: THREE.DoubleSide,
      wireframe: true,
      transparent: false,
      opacity: 1,
    });
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    // Base plane for raycasting
    const planeGeometry = new THREE.PlaneGeometry(
      gridSize * cellSize,
      gridSize * cellSize
    );
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: backgroundColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.01; // Slightly below grid
    scene.add(plane);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);

    // Create and animate a single pillar
    const createPillar = (x: number, z: number, height: number) => {
      const pillarKey = `${x},${z}`;

      const pillarGeometry = new THREE.BoxGeometry(
        cellSize * 1.0,
        height,
        cellSize * 1.0
      );

      // Create gradient material with random colors
      const pillarMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color1: { value: new THREE.Color(generateRandomColor()) },
          color2: { value: new THREE.Color(generateRandomColor()) },
          time: { value: 0 },
          distanceFromCenter: { value: 0 },
        },
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float time;
          uniform float distanceFromCenter;
          varying vec3 vPosition;
          
          void main() {
            float mixValue = (vPosition.y + 1.0) / 2.0;
            vec3 color = mix(color1, color2, mixValue);
            
            // Add wave effect based on distance from center
            float wave = sin(time * 2.0 + vPosition.y * 3.0) * 0.1;
            float intensity = 0.8 + wave + distanceFromCenter * 0.2;
            
            gl_FragColor = vec4(color * intensity, 0.9);
          }
        `,
        transparent: false,
      });

      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);

      pillar.position.set(
        x * cellSize + cellSize / 2,
        height / 2,
        z * cellSize + cellSize / 2
      );

      pillar.scale.y = 0;
      // Create and store outline
      const outline = addPillarOutline(pillar, "#000000");

      // Store both pillar and outline reference
      scene.add(pillar);
      pillars.current[pillarKey] = pillar;
      pillars.current[pillarKey + "_outline"] = outline;

      return { pillar, outline };
    };

    // Add this function after createPillar to generate outline edges
    const addPillarOutline = (pillar: THREE.Mesh, color: string = "#000000") => {
      // Add thresholdAngle to only show sharp edges
      const edges = new THREE.EdgesGeometry(pillar.geometry, 30); // 30-degree threshold
      
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: new THREE.Color(color),
        linewidth: 1,        // Keep thin for cleaner look
        transparent: true,   // Enable transparency
        opacity: 0.5,       // Subtle outline
      });

      const line = new THREE.LineSegments(edges, lineMaterial);
      
      // Copy position and scale
      line.position.copy(pillar.position);
      line.scale.copy(pillar.scale);
      
      // Slightly offset the outline to prevent z-fighting
      const offset = 0.001;
      line.scale.set(
        1 + offset,
        1,
        1 + offset
      );
      
      scene.add(line);
      return line;
    };

    // Add these color utility functions at the top of the component
    const generateRandomColor = () => {
      const colors = ["#fdc010", "#8bc34a", "#43a047", "#009688", "#09bcd3", "#de6600", "#fec682", "#b7e6d3", "#8ab184"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Add this improved easing function
    const easeInOutCubic = (x: number): number => {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    // Update the smoothRise function for better transitions
    const smoothRise = (x: number): number => {
      return easeInOutCubic(x) * (1 - Math.sin(x * Math.PI * 2) * 0.03);
    };

    // Add this wave generation function
    const initializeProceduralPillars = () => {
      const pillarsArray = [];
      const centerX = Math.floor(gridSize / 2);
      const centerZ = Math.floor(gridSize / 2);

      // Create array of all grid positions with distance-based timing
      for (let x = 0; x < gridSize; x++) {
        for (let z = 0; z < gridSize; z++) {
          // Calculate distance from center
          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(z - centerZ, 2)
          );

          // Calculate height based on distance from center
          const heightFactor = 1 - (distance / WAVE_PARAMS.MAX_DISTANCE) * 0.5;
          const height = random(
            pillarHeight * WAVE_PARAMS.MIN_HEIGHT,
            pillarHeight * heightFactor
          );

          pillarsArray.push({
            x,
            z,
            height,
            delay: distance * WAVE_PARAMS.DELAY_FACTOR,
            distance, // Store distance for color calculation
          });
        }
      }

      // Sort by distance from center
      pillarsArray.sort((a, b) => a.delay - b.delay);
      return pillarsArray;
    };

    // Update the animation function
    const animatePillars = () => {
      const startTime = Date.now();
      const pillars = initializeProceduralPillars();
      let currentIndex = 0;

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;

        // Process pillars that should start animating
        while (
          currentIndex < pillars.length &&
          pillars[currentIndex].delay <= elapsed
        ) {
          const pillar = pillars[currentIndex];
          createAndAnimatePillar(pillar.x, pillar.z, pillar.height, elapsed);
          currentIndex++;
        }

        if (currentIndex < pillars.length) {
          requestAnimationFrame(animate);
        } else {
          isGridFilled.current = true;
          // Add mouse move listener only after grid is filled
          window.addEventListener('mousemove', onMouseMove);
        }
      };

      animate();
    };

    // Add this helper function for individual pillar animation
    const createAndAnimatePillar = (
      x: number,
      z: number,
      height: number,
      distance: number
    ) => {
      const { pillar, outline } = createPillar(x, z, height);
      const startTime = Date.now();

      const animateSinglePillar = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / (animationDuration * 1.5), 1);

        // Use distance in the easing calculation
        const easedProgress = smoothRise(progress);

        pillar.scale.y = easedProgress;
        pillar.position.y = (height * easedProgress) / 2;

        // Animate outline with pillar
        outline.scale.y = easedProgress;
        outline.position.y = (height * easedProgress) / 2;

        // Update shader uniforms with distance-based values
        if (pillar.material instanceof THREE.ShaderMaterial) {
          pillar.material.uniforms.time.value = elapsed * 0.5;
          pillar.material.uniforms.distanceFromCenter.value =
            1 - distance / WAVE_PARAMS.MAX_DISTANCE;
        }

        if (progress < 1) {
          requestAnimationFrame(animateSinglePillar);
        }
      };

      animateSinglePillar();
    };

    // Add onMouseMove handler before it's used
    const onMouseMove = (event: MouseEvent) => {
      if (!isGridFilled.current) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.current.setFromCamera(mouse.current, camera);
      const intersects = raycaster.current.intersectObject(plane);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        const x = Math.floor(point.x / cellSize);
        const z = Math.floor(point.z / cellSize);

        // Affect surrounding pillars
        for (let dx = -HOVER_PARAMS.RADIUS; dx <= HOVER_PARAMS.RADIUS; dx++) {
          for (let dz = -HOVER_PARAMS.RADIUS; dz <= HOVER_PARAMS.RADIUS; dz++) {
            const currentX = x + dx;
            const currentZ = z + dz;
            
            if (currentX >= 0 && currentX < gridSize && currentZ >= 0 && currentZ < gridSize) {
              const pillarKey = `${currentX},${currentZ}`;
              const pillar = pillars.current[pillarKey];
              const outline = pillars.current[pillarKey + "_outline"];
              
              if (pillar instanceof THREE.Mesh && pillar.geometry instanceof THREE.BoxGeometry) {
                const distance = Math.sqrt(dx * dx + dz * dz);
                const heightFactor = Math.max(0, 1 - (distance * HOVER_PARAMS.FALLOFF));
                const targetHeight = pillar.geometry.parameters.height * (1 + heightFactor);
                
                // Animate height change
                gsap.to(pillar.scale, {
                  y: 1 + heightFactor * HOVER_PARAMS.MAX_HEIGHT,
                  duration: 0.3,
                  ease: "power2.out"
                });
                
                gsap.to(pillar.position, {
                  y: targetHeight / 2,
                  duration: 0.3,
                  ease: "power2.out"
                });

                // Animate outline
                if (outline instanceof THREE.LineSegments) {
                  gsap.to(outline.scale, {
                    y: 1 + heightFactor * HOVER_PARAMS.MAX_HEIGHT,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                  
                  gsap.to(outline.position, {
                    y: targetHeight / 2,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }
              }
            }
          }
        }
      }
    };

    // Start procedural animation
    animatePillars();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [
    gridSize,
    cellSize,
    gridColor,
    pillarHeight,
    animationDuration,
    backgroundColor,
  ]);

  return <div className="background-grid" ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default InteractiveGrid;
