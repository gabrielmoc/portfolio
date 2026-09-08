import { useEffect, useRef } from 'react';

/** Decorative canvas: no React renders per frame, capped pixel density and reduced-motion support. */
export default function HeroBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const section = canvas.closest("section")!;
    let width = 0, height = 0, frame = 0, visible = true, time = 0, last = 0;
    const pointer = { x: -1000, y: -1000 };
    const points = Array.from({ length: 38 }, (_, i) => ({ x: ((i * 47 + 13) % 101) / 101, y: ((i * 31 + 7) % 103) / 103, phase: i * 1.7 }));
    const draw = (timestamp = 0) => {
      if (last) time += Math.min(timestamp - last, 40) * 0.00015;
      last = timestamp;
      context.clearRect(0, 0, width, height);
      const positions = points.map(p => ({ x: p.x * width + Math.sin(time + p.phase) * 22, y: p.y * height + Math.cos(time * .8 + p.phase) * 24 }));
      positions.forEach((p, i) => {
        context.fillStyle = 'rgba(59,130,246,0.4)';
        context.beginPath(); context.arc(p.x, p.y, 1.8, 0, Math.PI * 2); context.fill();
        positions.slice(i + 1).forEach(q => {
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 155) { context.strokeStyle = `rgba(59,130,246,${(1 - distance / 155) * .17})`; context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(q.x, q.y); context.stroke(); }
        });
        const distance = Math.hypot(pointer.x - p.x, pointer.y - p.y);
        if (!reduced.matches && distance < 190) { context.strokeStyle = `rgba(56,189,248,${(1 - distance / 190) * .4})`; context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(pointer.x, pointer.y); context.stroke(); }
      });
      if (!reduced.matches && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const restart = () => { cancelAnimationFrame(frame); last = 0; draw(); };
    const resize = new ResizeObserver(() => { width = section.clientWidth; height = section.clientHeight; const ratio = Math.min(devicePixelRatio || 1, 2); canvas.width = width * ratio; canvas.height = height * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); restart(); });
    resize.observe(section);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); }); observer.observe(section);
    const move = (event: PointerEvent) => { if (event.pointerType !== 'mouse') return; const rect = section.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; };
    const leave = () => { pointer.x = pointer.y = -1000; };
    section.addEventListener('pointermove', move); section.addEventListener('pointerleave', leave);
    reduced.addEventListener('change', restart); document.addEventListener('visibilitychange', restart);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); section.removeEventListener('pointermove', move); section.removeEventListener('pointerleave', leave); reduced.removeEventListener('change', restart); document.removeEventListener('visibilitychange', restart); };
  }, []);
  return <div className="hero-atmosphere absolute inset-0 pointer-events-none" aria-hidden="true"><div className="hero-glow" /><canvas ref={ref} className="absolute inset-0 h-full w-full" /></div>;
}
