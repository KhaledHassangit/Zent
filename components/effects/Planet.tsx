"use client";

import Image from "next/image";

export default function Planet() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -mt-[60px] md:top-[0%] md:mt-0 z-[2]"
    >
      <div className="relative">
        {/* Layer 1 — blurred bloom */}
        <Image
          src="/assets/planet.gif"
          alt=""
          width={891}
          height={891}
          unoptimized
          priority
          className="w-[150vw] max-w-none md:w-[500px] xl:w-[891px] h-auto object-contain blur-[6px] md:blur-[5px]"
        />
        {/* Layer 2 — sharp with bottom fade mask */}
        <Image
          src="/assets/planet.gif"
          alt="3D Sphere"
          aria-hidden
          width={891}
          height={891}
          unoptimized
          loading="lazy"
          className="absolute inset-0 w-[150vw] max-w-none md:w-[500px] xl:w-[891px] h-auto object-contain"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 65%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 65%)",
          }}
        />
      </div>
    </div>
  );
}