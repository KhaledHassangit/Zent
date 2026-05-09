"use client"
import Container from "@/util/Container";
import UIButton from "@/util/UIButton";
import  { LocaleSectionProps } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";


export default function FaqSection({ dict, locale }: LocaleSectionProps) {
   const f = dict.faq;
   const [activeItem, setActiveItem] = useState("item-0"); 

   return (
      <MotionDiv
         as="section"
         id="faqs"
         className="relative w-full bg-black px-4 py-5 md:px-12.5 md:py-15 xl:px-25"
         variants={fadeInUp}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.25 }}
         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
         <Container className="mx-auto flex max-w-360 flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">

            {/* Left Side */}
            <div className="flex flex-col lg:flex-1 lg:min-w-0 lg:self-stretch">
               <div className="flex flex-col gap-3 lg:max-w-146.75 mb-8 lg:mb-10">
                  <p className="text-[15.5px] font-medium leading-[19.2px] text-primary mb-1">{f.label}</p>
                  <div className="lg:mb-6">
                     <h2 className="text-[36px] leading-10.5 lg:text-[42px] lg:leading-11
                      xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white max-w-146.75 font-medium whitespace-normal font-heading">
                        {f.heading}
                     </h2>
                  </div>
                  <div
                     className="text-[#A3A3A3] w-full max-w-141.75"
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
                  <div className="flex w-full min-w-0 flex-col gap-3.25 lg:hidden">
                     {f.items.map((item, index) => {
                        const itemValue = `item-${index}`;
                        const isActive = activeItem === itemValue;
                        return (
                           <div key={index} className="rounded-[16px]" style={{
                              background: isActive ? '#121711' : '#0A0A0A',
                              padding: '1px'
                           }}>
                              <button
                                 className="w-full cursor-pointer rounded-[15px] text-start p-4.5 bg-transparent transition-colors duration-200 flex justify-between items-center"
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
                                          <p className="text-[12px] leading-4.5 text-[#a3a3a3] md:text-[16px] md:leading-5.25 pt-2">
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

                  <div className="flex flex-1 items-center justify-center rounded-2xl bg-[#38422333] px-9.5 py-8 lg:py-14 relative">
                     <div className="flex flex-col items-center gap-6 text-center">
                        <p className="text-[27px] leading-8.5 text-[#f5f5f5] md:text-[36px] md:leading-12">{f.still_questions_title}</p>
                        <p className="text-[14px] font-medium leading-4.75 text-[#a3a3a3] md:text-[18px] md:leading-6">{f.still_questions_body}</p>
                     
                        <UIButton href="/#contact" label={f.cta} locale={locale} />

                     </div>
                  </div>
               </div>
            </div>

            <div className="hidden lg:flex lg:w-158.25 lg:shrink-0 lg:flex-col lg:gap-3.25">
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
                                    <p className="text-[14px] leading-5.25 text-[#a3a3a3] md:text-[16px] md:leading-6">
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
      </MotionDiv>
   )
}