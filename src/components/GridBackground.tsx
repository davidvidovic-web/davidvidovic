"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";

interface GridBackgroundProps {
  gridSize?: number;
  lineColor?: string;
  crossColor?: string;
  meshColor?: string;
  innerMeshColor?: string;
  crossLength?: number;
  crossThickness?: number;
  crossSpacing?: number;
  innerMeshSpacing?: number;
  animationDuration?: number;
  showMesh?: boolean;
  showInnerMesh?: boolean;
  overflow?: number;
  crossOpacity?: number;
  meshOpacity?: number;
  innerMeshOpacity?: number;
  lineOpacity?: number;
  enablePillarEffect?: boolean;
  pillarColor?: string;
  pillarOpacity?: number;
  backgroundColor?: string; // Add this line
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  gridSize = 60,
  lineColor = "rgba(0, 0, 0, 0.08)",
  crossColor = "rgba(255, 255, 255, 1)",
  meshColor = "rgba(255, 255, 255, 1)",
  innerMeshColor = "rgba(255, 255, 255, 1)",
  crossLength = 20,
  crossThickness = 1,
  crossSpacing = 4,
  innerMeshSpacing = 1,
  animationDuration = 2,
  showMesh = true,
  showInnerMesh = true,
  overflow = 100,
  crossOpacity = 0.6,
  meshOpacity = 0.15,
  innerMeshOpacity = 0.04,
  lineOpacity = 0.08,
  enablePillarEffect = true,
  pillarColor = "rgba(255, 255, 255, 1)",
  pillarOpacity = 0.15,
  backgroundColor = "#000000", // Add default value
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Default off-screen
  
  // Safe props to prevent excessive calculation
  const safeInnerMeshSpacing = Math.max(1, innerMeshSpacing);
  const safeOverflow = Math.min(50, overflow);

