import { useEffect, useRef } from 'react';

/**
 * AI 粒子系统 - 神经网络风格
 * 创建动态的粒子连接效果，象征 AI 和思想的流动
 */
const AIParticles = ({
  particleCount = 80,
  connectionDistance = 150,
  particleColor = 'rgba(59, 130, 246, 0.6)',
  lineColor = 'rgba(59, 130, 246, 0.2)',
  particleSize = 2,
  speed = 0.5,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 设置画布尺寸
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = particleSize;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // 边界反弹
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // 保持在画布内
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    // 创建粒子数组
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // 鼠标移动事件
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 更新和绘制粒子
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // 绘制连接线
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${opacity * 0.3})`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // 鼠标交互：粒子被鼠标吸引
        const dx = mouseRef.current.x - p1.x;
        const dy = mouseRef.current.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          const opacity = 1 - distance / 200;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, connectionDistance, particleColor, lineColor, particleSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default AIParticles;
