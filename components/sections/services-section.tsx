"use client"
import { useRef, type MouseEvent } from "react";

import  { ServicesSectionProps } from "@/types/types";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";

import  { Category } from "@/types/types";
import { serviceImages } from "@/lib/data";
import { SectionHeader } from "@/util/SectionHeader";



function ServiceCard({ item, image }: { item: { title: string; description: string; tags: string[] }; image: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group/spotlight relative aspect-[387/500] rounded-[24px] overflow-hidden bg-black bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(350px circle at var(--mx, 0px) var(--my, 0px), rgba(170,255,0,0.44), transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-3 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl leading-normal text-white lg:text-4xl font-heading">{item.title}</h3>
          <p className="text-[15px] font-normal leading-5 text-white">{item.description}</p>
        </div>
        <div className="flex flex-wrap gap-[9px]">
          {item.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex h-[28px] items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 px-3 py-1 text-[12px] leading-[16px] text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection({ dict, categories = [] }: ServicesSectionProps) {
  const s = dict.services;

  const displayItems = categories.length > 0 
    ? categories.map((cat, index) => {
        const dictItem = s.items[index % s.items.length];
        return {
          title: cat.label,
          description: dictItem.description,
          tags: [`${cat.projectCount} Projects`, ...dictItem.tags.slice(0, 2)],
        };
      })
    : s.items;

  return (
    <MotionDiv
      as="section"
      id="services"
      className="relative w-full bg-black px-4 py-5 md:px-[50px] md:py-[60px] xl:px-[100px]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-[587px]">
        <SectionHeader 
  label={s.label}
  heading={s.heading}
  labelClassName="text-[#aaff00]"
  headingClassName="max-w-[587px]"
/>
          </div>
          <p className="whitespace-pre-line text-sm font-normal leading-normal text-neutral-400 md:text-base lg:w-1/3 lg:shrink-0">
            {s.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          {displayItems.map((item, index) => (
            <ServiceCard key={index} item={item} image={serviceImages[index % serviceImages.length]} />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
