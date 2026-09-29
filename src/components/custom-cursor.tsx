"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "interactive" | "text" | "input">("default");
  const [clicked, setClicked] = useState(false);

  const pointerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Immediately mark document to hide default OS cursor
    document.documentElement.classList.add("has-custom-cursor");

    let isTracking = false;

    const onMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      mousePos.current = { x: clientX, y: clientY };

      if (!isTracking) {
        isTracking = true;
        ringPos.current = { x: clientX, y: clientY };
        setVisible(true);
      } else if (!visible) {
        setVisible(true);
      }

      // Zero-lag hardware-accelerated precision pointer (instant follow)
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Detect hover context
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest("input, textarea")) {
          setHoverType("input");
          return;
        }

        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], [data-cursor="hover"], .cursor-pointer, summary'
          )
        );

        if (isInteractive) {
          setHoverType("interactive");
        } else {
          const isText = Boolean(
            target.closest("p, h1, h2, h3, h4, h5, h6, li, span.font-mono, code, blockquote")
          );
          setHoverType(isText ? "text" : "default");
        }
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onTouchStart = () => {
      // Disable custom cursor on touch interaction
      setVisible(false);
      document.documentElement.classList.remove("has-custom-cursor");
      isTracking = false;
    };

    // Smooth lerp physics for trailing aura ring (60Hz / 120Hz smooth tracking)
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
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("touchstart", onTouchStart);
      document.documentElement.classList.remove("has-custom-cursor");
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  return (
    <div
      style={{ zIndex: 999999 }}
      className={`pointer-events-none fixed inset-0 select-none transition-opacity duration-200 ${
        visible && hoverType !== "input" ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Trailing Fluid Geometric Aura / Magnetic Reticle */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`pointer-events-none transition-[width,height,margin,background-color,border-color,opacity,border-radius,box-shadow,transform] duration-200 ease-out ${
            hoverType === "interactive"
              ? "size-12 -ml-6 -mt-6 rounded-full bg-amber-400/20 dark:bg-yellow-400/20 border-2 border-amber-500/90 dark:border-yellow-300/90 shadow-[0_0_24px_rgba(251,191,36,0.45)] backdrop-blur-[0.5px]"
              : hoverType === "text"
              ? "w-1 h-6 -ml-0.5 -mt-3 rounded-full bg-amber-500/80 dark:bg-yellow-400/80 border-none shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              : clicked
              ? "size-5 -ml-2.5 -mt-2.5 rounded-full bg-amber-400/40 border border-amber-500 scale-75"
              : "size-8 -ml-4 -mt-4 rounded-[36%] bg-amber-400/5 dark:bg-yellow-400/5 border border-amber-500/40 dark:border-yellow-400/50 shadow-sm"
          }`}
        />
      </div>

      {/* Zero-Lag Precision Geometric Pointer Needle */}
      <div
        ref={pointerRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`transition-[transform,opacity] duration-150 ease-out ${
            hoverType === "text"
              ? "opacity-0 scale-50"
              : hoverType === "interactive"
              ? "scale-90"
              : clicked
              ? "scale-75 -rotate-12"
              : "scale-100"
          }`}
        >
          {/* Custom Aerodynamic Precision Arrow Needle */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="-ml-[2px] -mt-[2px] filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            {/* Sleek faceted needle body */}
            <path
              d="M2.5 2L18 10L10.5 12L8 19.5L2.5 2Z"
              className="fill-neutral-950 stroke-neutral-50 dark:fill-neutral-100 dark:stroke-neutral-900 stroke-[1.25px]"
              strokeLinejoin="round"
            />
            {/* Radiant amber nucleus core */}
            <circle
              cx="7.5"
              cy="7.5"
              r="2"
              className="fill-amber-400 dark:fill-yellow-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
