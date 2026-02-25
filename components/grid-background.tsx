"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const isDark = resolvedTheme === "dark";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const gridSize = 28;
      const dotBase = 0.6;

      ctx.clearRect(0, 0, w, h);

      // Slow breathing pulse
      const pulse = 0.5 + 0.5 * Math.sin(time * 0.4);

      // Two soft glow centers that drift slowly
      const g1x = w * 0.5 + Math.sin(time * 0.15) * w * 0.25;
      const g1y = h * 0.4 + Math.cos(time * 0.2) * h * 0.15;
      const g2x = w * 0.5 + Math.cos(time * 0.12) * w * 0.2;
      const g2y = h * 0.6 + Math.sin(time * 0.18) * h * 0.12;
      const glowRadius = Math.max(w, h) * 0.35;

      const baseAlpha = isDark ? 0.08 : 0.12;
      const glowAlpha = isDark ? 0.25 : 0.35;
      const hue = 230;

      for (let x = gridSize; x < w; x += gridSize) {
        for (let y = gridSize; y < h; y += gridSize) {
          const d1 = Math.hypot(x - g1x, y - g1y);
          const d2 = Math.hypot(x - g2x, y - g2y);
          const intensity = Math.max(
            0,
            1 - d1 / glowRadius,
            (1 - d2 / glowRadius) * 0.7
          );

          const alpha = baseAlpha + intensity * glowAlpha * pulse;
          const sat = intensity * 40;
          const light = isDark ? 60 + intensity * 15 : 45 + intensity * 10;
          const radius = dotBase + intensity * pulse * 0.6;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
          ctx.fill();
        }
      }

      time += 0.012;
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      aria-hidden="true"
    />
  );
}
