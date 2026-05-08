"use client"
import type { Dictionary, Locale } from "@/types/types";
import Container from "@/util/Container";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import UIButton from "@/util/UIButton";

interface FaqSectionProps {
   dict: Dictionary;
   locale: Locale
}

export default function FaqSection({ dict, locale }: FaqSectionProps) {
   const f = dict.faq;
   const [activeItem, setActiveItem] = useState("item-0"); 

   return (
      <section id="faqs" className="relative w-full bg-black px-4 py-5 md:px-[50px] md:py-[60px] xl:px-[100px]">
         <Container className="mx-auto flex max-w-[1440px] flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">

            {/* LEFT COLUMN */}
            <div className="flex flex-col lg:flex-1 lg:min-w-0 lg:self-stretch">
               <div className="flex flex-col gap-3 lg:max-w-[587px] mb-8 lg:mb-10">
                  <p className="text-[15.5px] font-medium leading-[19.2px] text-primary mb-1">{f.label}</p>
                  <div className="lg:mb-6">
                     <h2 className="text-[36px] leading-[42px] lg:text-[42px] lg:leading-[44px] xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white max-w-[587px] font-medium whitespace-normal font-heading">
                        {f.heading}
                     </h2>
                  </div>
                  {/* Text split into two lines */}
                  <div
                     className="text-[#A3A3A3] w-full max-w-[567px]"
                     style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "21px",
                        letterSpacing: "-1px",
                     }}
                  >
                     <p>{f.description}</p>
                  </div>
               </div>

               <div className="flex flex-col-reverse lg:flex-col gap-8">
                  {/* Mobile Accordion */}
                  <div className="flex w-full min-w-0 flex-col gap-[13px] lg:hidden">
                     {f.items.map((item, index) => {
                        const itemValue = `item-${index}`;
                        const isActive = activeItem === itemValue;
                        return (
                           <div key={index} className="rounded-[16px]" style={{
                              background: isActive ? '#121711' : '#0A0A0A',
                              padding: '1px'
                           }}>
                              <button
                                 className="w-full cursor-pointer rounded-[15px] text-start p-[18px] bg-transparent transition-colors duration-200 flex justify-between items-center"
                                 onClick={() => setActiveItem(isActive ? "" : itemValue)}
                              >
                                 <div className="flex min-w-0 flex-1 flex-col gap-2 p-2">
                                    <p className="text-[14px] font-medium leading-normal text-white md:text-[20px]">{item.question}</p>
                                    <div
                                       className={cn(
                                          "grid transition-all duration-500 ease-in-out",
                                          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                       )}
                                    >
                                       <div className="overflow-hidden">
                                          <p className="text-[12px] leading-[18px] text-[#a3a3a3] md:text-[16px] md:leading-[21px] pt-2">
                                             {item.answer}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <ChevronDown className={cn(
                                    "mt-2 shrink-0 transition-transform duration-500 ease-in-out",
                                    isActive ? "rotate-180" : ""
                                 )} />
                              </button>
                           </div>
                        );
                     })}
                  </div>

                  {/* Desktop Still Questions Card - Border Removed */}
                  <div className="flex flex-1 items-center justify-center rounded-2xl bg-[#38422333] px-[38px] py-8 lg:py-[56px] relative">
                     <div className="flex flex-col items-center gap-6 text-center">
                        <p className="text-[27px] leading-[34px] text-[#f5f5f5] md:text-[36px] md:leading-[48px]">{f.still_questions_title}</p>
                        <p className="text-[14px] font-medium leading-[19px] text-[#a3a3a3] md:text-[18px] md:leading-[24px]">{f.still_questions_body}</p>
                     
                        <UIButton href="/#contact" label={f.cta} locale={locale} />

                     </div>
                  </div>
               </div>
            </div>

            {/* DESKTOP ACCORDION COLUMN */}
            <div className="hidden lg:flex lg:w-[633px] lg:shrink-0 lg:flex-col lg:gap-[13px]">
               {f.items.map((item, index) => {
                  const itemValue = `item-${index}`;
                  const isActive = activeItem === itemValue;
                  return (
                     <div key={index} className="rounded-[16px] transition-all duration-500" style={{
                        background: isActive ? '#121711' : '#0A0A0A',
                        padding: '1px'
                     }}>
                        <button
                           className="w-full cursor-pointer rounded-[15px] text-start bg-transparent transition-colors duration-200 flex justify-between items-center"
                           style={{ padding: isActive ? '18px 18px 18px 18px' : '18px' }}
                           onClick={() => setActiveItem(isActive ? "" : itemValue)}
                        >
                           <div className="flex min-w-0 flex-1 flex-col p-2">
                              <p className="text-[14px] font-medium leading-normal text-white md:text-[20px]">{item.question}</p>
                              <div
                                 className={cn(
                                    "grid transition-all duration-500 ease-in-out",
                                    isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                 )}
                              >
                                 <div className="overflow-hidden">
                                    <p className="text-[14px] leading-[21px] text-[#a3a3a3] md:text-[16px] md:leading-[24px]">
                                       {item.answer}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <ChevronDown className={cn(
                              "mt-2 shrink-0 transition-transform duration-500 ease-in-out",
                              isActive ? "rotate-180" : ""
                           )} size={20} />
                        </button>
                     </div>
                  );
               })}
            </div>

         </Container>
      </section>
   )
}