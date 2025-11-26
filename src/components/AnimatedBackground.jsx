// ——— J'ai repris ce Background de mon portfolio que j'ai fait en react (https://portfoliomarin.vercel.app) dont je m'était déjà inspire d'un component React.bits
import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null, radius: 130 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let w = canvas.width;
    let h = canvas.height;

    const isMobile = window.innerWidth < 768;

    const handleMove = (e) => { 
      mouse.current.x = e.clientX; 
      mouse.current.y = e.clientY; 
    };
    const handleOut = () => { 
      mouse.current.x = null; 
      mouse.current.y = null; 
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleOut);

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.8;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        if (mouse.current.x !== null) {
          const dx = mouse.current.x - this.x;
          const dy = mouse.current.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.current.radius - dist) / mouse.current.radius;
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }
      }
      draw() {
        ctx.fillStyle = "rgba(255, 120, 120, 0.45)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 120; i++) particles.push(new Particle());

    function animate() {
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.fillRect(0, 0, w, h);

      if (!isMobile) {
        const g1 = ctx.createRadialGradient(w*0.25, h*0.8, 0, w*0.25, h*0.8, 420);
        g1.addColorStop(0, "rgba(255,180,180,0.35)");
        g1.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, w, h);

        const g2 = ctx.createRadialGradient(w*0.75, h*0.3, 0, w*0.75, h*0.3, 360);
        g2.addColorStop(0, "rgba(255,150,150,0.25)");
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);
      }

      particles.forEach((p) => { p.update(); p.draw(); });

      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      w = canvas.width;
      h = canvas.height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-screen"
    />
  );
}