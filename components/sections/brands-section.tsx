"use client";

import Image from "next/image";
import Container from "@/util/Container";
import { SectionProps } from "@/types/types";
import { logos } from "@/lib/data";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";



export default function BrandsSection({ dict }: SectionProps) {
  return (
    <MotionDiv
      as="section"
      className="bg-black text-white py-20 overflow-hidden"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading font-normal text-[32px] md:text-[50px] leading-[1.1] tracking-normal text-white">
            {dict.brands.heading || "Meet our customers"}
          </h2>
          <p className="font-heading font-normal text-sm leading-[150%] tracking-[-0.2px] text-[#747474]">
            {dict.brands.description || "Helping best teams succeed, from new startups to big companies."}
          </p>
        </div>

        <div className="relative w-full overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-r from-transparent to-black z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll group-hover:paused">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`row1-${logo.alt}-${index}`}
                className="shrink-0 mx-6 md:mx-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
      </Container>
    </MotionDiv>
  );
}