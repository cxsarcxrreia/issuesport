import { useState, useEffect, useRef, RefObject } from 'react';

export interface DVDBounceItem {
  id: string;
  label: string;
  onClick: () => void;
}

export function DVDBounce({ containerRef, items }: { containerRef: RefObject<HTMLDivElement>, items: DVDBounceItem[] }) {
  const [positions, setPositions] = useState<{ id: string, x: number, y: number, vx: number, vy: number, w: number, h: number }[]>([]);
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const boxW = isMobile ? 80 : 120;
    const boxH = isMobile ? 30 : 40;

    setPositions(items.map((item, i) => ({
      id: item.id,
      x: Math.random() * (width - boxW),
      y: Math.random() * (height - boxH),
      vx: (i % 2 === 0 ? 1 : -1) * (1.5 + Math.random() * 0.5),
      vy: (i % 2 === 1 ? 1 : -1) * (1.5 + Math.random() * 0.5),
      w: boxW,
      h: boxH
    })));
  }, [items, containerRef]);

  useEffect(() => {
    let frameId: number;
    const update = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();

      setPositions(prev => prev.map(p => {
        let { x, y, vx, vy, id } = p;
        const el = itemRefs.current[id];
        const isMobile = window.innerWidth < 768;
        const w = el?.offsetWidth || (isMobile ? 80 : 120);
        const h = el?.offsetHeight || (isMobile ? 30 : 40);

        // Adjusted speed
        x += vx * 0.81;
        y += vy * 0.81;

        // Bounce logic with slight padding
        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx);
        } else if (x + w >= width) {
          x = width - w;
          vx = -Math.abs(vx);
        }

        if (y <= 0) {
          y = 0;
          vy = Math.abs(vy);
        } else if (y + h >= height) {
          y = height - h;
          vy = -Math.abs(vy);
        }

        return { ...p, x, y, vx, vy, w, h };
      }));
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [containerRef]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item) => {
        const pos = positions.find(p => p.id === item.id);
        if (!pos) return null;
        return (
          <button
            key={item.id}
            ref={node => itemRefs.current[item.id] = node}
            onClick={(e) => {
              e.stopPropagation();
              item.onClick();
            }}
            className="absolute pointer-events-auto text-sm md:text-3xl items-center justify-center font-black text-electric-blue uppercase cursor-pointer z-40 whitespace-nowrap select-none will-change-transform"
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
