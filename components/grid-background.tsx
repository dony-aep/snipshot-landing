"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      const gridSize = 60;
      const dotSize = 0.6;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Glow position (moves in a figure-8 pattern)
      const glowX = canvas.width / 2 + Math.sin(time * 0.5) * canvas.width * 0.3;
      const glowY = canvas.height / 2 + Math.sin(time * 0.7) * canvas.height * 0.2;
      const glowRadius = 400;

      // Draw dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distX = x - glowX;
          const distY = y - glowY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          // Calculate opacity based on distance from glow
          const glowIntensity = Math.max(0, 1 - distance / glowRadius);
          const baseOpacity = 0.15;
          const opacity = baseOpacity + glowIntensity * 0.6;

          // Color: primary color when close to glow, gray otherwise
          const hue = 200; // Matches primary color
          const saturation = glowIntensity * 60;
          const lightness = 50 + glowIntensity * 20;

          ctx.beginPath();
          ctx.arc(x, y, dotSize + glowIntensity * 1, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.fill();
        }
      }

      // Draw subtle glow
      const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, glowRadius);
      gradient.addColorStop(0, "hsla(200, 80%, 50%, 0.08)");
      gradient.addColorStop(1, "hsla(200, 80%, 50%, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resize();
    drawGrid();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      aria-hidden="true"
    />
  );
}
