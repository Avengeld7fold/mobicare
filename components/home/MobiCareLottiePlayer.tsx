"use client";

import { useEffect, useRef, useState } from "react";

interface MobiCareLottiePlayerProps {
  className?: string;
}

export default function MobiCareLottiePlayer({ className }: MobiCareLottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<import("lottie-web").AnimationItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function initLottie() {
      if (!containerRef.current) return;

      try {
        const lottieModule = await import("lottie-web");
        const lottie = lottieModule.default || lottieModule;

        if (!isMounted || !containerRef.current) return;

        if (animRef.current) {
          animRef.current.destroy();
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: !prefersReducedMotion,
          path: "/lottie/mobicare-motion.json",
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
            progressiveLoad: true,
            hideOnTransparent: true,
          },
        });

        animRef.current = anim;
        if (typeof window !== "undefined") {
          (window as unknown as { __mobicareLottieAnim?: import("lottie-web").AnimationItem }).__mobicareLottieAnim = anim;
        }

        anim.addEventListener("DOMLoaded", () => {
          if (isMounted) {
            setIsLoaded(true);
            if (prefersReducedMotion) {
              anim.goToAndStop(215, true); // Jump directly to settled logo
            }
          }
        });
      } catch (err) {
        console.error("Failed to load MobiCare Lottie animation:", err);
      }
    }

    initLottie();

    return () => {
      isMounted = false;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, []);

  const handleReplay = () => {
    if (animRef.current) {
      animRef.current.goToAndPlay(0, true);
    }
  };

  return (
    <div
      className={`who-lottie-container ${isLoaded ? "is-loaded" : ""} ${className || ""}`}
      aria-label="Animasi logo motion graphic MobiCare Service Center"
      role="img"
      onClick={handleReplay}
      title="Klik untuk putar ulang animasi"
    >
      <div ref={containerRef} className="who-lottie-player" />
    </div>
  );
}
