
import Container from "@/util/Container";
import Image from "next/image";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";
import { SectionProps } from "@/types/types";
import { FileDown, Group, UsersRound } from "lucide-react";


export default function AboutSection({ dict }: SectionProps) {
  const a = dict.about;

  return (
    <MotionDiv
      as="section"
      id="about"
      className="relative w-full overflow-hidden bg-black px-4 pt-4 pb-8 md:px-12.5 md:pt-24 md:pb-30 xl:px-25"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="relative z-10 mx-auto max-w-360 flex w-full flex-col gap-8 md:gap-16 lg:flex-row lg:items-stretch lg:justify-between xl:gap-24">
        <div className="relative flex flex-col gap-8 md:gap-16 lg:gap-20 lg:w-[45%] lg:shrink-0">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-[320px] h-75.75 lg:-left-10 lg:w-114.5 lg:h-108.25 pointer-events-none">
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
                className="text-[36px] leading-10.5 lg:text-[42px] lg:leading-11 xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white font-normal whitespace-pre-line font-heading"
                style={{
                  maxWidth: "100%",
                  fontStyle: "normal",
                  verticalAlign: "middle",
                }}
              >
                {a.heading}
              </h2>
            </div>
            <a href="#" className="mt-px inline-flex w-fit items-center gap-2.25 rounded-[32px] border border-white/20 bg-white/20 backdrop-blur-[3px] hover:bg-white/30 transition-colors px-4.25 py-3.5">
              <span className="text-base leading-[27.2px] text-white flex items-center gap-2">
                {a.cta} <FileDown size={24} />
              </span>
            </a>
          </div>

          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:gap-12 lg:flex-col lg:gap-8 xl:flex-row xl:gap-12">
            <div className="flex items-start gap-4 md:gap-2">
              <span className="text-[58px] leading-18 xl:text-[58px] tracking-[-3.5px] text-primary shrink-0 w-27.5 md:w-auto font-heading">{a.stats.experience_value}</span>
              <div className="flex flex-col gap-1.25 min-w-0 flex-1">
                <div className="flex items-center gap-1.25">
                  <Group size={16} />
                  <span className="text-[13.6px] font-medium leading-[25.2px] text-[#aeaeae] whitespace-nowrap">{a.stats.experience_label}</span>
                </div>
                <p className="md:whitespace-pre-line text-[15.1px] text-white md:max-w-41.5">
                  {a.stats.experience_desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-2">
              <span className="text-[58px] leading-18 xl:text-[58px] tracking-[-3.5px] text-primary shrink-0 w-27.5 md:w-auto font-heading">{a.stats.clients_value}</span>
              <div className="flex flex-col gap-1.25 min-w-0 flex-1">
                <div className="flex items-center gap-1.25">
                  <UsersRound size={16} />
                  <span className="text-[13.6px] font-medium leading-[25.2px] text-[#aeaeae] whitespace-nowrap">{a.stats.clients_label}</span>
                </div>
                <p className="md:whitespace-pre-line text-[15.1px] text-white md:max-w-41.5">
                  {a.stats.clients_desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:flex-1 lg:max-w-[48%] xl:max-w-175 flex flex-col">
          <div className="relative flex h-full flex-col">
            {/* Top Borders */}
            <div className="flex items-center justify-between lg:-mx-9.25">
              <div className="size-6 md:size-9.5 shrink-0 border-white/20 border-t border-s"></div>
              <div className="size-6 md:size-9.5 shrink-0 border-white/20 border-t border-e"></div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 md:gap-12.5 px-4 lg:px-0 lg:py-0">
              <p className="text-[16px] leading-[24.4px] md:text-xl md:leading-[1.32] lg:text-[24px] lg:leading-8 xl:text-[26px] xl:leading-[34.4px] text-white font-heading">
                {a.body_para1}
              </p>
              <p className="text-[16px] leading-[24.4px] md:text-xl md:leading-[1.32] lg:text-[24px] lg:leading-8 xl:text-[26px] xl:leading-[34.4px] text-white font-heading">
                {a.body_para2}
              </p>
            </div>

            {/* Bottom Borders */}
            <div className="flex items-center justify-between lg:-mx-9.25">
              <div className="size-6 md:size-9.5 shrink-0 border-white/20 border-b border-s"></div>
              <div className="size-6 md:size-9.5 shrink-0 border-white/20 border-b border-e"></div>
            </div>
          </div>
        </div>

      </Container>
    </MotionDiv>
  );
}