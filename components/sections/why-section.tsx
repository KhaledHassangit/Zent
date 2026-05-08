"use client"
import type { Dictionary } from "@/lib/types";
import Container from "@/util/Container";
import { CheckCheck, TrendingUp, ShieldCheck } from "lucide-react";

interface WhySectionProps {
   dict: Dictionary;
}

const iconMap = {
   "trending-up": TrendingUp,
   "shield-check": ShieldCheck,
} as const;

export default function WhySection({ dict }: WhySectionProps) {
   const w = dict.why;

   return (
      <section id="why-zent" className="relative w-full bg-black px-4 py-5 md:px-[50px] md:py-[60px] xl:px-[100px]">
         <Container className="mx-auto flex max-w-[1440px] flex-col gap-[40px] lg:flex-row">

            {/* LEFT COLUMN */}
            <div className="flex min-w-0 flex-1 flex-col gap-[40px]">
               <div className="flex flex-col gap-[12px]">
                  <p className="text-[15.5px] font-medium leading-[19.2px] text-primary">{w.label}</p>
                  <div className="w-full">
                     <h2 className="text-[36px] leading-[42px] lg:text-[42px] lg:leading-[44px] xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white font-medium max-w-[587.18px] whitespace-pre-line font-heading">
                        {w.heading}
                     </h2>
                  </div>
                  <p className="whitespace-pre-line text-[#a3a3a3] text-sm md:text-base">
                     {w.description}
                  </p>
               </div>

               <div className="flex flex-col gap-[16px]">
                  {w.checklist.map((item, index) => (
                     <div key={index} className="flex gap-[16px]">
                        <div className="flex shrink-0 items-start">
                           {/* Check icon */}
                           <div className="size-[40px] flex items-center justify-center bg-primary/10 rounded-full border border-primary/30">
                              <CheckCheck size={20} className="text-primary" />
                           </div>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                           <p className="text-2xl font-medium leading-normal text-white">{item.title}</p>
                           <p className="text-sm font-normal leading-5 text-[#a3a3a3]">{item.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex w-full flex-col gap-[13px] lg:w-[633px] lg:shrink-0">
               {w.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap] || TrendingUp;
                  return (
                     <div key={index} className="flex flex-1 bg-white/5 p-[24px] items-start rounded-[16px]">
                        <div className="flex shrink-0 items-start justify-center">
                           <div className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[36px] bg-white/10">
                              <Icon size={24} className="text-white" />
                           </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[8px] p-2">
                           <p className="text-xl font-medium leading-normal text-white">{feature.title}</p>
                           <p className="text-base font-normal leading-5 text-[#a3a3a3]">{feature.description}</p>
                        </div>
                     </div>
                  );
               })}

               {/* STATS CARD WITH BORDER BEAM - FIXED CENTERING */}
               <div
                  className="flex items-center md:h-[150px] justify-center rounded-[16px] border border-primary bg-primary/5 p-[18px] relative min-h-[120px]"
                  style={{
                     borderImageSource: 'radial-gradient(circle at 50% 50%, rgba(170, 255, 0, 0.1) 0%, rgba(170, 255, 0, 0) 100%)',
                     borderImageSlice: 1
                  }}
               >
                  {/* Animated Border */}
                  <div className="pointer-events-none md:h-[150px] absolute inset-0 rounded-[inherit] opacity-35">
                     <div className="absolute inset-0 rounded-[inherit]" style={{ padding: '0.5px', background: 'transparent', maskImage: 'linear-gradient(transparent, transparent), linear-gradient(white, white)', maskClip: 'padding-box, border-box', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }}>
                        <div style={{ position: 'absolute', inset: '0', borderRadius: 'inherit', border: '0.5px solid transparent', backgroundImage: 'conic-gradient(from var(--angle, 0deg), transparent 0%, transparent 70%, #aaff00 85%, transparent 100%)', backgroundOrigin: 'border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude', animation: 'border-beam-spin 6s linear infinite' }}>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col items-center md:h-[150px] justify-center text-center relative z-10">
                     <span className="text-[36px] leading-[40px] tracking-[0.3691px] text-primary font-heading">{w.stat_value}</span>
                     <p className="text-sm font-medium leading-5 text-white">{w.stat_label}</p>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   )
}