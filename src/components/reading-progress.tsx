"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(
          Number((currentProgress / scrollHeight).toFixed(3)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 transition-all duration-100 ease-out origin-left pointer-events-none"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
