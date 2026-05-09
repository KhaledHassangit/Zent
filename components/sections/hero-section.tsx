"use client";

import dynamic from "next/dynamic";
import Link from "@/util/link";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";
import type { LocaleSectionProps } from "@/types/types";
import UIButton from "@/util/UIButton";
import { socialLinks } from "@/lib/data";

const Stars  = dynamic(() => import("../effects/Stars"),  { ssr: false });
const Planet = dynamic(() => import("../effects/Planet"), { ssr: false });

export default function HeroSection({ dict, locale }: LocaleSectionProps) {
  const h = dict.hero;
  const headingLines = h.heading.split("\n");

  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <MotionDiv
        as="section"
        id="home"
        className="relative w-full min-h-screen bg-black overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Twinkling stars — full hero height, left + right */}
        <Stars />

        {/* Animated planet */}
        <Planet />

        {/* ── CONTENT ──────────────────────────────────────────────── */}
        <div className="relative z-10 w-full px-4 md:px-[50px] xl:px-[100px] flex flex-col justify-end min-h-screen pb-[150px]">
          <div className="mx-auto w-full max-w-[1440px] space-y-3">

            {/* Heading */}
            <div className="w-full">
              <h1
                className="text-white capitalize text-[36px] leading-[42px] md:text-[50px] md:leading-[58px] lg:text-[60px] lg:leading-[70px] font-heading"
                style={{ maxWidth: "1118px", fontWeight: 400, verticalAlign: "middle", whiteSpace: "pre-line" }}
              >
                {headingLines.map((line, index) => (
                  <span key={index} className="block overflow-hidden">
                    <MotionDiv
                      as="span"
                      className="block"
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.7, delay: 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {line}
                    </MotionDiv>
                  </span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <MotionDiv
              className="max-w-[587px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[13px] leading-[20.3px] md:text-[16px] md:leading-[23.27px] text-white/55">
                {h.description}
              </p>
            </MotionDiv>

            {/* CTA + Social row */}
            <MotionDiv
              className="flex flex-col xl:flex-row justify-between xl:items-center w-full mt-6 gap-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Buttons */}
              <div className="flex flex-row items-start gap-3">
                <UIButton href="/#contact" label={h.cta_primary} locale={locale} />
                <Link
                  href={`/${locale}#projects`}
                  className="rounded-[42px] flex items-center justify-center whitespace-nowrap capitalize text-[15px] leading-[21px] border border-white/[0.12] bg-white/[0.06] text-white px-[16px] py-[4px] h-[48px] hover:bg-white/[0.10] transition-colors duration-200 backdrop-blur-[10px]"
                >
                  <span className="font-medium">{h.cta_secondary}</span>
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-white whitespace-nowrap">{h.social_label}</span>
                <div className="flex items-center gap-[10px]" aria-label="Social media links">
                  {socialLinks.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.ariaLabel}
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-[rgba(255,255,255,0.92)] hover:bg-white/[0.10] transition-colors duration-200 backdrop-blur-[10px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aaff00]"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </MotionDiv>

          </div>
        </div>
      </MotionDiv>

      {/* Green glow below hero */}
      <div className="relative w-full pointer-events-none z-[3]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[110%] w-[1526px] h-[392px] pointer-events-none opacity-40 md:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(185deg, rgba(145,217,2,0.00) 20.42%, rgba(145,217,2,0.55) 91.32%)",
            mixBlendMode: "plus-lighter",
            filter: "blur(137px)",
          }}
        />
      </div>
    </>
  );
}