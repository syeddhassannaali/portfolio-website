"use client";

import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import NoiseImg from "../../../public/images/noise.svg";

function CinematicBackground({ children }: { children: ReactNode }) {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const orb = orbRef.current;
    const container = containerRef.current;

    if (!orb || !container) return;

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(orb, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 1.6,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", move);

    return () => container.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden md:rounded-b-[70px] rounded-b-[55px] lg:rounded-b-[80px] bg-black will-change-transform"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(circle at 20% 20%, rgba(40,40,40,0.32), transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(55,55,55,0.25), transparent 55%),
          radial-gradient(circle at 50% 50%, rgba(25,25,25,0.28), transparent 65%)
        `,
        }}
      />

      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="70"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M70 0 L0 0 0 70"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute -top-[200px] -left-[200px] w-[700px] h-[700px] bg-[#1f1f1f] opacity-[0.25] blur-[140px]" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-[#2a2a2a] opacity-[0.25] blur-[160px]" />

      <div
        ref={orbRef}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(55,55,55,0.45) 0%, rgba(30,30,30,0.25) 45%, transparent 75%)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light">
        <Image src={NoiseImg} alt="noise" fill className="repeat" />
      </div>

      <div className="relative z-10 text-dark-foreground">{children}</div>
    </div>
  );
}

export default CinematicBackground;