  // Throttle function to limit execution rate
  const throttle = useCallback((callback: Function, limit: number) => {
    let waiting = false;
    return function (this: any, ...args: any[]) {
      if (!waiting) {
        callback.apply(this, args);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  }, []);

  // Simplified color helper functions
  const getColorWithOpacity = useCallback((color: string, opacity: number) => {
    if (color.startsWith("rgba")) {
      return color.replace(/rgba\([^,]+,[^,]+,[^,]+,\s*[\d.]+\)/, `rgba($1, $2, $3, ${opacity})`);
    } else if (color.startsWith("rgb")) {
      return color.replace(/rgb\([^,]+,[^,]+,[^,]+\)/, `rgba($1, $2, $3, ${opacity})`);
    }
    return `rgba(255, 255, 255, ${opacity})`;
  }, []);

  // Process colors with opacity
  const lineColorWithOpacity = getColorWithOpacity(lineColor, lineOpacity);
  const crossColorWithOpacity = getColorWithOpacity(crossColor, crossOpacity);
  const meshColorWithOpacity = getColorWithOpacity(meshColor, meshOpacity);
  const innerMeshColorWithOpacity = getColorWithOpacity(innerMeshColor, innerMeshOpacity);
  const pillarColorWithOpacity = getColorWithOpacity(pillarColor, pillarOpacity);

  // Client-side only rendering
  useEffect(() => {
    // Guard against server-side rendering
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track animation frame for cleanup
    let animationFrameId: number;

    // Setup canvas
    const setupCanvas = () => {
      // Get the actual viewport dimensions
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      // Set canvas dimensions to match viewport plus overflow
      const factor = 1 + safeOverflow / 100;
      canvas.width = displayWidth * factor;
      canvas.height = displayHeight * factor;
      
      // Adjust canvas position to center it
      const xOffset = (canvas.width - displayWidth) / 2;
      const yOffset = (canvas.height - displayHeight) / 2;
      
      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;
      canvas.style.position = 'absolute';
      canvas.style.left = `${-xOffset}px`;
      canvas.style.top = `${-yOffset}px`;
      canvas.style.transformOrigin = 'center center';
      
      // Adjust grid size based on viewport dimensions
      const minDimension = Math.min(displayWidth, displayHeight);
      const dynamicGridSize = Math.floor(minDimension / 15); // Ensure we have roughly 15 cells across smallest dimension
      
      // Update grid size calculations
      const adjustedGridSize = gridSize || dynamicGridSize;
      
      // Force redraw with new dimensions
      drawFrame();
    };

    // Handle mouse movement (throttled) only if pillar effect is enabled
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (enablePillarEffect) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    }, 16);

    // Handle mouse leave
    const handleMouseLeave = () => {
      if (enablePillarEffect) {
        // Move mouse position off-screen to hide pillar effect
        setMousePos({ x: -1000, y: -1000 });
      }
    };

    // Draw function with pillar effect
    const drawFrame = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate offset for mouse position conversion
      const offsetX = (canvas.width - window.innerWidth) / 2;
      const offsetY = (canvas.height - window.innerHeight) / 2;
      
      // Convert mouse position to canvas coordinates
      const canvasMouseX = mousePos.x + offsetX;
      const canvasMouseY = mousePos.y + offsetY;
      
      // Calculate which grid cell the mouse is currently in
      const currentGridCellX = Math.floor(canvasMouseX / gridSize) * gridSize;
      const currentGridCellY = Math.floor(canvasMouseY / gridSize) * gridSize;
      
      // Draw pillar effect first (behind everything else)
      if (enablePillarEffect && mousePos.x > 0 && mousePos.y > 0) {
        // Fill column (vertical pillar)
        ctx.fillStyle = pillarColorWithOpacity;
        ctx.fillRect(currentGridCellX, 0, gridSize, canvas.height);
        
        // Fill row (horizontal pillar)
        ctx.fillRect(0, currentGridCellY, canvas.width, gridSize);
        
        // Fill the intersection cell with slightly stronger opacity
        ctx.fillStyle = getColorWithOpacity(pillarColor, pillarOpacity * 1.5);
        ctx.fillRect(currentGridCellX, currentGridCellY, gridSize, gridSize);
      }
      
      // Draw grid lines
      ctx.strokeStyle = lineColorWithOpacity;
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        
        // Highlight grid lines that form the pillar
        if (enablePillarEffect && 
            mousePos.x > 0 && mousePos.y > 0 &&
            (y === currentGridCellY || y === currentGridCellY + gridSize)) {
          ctx.strokeStyle = getColorWithOpacity(lineColor, lineOpacity * 3);
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = lineColorWithOpacity;
          ctx.lineWidth = 1;
        }
        
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        
        // Highlight grid lines that form the pillar
        if (enablePillarEffect && 
            mousePos.x > 0 && mousePos.y > 0 &&
            (x === currentGridCellX || x === currentGridCellX + gridSize)) {
          ctx.strokeStyle = getColorWithOpacity(lineColor, lineOpacity * 3);
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = lineColorWithOpacity;
          ctx.lineWidth = 1;
        }
        
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw crosses (high priority, always render)
      ctx.lineWidth = crossThickness;
      
      for (let x = 0; x <= canvas.width; x += gridSize * crossSpacing) {
        for (let y = 0; y <= canvas.height; y += gridSize * crossSpacing) {
          // Check if cross is in the pillar
          const inPillar = enablePillarEffect && 
                           mousePos.x > 0 && mousePos.y > 0 &&
                           (x >= currentGridCellX && x < currentGridCellX + gridSize || 
                            y >= currentGridCellY && y < currentGridCellY + gridSize);
          
          if (inPillar) {
            ctx.strokeStyle = getColorWithOpacity(crossColor, Math.min(1, crossOpacity * 1.5));
            ctx.lineWidth = crossThickness * 1.2;
          } else {
            ctx.strokeStyle = crossColorWithOpacity;
            ctx.lineWidth = crossThickness;
          }
          
          // Draw cross
          ctx.beginPath();
          ctx.moveTo(x - crossLength / 2, y);
          ctx.lineTo(x + crossLength / 2, y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x, y - crossLength / 2);
          ctx.lineTo(x, y + crossLength / 2);
          ctx.stroke();
        }
      }
      
      // Draw primary mesh if enabled
      if (showMesh) {
        for (let x = 0; x <= canvas.width; x += gridSize * crossSpacing) {
          for (let y = 0; y <= canvas.height; y += gridSize * crossSpacing) {
            // Connect to right neighbor
            if (x + gridSize * crossSpacing <= canvas.width) {
              const x2 = x + gridSize * crossSpacing;
              const y2 = y;
              
              // Check if this mesh line is in the pillar
              const meshInPillar = enablePillarEffect &&
                                   mousePos.x > 0 && mousePos.y > 0 &&
                                   ((x >= currentGridCellX && x < currentGridCellX + gridSize) || 
                                    (x2 >= currentGridCellX && x2 < currentGridCellX + gridSize) ||
                                    (y >= currentGridCellY && y < currentGridCellY + gridSize));
              
              if (meshInPillar) {
                ctx.strokeStyle = getColorWithOpacity(meshColor, Math.min(0.5, meshOpacity * 2));
                ctx.lineWidth = crossThickness * 1.2;
              } else {
                ctx.strokeStyle = meshColorWithOpacity;
                ctx.lineWidth = crossThickness;
              }
              
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
            
            // Connect to bottom neighbor
            if (y + gridSize * crossSpacing <= canvas.height) {
              const x2 = x;
              const y2 = y + gridSize * crossSpacing;
              
              // Check if this mesh line is in the pillar
              const meshInPillar = enablePillarEffect &&
                                   mousePos.x > 0 && mousePos.y > 0 &&
                                   ((y >= currentGridCellY && y < currentGridCellY + gridSize) || 
                                    (y2 >= currentGridCellY && y2 < currentGridCellY + gridSize) ||
                                    (x >= currentGridCellX && x < currentGridCellX + gridSize));
              
              if (meshInPillar) {
                ctx.strokeStyle = getColorWithOpacity(meshColor, Math.min(0.5, meshOpacity * 2));
                ctx.lineWidth = crossThickness * 1.2;
              } else {
                ctx.strokeStyle = meshColorWithOpacity;
                ctx.lineWidth = crossThickness;
              }
              
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
      }
      
      // Draw inner mesh if enabled
      if (showInnerMesh) {
        // Calculate only a reasonable amount of inner mesh lines
        const maxInnerMeshPoints = 5000; // Safety limit
        let drawnPoints = 0;
        
        // Calculate step size based on canvas dimensions to stay under the limit
        const estPointsX = canvas.width / (gridSize * safeInnerMeshSpacing);
        const estPointsY = canvas.height / (gridSize * safeInnerMeshSpacing);
        const estimatedTotal = estPointsX * estPointsY;
        
        // Adjust step size if we would exceed the limit
        const step = estimatedTotal > maxInnerMeshPoints ? 
          Math.ceil(Math.sqrt(estimatedTotal / maxInnerMeshPoints)) : 1;
        
        // Draw inner mesh points with adjustable density
        for (let x = 0; x <= canvas.width; x += gridSize * safeInnerMeshSpacing * step) {
          // Skip if this is a cross point
          if (x % (gridSize * crossSpacing) === 0) continue;
          
          for (let y = 0; y <= canvas.height; y += gridSize * safeInnerMeshSpacing * step) {
            // Skip if this is a cross point
            if (y % (gridSize * crossSpacing) === 0) continue;
            
            drawnPoints++;
            if (drawnPoints > maxInnerMeshPoints) break;
            
            // Check if this inner mesh point is in the pillar
            const pointInPillar = enablePillarEffect && 
                                  mousePos.x > 0 && mousePos.y > 0 &&
                                  ((x >= currentGridCellX && x < currentGridCellX + gridSize) || 
                                   (y >= currentGridCellY && y < currentGridCellY + gridSize));
            
            if (pointInPillar) {
              ctx.strokeStyle = getColorWithOpacity(innerMeshColor, Math.min(0.3, innerMeshOpacity * 4));
              ctx.lineWidth = crossThickness * 0.6;
            } else {
              ctx.strokeStyle = innerMeshColorWithOpacity;
              ctx.lineWidth = crossThickness * 0.4;
            }
            
            // Draw connections to right and bottom neighbors
            if (x + gridSize * safeInnerMeshSpacing * step <= canvas.width) {
              const neighborX = x + gridSize * safeInnerMeshSpacing * step;
              // Skip if neighbor is a cross point
              if (neighborX % (gridSize * crossSpacing) !== 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(neighborX, y);
                ctx.stroke();
              }
            }
            
            if (y + gridSize * safeInnerMeshSpacing * step <= canvas.height) {
              const neighborY = y + gridSize * safeInnerMeshSpacing * step;
              // Skip if neighbor is a cross point
              if (neighborY % (gridSize * crossSpacing) !== 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, neighborY);
                ctx.stroke();
              }
            }
          }
          
          if (drawnPoints > maxInnerMeshPoints) break;
        }
      }
      
      // Continue the animation loop
      animationFrameId = requestAnimationFrame(drawFrame);
    };

    // Set up event listeners
    if (enablePillarEffect) {
      window.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", setupCanvas);
    
    // Initial setup
    setupCanvas();
    
    // Add ResizeObserver for more accurate size tracking
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) return; // Skip invalid sizes
        
        // Update canvas dimensions and redraw
        setupCanvas();
      }
    });

    // Observe container size changes
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup resize observer
    return () => {
      resizeObserver.disconnect();
      if (enablePillarEffect) {
        window.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", setupCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    gridSize,
    crossSpacing,
    safeInnerMeshSpacing,
    showMesh,
    showInnerMesh,
    lineColorWithOpacity,
    crossColorWithOpacity,
    meshColorWithOpacity,
    innerMeshColorWithOpacity,
    pillarColorWithOpacity,
    crossLength,
    crossThickness,
    getColorWithOpacity,
    safeOverflow,
    enablePillarEffect,
    pillarColor,
    pillarOpacity,
    lineColor,
    lineOpacity,
    crossColor,
    crossOpacity,
    meshColor,
    meshOpacity,
    innerMeshColor,
    innerMeshOpacity,
    throttle
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        backgroundColor: "transparent", // Add this to match background color
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default GridBackground;
