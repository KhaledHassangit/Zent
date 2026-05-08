"use client";

import type { Dictionary } from "@/lib/types";
import Container from "@/util/Container";
import { FileDown } from "lucide-react";
import { Group, UsersRound } from 'lucide-react';
import Image from "next/image";

interface AboutSectionProps {
  dict: Dictionary;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const a = dict.about;

  return (
    <section id="about" className="relative w-full overflow-hidden bg-black px-4 pt-4 pb-8 md:px-[50px] md:pt-24 md:pb-[120px] xl:px-[100px]">
      <Container className="relative z-10 mx-auto max-w-[1440px] flex w-full flex-col gap-8 md:gap-16 lg:flex-row lg:items-stretch lg:justify-between xl:gap-24">

        {/* LEFT COLUMN */}
        <div className="relative flex flex-col gap-8 md:gap-16 lg:gap-20 lg:w-[45%] lg:shrink-0">
          {/* Stars Background Image */}
          <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[320px] h-[303px] lg:left-[-40px] lg:w-[458px] lg:h-[433px] pointer-events-none">
            <Image
              src="/stars-bg.svg"
              alt=""
              fill
              className="object-contain"
              priority={false}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-4">
            <p className="text-[15.5px] font-medium leading-[19.2px] text-primary">{a.label}</p>
            <div className="w-full">
              <h2
                className="text-[36px] leading-[42px] lg:text-[42px] lg:leading-[44px] xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white font-normal whitespace-pre-line font-heading"
                style={{
                  maxWidth: "100%",
                  fontStyle: "normal",
                  verticalAlign: "middle",
                }}
              >
                {a.heading}
              </h2>
            </div>
            <a href="#" className="mt-px inline-flex w-fit items-center gap-[9px] rounded-[32px] border border-white/20 bg-white/20 backdrop-blur-[3px] hover:bg-white/30 transition-colors px-[17px] py-[14px]">
              <span className="text-base leading-[27.2px] text-white flex items-center gap-2">
                {a.cta} <FileDown size={24} />
              </span>
            </a>
          </div>

          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:gap-[48px] lg:flex-col lg:gap-8 xl:flex-row xl:gap-[48px]">
            <div className="flex items-start gap-[16px] md:gap-2">
              <span className="text-[58px] leading-[72px] xl:text-[58px] tracking-[-3.5px] text-primary shrink-0 w-[110px] md:w-auto font-heading">{a.stats.experience_value}</span>
              <div className="flex flex-col gap-[5px] min-w-0 flex-1">
                <div className="flex items-center gap-[5px]">
                  <Group size={16} />
                  <span className="text-[13.6px] font-medium leading-[25.2px] text-[#aeaeae] whitespace-nowrap">{a.stats.experience_label}</span>
                </div>
                <p className="md:whitespace-pre-line text-[15.1px] text-white md:max-w-[166px]">
                  {a.stats.experience_desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[16px] md:gap-2">
              <span className="text-[58px] leading-[72px] xl:text-[58px] tracking-[-3.5px] text-primary shrink-0 w-[110px] md:w-auto font-heading">{a.stats.clients_value}</span>
              <div className="flex flex-col gap-[5px] min-w-0 flex-1">
                <div className="flex items-center gap-[5px]">
                  <UsersRound size={16} />
                  <span className="text-[13.6px] font-medium leading-[25.2px] text-[#aeaeae] whitespace-nowrap">{a.stats.clients_label}</span>
                </div>
                <p className="md:whitespace-pre-line text-[15.1px] text-white md:max-w-[166px]">
                  {a.stats.clients_desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:flex-1 lg:max-w-[48%] xl:max-w-[700px] flex flex-col">
          <div className="relative flex h-full flex-col">
            {/* Top Borders */}
            <div className="flex items-center justify-between lg:-mx-[37px]">
              <div className="size-[24px] md:size-[38px] shrink-0 border-white/20 border-t border-s"></div>
              <div className="size-[24px] md:size-[38px] shrink-0 border-white/20 border-t border-e"></div>
            </div>

            <div className="flex-1 flex flex-1 flex-col justify-center gap-[24px] md:gap-[50px] px-4 lg:px-0 lg:py-0">
              <p className="text-[16px] leading-[24.4px] md:text-xl md:leading-[1.32] lg:text-[24px] lg:leading-[32px] xl:text-[26px] xl:leading-[34.4px] text-white font-heading">
                {a.body_para1}
              </p>
              <p className="text-[16px] leading-[24.4px] md:text-xl md:leading-[1.32] lg:text-[24px] lg:leading-[32px] xl:text-[26px] xl:leading-[34.4px] text-white font-heading">
                {a.body_para2}
              </p>
            </div>

            {/* Bottom Borders */}
            <div className="flex items-center justify-between lg:-mx-[37px]">
              <div className="size-[24px] md:size-[38px] shrink-0 border-white/20 border-b border-s"></div>
              <div className="size-[24px] md:size-[38px] shrink-0 border-white/20 border-b border-e"></div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}