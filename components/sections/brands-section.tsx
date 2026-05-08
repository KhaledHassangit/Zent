"use client";

import Image from "next/image";
import type { Dictionary } from "@/lib/types";
import Container from "@/util/Container";

interface BrandsSectionProps {
  dict: Dictionary;
}

export default function BrandsSection({ dict }: BrandsSectionProps) {
  const logos = [
    { src: "/assets/Placement Logos (1).png", alt: "Logo 1" },
    { src: "/assets/Placement Logos (2).png", alt: "Logo 2" },
    { src: "/assets/Placement Logos (3).png", alt: "Logo 3" },
    { src: "/assets/Placement Logos (4).png", alt: "Logo 4" },
    { src: "/assets/Placement Logos (5).png", alt: "Logo 5" },
    { src: "/assets/Placement Logos (6).png", alt: "Logo 6" },
    { src: "/assets/Placement Logos (7).png", alt: "Logo 7" },
  ];

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <Container>
        {/* Text Content Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading font-normal text-[32px] md:text-[50px] leading-[1.1] tracking-normal text-white">
            {dict.brands.heading || "Meet our customers"}
          </h2>
          <p className="font-heading font-normal text-sm leading-[150%] tracking-[-0.2px] text-[#747474]">
            {dict.brands.description || "Helping best teams succeed, from new startups to big companies."}
          </p>
        </div>

        {/* Infinite Scrolling Logos with CSS Animation */}
        <div className="relative w-full overflow-hidden group ">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-black z-10 pointer-events-none" />

          {/* First Scrolling Row */}
          <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`row1-${logo.alt}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </Container>
    </section>
  );
}