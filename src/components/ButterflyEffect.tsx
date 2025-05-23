import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface ButterflyEffectProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  butterflyColor?: string;
  butterflyCount?: number;
  animationSpeed?: number;
  trailLength?: number;
}

const ButterflyEffect: React.FC<ButterflyEffectProps> = ({
  width = window.innerWidth,
  height = window.innerHeight,
  backgroundColor = "#0a0a24",
  butterflyColor = "#88ccff",
  butterflyCount = 80,
  animationSpeed = 1.0,
  trailLength = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Butterfly group for easier manipulation
    const butterflies: THREE.Group[] = [];
    const trails: THREE.Line[][] = [];

    // Create butterflies
    for (let i = 0; i < butterflyCount; i++) {
      // Create butterfly group
      const butterfly = new THREE.Group();

      // Wing material with gradient effect
      const wingMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(butterflyColor) },
          time: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          
          void main() {
            // Create gradient from center to edge
            float distFromCenter = length(vUv - vec2(0.5, 0.5)) * 2.0;
            
            // Pulse effect
            float pulse = sin(time * 5.0 + distFromCenter * 10.0) * 0.5 + 0.5;
            
            // Combine base color with pulse effect
            vec3 finalColor = color * (0.6 + 0.4 * pulse);
            
            // Fade out at edges
            float alpha = smoothstep(1.0, 0.7, distFromCenter);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      });

      // Create wing geometry using a custom shape
      const wingShape = new THREE.Shape();

      // Create butterfly wing shape using parametric equations
      wingShape.moveTo(0, 0);

      for (let t = 0; t < Math.PI * 2; t += 0.1) {
        const x =
          Math.sin(t) *
          (Math.exp(Math.cos(t)) -
            2 * Math.cos(4 * t) -
            Math.pow(Math.sin(t / 12), 5));
        const y =
          Math.cos(t) *
          (Math.exp(Math.cos(t)) -
            2 * Math.cos(4 * t) -
            Math.pow(Math.sin(t / 12), 5));
        wingShape.lineTo(x, y);
      }

      const wingGeometry = new THREE.ShapeGeometry(wingShape);
      wingGeometry.scale(0.4, 0.4, 0.4);

      // Left wing
      const leftWing = new THREE.Mesh(wingGeometry, wingMaterial.clone());
      leftWing.position.set(-0.2, 0, 0);
      butterfly.add(leftWing);

      // Right wing (mirror of left)
      const rightWing = new THREE.Mesh(wingGeometry, wingMaterial.clone());
      rightWing.position.set(0.2, 0, 0);
      rightWing.scale.x = -1; // Mirror
      butterfly.add(rightWing);

      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
      const bodyMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(butterflyColor).lerp(
          new THREE.Color("#000000"),
          0.5
        ),
        shininess: 100,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      butterfly.add(body);

      // Random initial position
      butterfly.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );

      // Random initial rotation
      butterfly.rotation.x = Math.random() * Math.PI;
      butterfly.rotation.y = Math.random() * Math.PI;
      butterfly.rotation.z = Math.random() * Math.PI;

      // Random initial velocity vector
      butterfly.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        ),
        phase: Math.random() * Math.PI * 2,
        wingFlap: 0,
      };

      scene.add(butterfly);
      butterflies.push(butterfly);

      // Create trail for this butterfly
      const trailPositions = new Array(trailLength)
        .fill(0)
        .map(() => new THREE.Vector3().copy(butterfly.position));

      const trailGeometry = new THREE.BufferGeometry().setFromPoints(
        trailPositions
      );

      // Create multiple trail segments with different opacities
      const butterflyTrails = [];

      for (let j = 1; j < trailLength; j++) {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: butterflyColor,
          transparent: true,
          opacity: 1 - j / trailLength,
        });

        const points = [trailPositions[j - 1], trailPositions[j]];
        const segmentGeometry = new THREE.BufferGeometry().setFromPoints(
          points
        );
        const line = new THREE.Line(segmentGeometry, lineMaterial);

        scene.add(line);
        butterflyTrails.push(line);
      }

      trails.push(butterflyTrails);
    }

    // Mathematical functions for butterfly movement
    const butterflyEquations = {
      // Lorenz attractor parameters
      lorenz: {
        sigma: 10,
        rho: 28,
        beta: 8 / 3,
        scale: 0.02,
      },

      // Heart curve
      heart: (t: number, scale: number) => {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t);
        return new THREE.Vector3(x, y, 0).multiplyScalar(scale);
      },

      // Figure-8 curve
      figure8: (t: number, scale: number) => {
        const x = Math.sin(t);
        const y = Math.sin(t) * Math.cos(t);
        return new THREE.Vector3(x, y, 0).multiplyScalar(scale);
      },
    };

    // Animation time
    let time = 0;
    let attractorMode = 0;
    let transitionTime = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.005 * animationSpeed;

      // Switch attractor mode every 10 seconds
      if (time % 10 < 0.01) {
        transitionTime = 0;
        attractorMode = (attractorMode + 1) % 3;
      }

      transitionTime = Math.min(transitionTime + 0.01, 1);

      // Update butterflies
      butterflies.forEach((butterfly, index) => {
        const { velocity, phase } = butterfly.userData;

        // Wing flapping animation
        butterfly.userData.wingFlap += 0.1 * animationSpeed;
        const wingFlapSin = Math.sin(butterfly.userData.wingFlap) * 0.5;

        (butterfly.children[0] as THREE.Mesh).rotation.y = wingFlapSin;
        (butterfly.children[1] as THREE.Mesh).rotation.y = -wingFlapSin;

        // Update shader time uniform for wing color effect
        (
          butterfly.children[0].material as THREE.ShaderMaterial
        ).uniforms.time.value = time + index;
        (
          butterfly.children[1].material as THREE.ShaderMaterial
        ).uniforms.time.value = time + index;

        // Calculate target point based on mathematical equations
        let targetPoint = new THREE.Vector3();

        switch (attractorMode) {
          case 0: // Lorenz attractor
            const { sigma, rho, beta, scale } = butterflyEquations.lorenz;
            const dt = 0.01;

            // Lorenz equations
            const dx = sigma * (butterfly.position.y - butterfly.position.x);
            const dy =
              butterfly.position.x * (rho - butterfly.position.z) -
              butterfly.position.y;
            const dz =
              butterfly.position.x * butterfly.position.y -
              beta * butterfly.position.z;

            targetPoint.set(
              butterfly.position.x + dx * dt * scale,
              butterfly.position.y + dy * dt * scale,
              butterfly.position.z + dz * dt * scale
            );
            break;

          case 1: // Heart curve
            targetPoint = butterflyEquations.heart(
              time * 0.2 + index * 0.1,
              0.2
            );
            targetPoint.z = Math.sin(time + index) * 2; // Add some z-variation
            break;

          case 2: // Figure-8
            targetPoint = butterflyEquations.figure8(
              time * 0.5 + index * 0.2,
              15
            );
            targetPoint.z = Math.sin(time * 2 + index) * 5;
            break;
        }

        // Smoothly move toward target point
        velocity.x += (targetPoint.x - butterfly.position.x) * 0.01;
        velocity.y += (targetPoint.y - butterfly.position.y) * 0.01;
        velocity.z += (targetPoint.z - butterfly.position.z) * 0.01;

        // Damping
        velocity.multiplyScalar(0.95);

        // Apply velocity
        butterfly.position.add(velocity);

        // Make butterfly face direction of movement
        if (velocity.length() > 0.01) {
          const lookTarget = butterfly.position
            .clone()
            .add(velocity.clone().normalize());
          butterfly.lookAt(lookTarget);

          // Add additional rotation to make it look more natural
          butterfly.rotation.y += Math.PI;
        }

        // Boundaries - wrap around
        const bound = 20;
        if (Math.abs(butterfly.position.x) > bound)
          butterfly.position.x *= -0.9;
        if (Math.abs(butterfly.position.y) > bound)
          butterfly.position.y *= -0.9;
        if (Math.abs(butterfly.position.z) > bound)
          butterfly.position.z *= -0.9;

        // Update trail positions
        const butterflyTrails = trails[index];

        if (butterflyTrails && butterflyTrails.length > 0) {
          for (let j = butterflyTrails.length - 1; j >= 0; j--) {
            const line = butterflyTrails[j];

            // Get the line geometry
            const lineGeometry = line.geometry as THREE.BufferGeometry;
            const positions = lineGeometry.attributes.position.array;

            if (j === 0) {
              // First segment: connect to butterfly
              positions[0] = butterfly.position.x;
              positions[1] = butterfly.position.y;
              positions[2] = butterfly.position.z;

              // Get position from the next segment's start point
              if (butterflyTrails.length > 1) {
                const nextLineGeometry = butterflyTrails[1]
                  .geometry as THREE.BufferGeometry;
                const nextPositions =
                  nextLineGeometry.attributes.position.array;

                positions[3] = nextPositions[0];
                positions[4] = nextPositions[1];
                positions[5] = nextPositions[2];
              } else {
                positions[3] = butterfly.position.x - velocity.x * 2;
                positions[4] = butterfly.position.y - velocity.y * 2;
                positions[5] = butterfly.position.z - velocity.z * 2;
              }
            } else {
              // Other segments: move points forward in the trail
              const prevLineGeometry = butterflyTrails[j - 1]
                .geometry as THREE.BufferGeometry;
              const prevPositions = prevLineGeometry.attributes.position.array;

              positions[0] = prevPositions[3];
              positions[1] = prevPositions[4];
              positions[2] = prevPositions[5];

              if (j < butterflyTrails.length - 1) {
                // Get position from the next segment
                const nextLineGeometry = butterflyTrails[j + 1]
                  .geometry as THREE.BufferGeometry;
                const nextPositions =
                  nextLineGeometry.attributes.position.array;

                positions[3] = nextPositions[0];
                positions[4] = nextPositions[1];
                positions[5] = nextPositions[2];
              } else {
                // Last segment: gradually fade out
                positions[3] += (positions[0] - positions[3]) * 0.1;
                positions[4] += (positions[1] - positions[4]) * 0.1;
                positions[5] += (positions[2] - positions[5]) * 0.1;
              }
            }

            lineGeometry.attributes.position.needsUpdate = true;
          }
        }
      });

      // Slowly rotate scene for added dimension
      scene.rotation.y = Math.sin(time * 0.1) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      butterflies.forEach((butterfly) => {
        butterfly.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            }
          }
        });
      });

      trails.forEach((butterflyTrails) => {
        butterflyTrails.forEach((line) => {
          line.geometry.dispose();
          if (line.material instanceof THREE.Material) {
            line.material.dispose();
          }
        });
      });
    };
  }, [
    width,
    height,
    backgroundColor,
    butterflyColor,
    butterflyCount,
    animationSpeed,
    trailLength,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ButterflyEffect;
