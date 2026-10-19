"use client";

import { useEffect, useRef, useState } from "react";

interface MobiCareLottiePlayerProps {
  className?: string;
}

export default function MobiCareLottiePlayer({ className }: MobiCareLottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<import("lottie-web").AnimationItem | null>(null);
  const inViewportRef = useRef(false);
  const hasStartedRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const syncPlayback = () => {
      const anim = animRef.current;
      if (!anim || prefersReducedMotionRef.current) return;

      if (document.hidden || !inViewportRef.current) {
        anim.pause();
        return;
      }

      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        anim.goToAndPlay(0, true);
        return;
      }

      anim.play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewportRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.1;
        syncPlayback();
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    document.addEventListener("visibilitychange", syncPlayback);

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
        prefersReducedMotionRef.current = prefersReducedMotion;

        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
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
              anim.goToAndStop(350, true); // Settled logo after the camera pull-back.
            } else {
              syncPlayback();
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
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <div
      className={`who-lottie-container ${isLoaded ? "is-loaded" : ""} ${className || ""}`}
      aria-label="Animasi logo motion graphic MobiCare Service Center"
      role="img"
    >
      <div ref={containerRef} className="who-lottie-player" />
    </div>
  );
}
