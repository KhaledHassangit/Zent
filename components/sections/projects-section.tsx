
import {ProjectsSectionProps } from "@/types/types";
import Container from "@/util/Container";
import Image from "next/image";
import MotionDiv, { fadeInUp } from "@/util/MotionDiv";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UIButton from "@/util/UIButton";
import Link from "@/util/link";



export default function ProjectsSection({ dict, projects, locale }: ProjectsSectionProps) {

  return (
    <MotionDiv
      as="section"
      id="works"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden bg-black px-4 py-5 md:px-[50px] md:py-[60px] xl:px-[100px]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${locale === "ar" ? "lg:flex-row-reverse" : ""}`}>
            <div className="flex flex-col gap-4">
              <p className="text-[15.5px] font-medium leading-[19.2px] text-primary">
                {dict.projects.label}
              </p>
              <div className="w-full">
                <h2 className="text-[36px] leading-[42px] lg:text-[42px] lg:leading-[44px] xl:text-[56px] xl:leading-[58.6px] tracking-[-1px] md:tracking-[-2px] text-white font-medium whitespace-pre-line max-w-[743px] font-heading">
                  {dict.projects.heading}
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] lg:shrink-0 w-full lg:w-1/3">
              <p className="whitespace-pre-line text-[#a3a3a3] text-sm md:text-base">
                {dict.projects.description}
              </p>
              <Link
                href="#"
                className="
                  relative isolate inline-flex h-12 w-fit max-w-full shrink-0
                  items-center gap-3 overflow-hidden rounded-[42px]
                  border border-[#ffffff38]
                  bg-[#0000001a]
                  px-4.5 py-1
                  text-[15px] font-medium leading-5.25 text-white
                  backdrop-blur-[2px]
                  transition-colors duration-300"
              >
                {dict.projects.cta}
              </Link>
            </div>
          </div>

          <div className="mt-[40px]">
            <Carousel
              rtl={locale === "ar"}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="group relative">
                      <article className="bg-[#0E0F0E] relative flex w-full flex-col overflow-hidden rounded-[32px] project-card">                        {/* Glow Effect */}
                        <div className="pointer-events-none absolute -left-[158px] -top-[138px] h-[777px] w-[784px] opacity-[0.55]">
                          <div
                            className="h-full w-full blur-[60px] rounded-full"
                            style={{
                              background:
                                "radial-gradient(ellipse 50% 45% at 45% 45%, rgba(170, 255, 0, 0.22) 0%, transparent 62%)",
                            }}
                          ></div>
                        </div>

                        {/* Project Thumbnail */}
                        <div className="relative z-1 w-full shrink-0 max-md:h-[260px] md:h-[320px] xl:h-[360px] mb-8">
                          <div className="relative h-full w-full overflow-hidden rounded-ts-[32px] rounded-te-[32px] rounded-bs-[22px] rounded-be-[22px]">
                            <Image
                              src={project.thumbnail?.url}
                              alt={project.thumbnail?.alt || project.title}
                              fill
                              className="object-cover w-full h-full rounded-[24px]"
                            />
                            <div
                              className="absolute inset-0 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[22px] rounded-be-[22px] bg-black/10"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="relative z-1 flex w-full flex-1 flex-col items-center gap-[28px] px-[23px] pb-[28px] pt-0 max-md:px-4 max-md:pb-5 md:px-6">
                          <div className="flex w-full flex-col gap-3">
                            <div className="flex flex-col gap-3">
                              {/* Category Badge */}
                              <div className="flex h-8 w-fit items-center justify-center rounded-full border border-primary bg-[#0a0a0a] px-3 py-1">
                                <span className="text-xs leading-4 text-primary">
                                  {project.category.label}
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-[32px] leading-normal text-white font-heading">
                                {project.title}
                              </h3>
                              <p className="text-sm text-[#a3a3a3]">
                                {project.description}
                              </p>
                            </div>
                            <div className="flex flex-col gap-5">
                              <div className="flex flex-wrap gap-[9px]">
                                {project.services && project.services.length > 0 ? (
                                  project.services.map((service, idx) => (
                                    <span key={idx} className="inline-flex h-7 items-center justify-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs leading-4 text-white">
                                      {service}
                                    </span>
                                  ))
                                ) : (
                                  <span className="inline-flex h-7 items-center justify-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs leading-4 text-white">
                                    {project.category.label}
                                  </span>
                                )}
                              </div>
                              <div className="block w-fit">

                              <UIButton href="/#" label={dict.projects.view_project ?? "View Project"} locale={locale} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons under the cards */}
              <div className="flex justify-center gap-4 mt-12">
                              <CarouselPrevious className="text-white border-white/10 hover:bg-white/5 hover:border-white/20 flex items-center justify-center w-12 h-12 rounded-[42px] !static !inset-auto !translate-x-0 !translate-y-0" />
                <CarouselNext className="text-white border-white/10 hover:bg-white/5 hover:border-white/20 flex items-center justify-center w-12 h-12 rounded-[42px] !static !inset-auto !translate-x-0 !translate-y-0" />

              </div>
            </Carousel>
          </div>
        </div>
      </Container>
    </MotionDiv>
  );
}