"use client";

import Image from "next/image";
import type { Dictionary, Locale } from "@/types/types";
import UIButton from "@/util/UIButton";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    ariaLabel: "Visit our Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
        <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net",
    ariaLabel: "Visit our Behance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
        <path d="M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    ariaLabel: "Visit our LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
      </svg>
    ),
  },
];

// ── Deterministic stars (LCG) — identical on server + client ──────────────
function lcg(n: number) { return ((n * 1664525 + 1013904223) >>> 0); }

const LEFT_STARS = Array.from({ length: 55 }, (_, i) => {
  let s = lcg(i * 31337 + 1);
  const top = ((s = lcg(s)) >>> 16) % 4500 / 100;
  const left = ((s = lcg(s)) >>> 16) % 2800 / 100;
  const size = 1 + ((s = lcg(s)) >>> 16) % 18 / 10;
  const dur = 2.5 + ((s = lcg(s)) >>> 16) % 3000 / 1000;
  const del = ((s = lcg(s)) >>> 16) % 5000 / 1000;
  const op = 0.2 + ((s = lcg(s)) >>> 16) % 7000 / 10000;
  return { top, left, size, dur, del, op };
});

const RIGHT_STARS = Array.from({ length: 55 }, (_, i) => {
  let s = lcg(i * 99991 + 3);
  const top = ((s = lcg(s)) >>> 16) % 4500 / 100;
  const right = ((s = lcg(s)) >>> 16) % 2800 / 100;
  const size = 1 + ((s = lcg(s)) >>> 16) % 18 / 10;
  const dur = 2.5 + ((s = lcg(s)) >>> 16) % 3000 / 1000;
  const del = ((s = lcg(s)) >>> 16) % 5000 / 1000;
  const op = 0.2 + ((s = lcg(s)) >>> 16) % 7000 / 10000;
  return { top, right, size, dur, del, op };
});

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  const h = dict.hero;
  // Split the heading by newline character
  const headingLines = h.heading.split('\n');

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--so); transform: scale(1); }
          50%       { opacity: calc(var(--so) * 0.1); transform: scale(0.4); }
        }
        @keyframes hero-line-in {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes light-ray-spin {
          from { transform: translateX(-50%) rotate(0deg); }
          to   { transform: translateX(-50%) rotate(360deg); }
        }
        .hero-line-in { animation: hero-line-in 0.75s cubic-bezier(.22,1,.36,1) both; }
        .hero-fade-up { animation: hero-fade-up 0.7s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <section
        id="home"
        className="relative w-full min-h-screen bg-black overflow-hidden"
      >

        {/* Stars — top-left corner */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          {LEFT_STARS.map((star, i) => (
            <span key={`l${i}`} style={{
              position: "absolute", top: `${star.top}%`, left: `${star.left}%`,
              width: `${star.size}px`, height: `${star.size}px`,
              borderRadius: "50%", backgroundColor: "white",
              ["--so" as string]: star.op, opacity: star.op,
              animation: `twinkle ${star.dur}s ease-in-out ${star.del}s infinite`,
            } as React.CSSProperties} />
          ))}
          {/* Stars — top-right corner */}
          {RIGHT_STARS.map((star, i) => (
            <span key={`r${i}`} style={{
              position: "absolute", top: `${star.top}%`, right: `${star.right}%`,
              width: `${star.size}px`, height: `${star.size}px`,
              borderRadius: "50%", backgroundColor: "white",
              ["--so" as string]: star.op, opacity: star.op,
              animation: `twinkle ${star.dur}s ease-in-out ${star.del}s infinite`,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* ── LIGHT RAYS (Top Center) ───────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[200vw] h-[80vh] z-[0]"
          style={{
            background: "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, rgba(255,255,255,0.04) 15deg, transparent 20deg)",
            maskImage: "radial-gradient(circle at 50% 0%, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 0%, black 0%, transparent 70%)",
            animation: "light-ray-spin 60s linear infinite",
          }}
        />

        {/* ── PLANET ────────────────────────────────────────────────────────── */}
        {/* UPDATED: Moved closer to navbar (top: 0%, margin-top: -60px on mobile) */}
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

        {/* ── CONTENT ────────────────────────────────────────────────────────── */}
        <div className="relative z-10 w-full px-4 md:px-[50px] xl:px-[100px] flex flex-col justify-end min-h-screen pb-[150px]">
          <div className="mx-auto w-full max-w-[1440px] space-y-3">

            {/* Heading with exact styling */}
            <div className="w-full">
              <h1
                className="text-white capitalize text-[36px] leading-[42px] md:text-[50px] md:leading-[58px] lg:text-[60px] lg:leading-[70px] font-heading"
                style={{
                  maxWidth: "1118px",
                  fontWeight: 400,
                  verticalAlign: "middle",
                  whiteSpace: "pre-line"
                }}
              >
                {headingLines.map((line, index) => (
                  <span key={index} className="block overflow-hidden">
                    <span
                      className="block hero-line-in"
                      style={{ animationDelay: `${0.05 + (index * 0.13)}s` }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <div
              className="max-w-[587px] hero-fade-up"
              style={{ animationDelay: "0.32s" }}
            >
              <p className="text-[13px] leading-[20.3px] md:text-[16px] md:leading-[23.27px] text-white/55">
                {h.description}
              </p>
            </div>

            {/* CTA + Social row */}
            <div
              className="flex flex-col xl:flex-row justify-between xl:items-center w-full mt-6 gap-8 hero-fade-up"
              style={{ animationDelay: "0.44s" }}
            >
              {/* Buttons */}
              <div className="flex flex-row items-start gap-3">
                <UIButton href="/#contact" label={h.cta_primary} locale={locale} />


                <a
                  href={`/${locale}#projects`}
                  className="rounded-[42px] flex items-center justify-center whitespace-nowrap capitalize text-[15px] leading-[21px] border border-white/[0.12] bg-white/[0.06] text-white px-[16px] py-[4px] h-[48px] hover:bg-white/[0.10] transition-colors duration-200 backdrop-blur-[10px]"
                >
                  <span className="font-medium">{h.cta_secondary}</span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-white whitespace-nowrap">{h.social_label}</span>
                <div className="flex items-center gap-[10px]" aria-label="Social media links">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.ariaLabel}
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-[rgba(255,255,255,0.92)] hover:bg-white/[0.10] transition-colors duration-200 backdrop-blur-[10px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aaff00]"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GREEN GLOW (Starts strictly from description) ──────────────────────── */}
      {/* UPDATED: Moved down further (-160%) to ensure it doesn't touch navbar/planet */}
      <div className="relative w-full pointer-events-none z-[3]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[110%] w-[1526px] h-[392px] pointer-events-none opacity-40 md:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(185deg, rgba(145,217,2,0.00) 20.42%, rgba(145,217,2,0.55) 91.32%)",
            mixBlendMode: "plus-lighter",
            filter: "blur(137px)",
          }}
        />
      </div>
    </>
  );
}