"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth lerp positions for the trailing ring
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices with a fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouch(false);
      setMounted(true);
      document.documentElement.classList.add("has-custom-cursor");
    } else {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Inner dot follows instantly without lag for precision
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, textarea, select, [role="button"], [data-cursor="hover"], .cursor-pointer'
          )
        );
        setHovered(isInteractive);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Smooth animation loop for the outer ring using lerp
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const renderLoop = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

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
  }, [visible]);

  if (!mounted || isTouch) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-100 overflow-hidden transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer fluid trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none transition-[width,height,background-color,border-color,transform] duration-200 ease-out will-change-transform ${
          hovered
            ? "size-10 -ml-5 -mt-5 bg-primary/15 border border-primary/50 shadow-[0_0_15px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-[1px]"
            : clicked
            ? "size-6 -ml-3 -mt-3 bg-primary/20 border border-primary/60 scale-90"
            : "size-8 -ml-4 -mt-4 bg-transparent border border-foreground/35"
        }`}
      />

      {/* Inner sharp precision dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 rounded-full pointer-events-none transition-transform duration-100 ease-out will-change-transform ${
          hovered
            ? "size-2 -ml-1 -mt-1 bg-primary scale-125 shadow-sm"
            : clicked
            ? "size-2 -ml-1 -mt-1 bg-primary scale-75"
            : "size-2 -ml-1 -mt-1 bg-foreground"
        }`}
      />
    </div>
  );
}
