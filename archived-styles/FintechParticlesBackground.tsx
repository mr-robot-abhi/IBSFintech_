"use client";
import React, { useRef, useEffect } from "react";

const COLORS = ["#2563eb", "#38bdf8", "#60a5fa", "#e0f2fe", "#fff"];
const PARTICLE_COUNT = 60;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function FintechParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, 1),
      y: randomBetween(0, 1),
      r: randomBetween(1.5, 3.5),
      dx: randomBetween(-0.04, 0.04),
      dy: randomBetween(-0.04, 0.04),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: randomBetween(0.3, 0.8),
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles.current) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Draw subtle lines between close particles
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dist = Math.hypot(
            a.x * canvas.width - b.x * canvas.width,
            a.y * canvas.height - b.y * canvas.height
          );
          if (dist < 120) {
            ctx.globalAlpha = 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x * canvas.width, a.y * canvas.height);
            ctx.lineTo(b.x * canvas.width, b.y * canvas.height);
            ctx.strokeStyle = a.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function animate() {
      for (const p of particles.current) {
        p.x += p.dx * 0.02; // reduced from 0.05 to 0.02 for even slower movement
        p.y += p.dy * 0.02;
        if (p.x < 0 || p.x > 1) p.dx *= -1;
        if (p.y < 0 || p.y > 1) p.dy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-2] pointer-events-none bg-[#0a1833]"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -2 }}
      aria-hidden="true"
    />
  );
} 