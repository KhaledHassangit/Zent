import type { Dictionary, Locale } from "@/types/types";
import Image from "next/image";
import Container from "@/util/Container";
import { ArrowUpRight } from "lucide-react";
import UIButton from "@/util/UIButton";

export default function PixelsExample({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.pixels_example;
  return (
    <section className="bg-black py-12 md:py-20">
      <Container>
        {/* Card Container with pixel-bg.png as the complete background */}
        <div className="relative mx-auto w-full max-w-[1240px] min-h-[400px] md:h-[480px] rounded-[32px] overflow-hidden py-12 md:py-0">
          {/* Pixel Background Image - includes border, E1, E2, web.png and all decorative elements */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/pixel-bg.png"
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center h-full px-6">

            {/* Label Container */}
            <div className="relative flex justify-center w-fit mb-4">
              {/* The Actual Label */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full border border-[rgba(170,255,0,0.17)] bg-[#0a0a0a] px-3 py-1"
              >
                <span className="text-[12px] leading-[16px] text-[#AAFF00]">
                  {p.label}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="mb-4 max-w-[571px] text-center text-[32px] leading-[1.07] text-white md:text-[44px] lg:text-[52px] font-heading">
              {p.heading_start} <span className="font-medium text-[#AAFF00]">{p.heading_accent}</span>
            </h2>

            {/* Action Buttons Container */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">

              {/* Main CTA Button */}
            
                <UIButton href="/#contact" label={p.cta_main} locale={locale} />

              {/* Email Button */}
              <a
                href={`mailto:${p.email}`}
                className="rounded-[42px] flex items-center justify-center whitespace-nowrap lowercase text-[15px] leading-[21px] text-white transition-all duration-300 cursor-pointer hover:bg-white/20"
                style={{
                  width: "137px",
                  height: "48px",
                  background: "rgba(255, 255, 255, 0.1)", // #FFFFFF1A
                  paddingTop: "4px",
                  paddingRight: "16px",
                  paddingBottom: "4px",
                  paddingLeft: "16px",
                  backdropFilter: "blur(10px)"
                }}
              >
                <span className="font-medium">{p.email}</span>
              </a>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}