
import { useEffect, useRef } from 'react';

export const StarGalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkle: number;
      speed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create galaxy gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#2b2525');
      gradient.addColorStop(0.5, '#1a1a2e');
      gradient.addColorStop(1, '#0f0f1e');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        // Update twinkle effect
        star.twinkle += star.speed;
        const twinkleOpacity = (Math.sin(star.twinkle) + 1) / 2;
        const finalOpacity = star.opacity * twinkleOpacity;

        // Mouse interaction effect
        let glowIntensity = 1;
        if (isMouseMoving) {
          const distance = Math.sqrt(
            Math.pow(mouseX - star.x, 2) + Math.pow(mouseY - star.y, 2)
          );
          if (distance < 150) {
            glowIntensity = 3 - (distance / 75);
          }
        }

        // Draw star with glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * glowIntensity, 0, Math.PI * 2);
        
        // Main star
        ctx.fillStyle = `rgba(255, 215, 0, ${finalOpacity})`;
        ctx.fill();

        // Glow effect
        if (glowIntensity > 1) {
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 10 * glowIntensity;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Occasional shooting star effect
        if (Math.random() < 0.001) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - 20, star.y + 5);
          ctx.strokeStyle = `rgba(255, 215, 0, ${finalOpacity * 0.8})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ 
        background: 'linear-gradient(135deg, #2b2525 0%, #1a1a2e 50%, #0f0f1e 100%)'
      }}
    />
  );
};
