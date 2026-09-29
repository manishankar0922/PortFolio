"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Enable custom cursor as soon as any mouse activity occurs
    let isTracking = false;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isTracking) {
        isTracking = true;
        setVisible(true);
        document.documentElement.classList.add("has-custom-cursor");
      }

      // Fast precision center dot (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect hover over any interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, textarea, select, [role="button"], [data-cursor="hover"], .cursor-pointer, svg'
          )
        );
        setHovered(isInteractive);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Smooth lerp physics for the outer aura ring
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const renderLoop = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.2);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.2);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("has-custom-cursor");
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-9999 select-none transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer fluid trailing ring with glow */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none transition-[width,height,margin,background-color,border-color,transform] duration-200 ease-out will-change-transform ${
          hovered
            ? "size-10 -ml-5 -mt-5 bg-amber-400/20 border-2 border-amber-400 dark:border-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.4)] backdrop-blur-[0.5px]"
            : clicked
            ? "size-6 -ml-3 -mt-3 bg-amber-400/30 border border-amber-500 scale-90"
            : "size-8 -ml-4 -mt-4 bg-transparent border border-neutral-800/40 dark:border-neutral-200/40"
        }`}
      />

      {/* Inner sharp precision diamond/dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 rounded-full pointer-events-none transition-[transform,background-color] duration-75 ease-out will-change-transform ${
          hovered
            ? "size-2.5 -ml-1.25 -mt-1.25 bg-amber-500 dark:bg-yellow-400 scale-125 shadow-sm"
            : clicked
            ? "size-2 -ml-1 -mt-1 bg-amber-600 scale-75"
            : "size-2 -ml-1 -mt-1 bg-neutral-900 dark:bg-neutral-100"
        }`}
      />
    </div>
  );
}
