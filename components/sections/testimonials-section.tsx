"use client"
import type { Dictionary, Locale } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface TestimonialsSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function TestimonialsSection({ dict, locale }: TestimonialsSectionProps) {
  const t = dict.testimonials;
  const items = t.items.length >= 5 ? t.items : [...t.items, t.items[0]];

  return (
    <section id="testimonials" className="bg-black py-24 md:py-32 text-white overflow-hidden relative">
      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-6 text-center relative">
        {/* Stars Background Vector Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none">
          <Image
            src="/assets/Vector.png"
            alt=""
            fill
            className="object-contain opacity-40"
            priority={false}
          />
        </div>

        <span className="relative z-10 font-heading font-medium text-[15.5px] leading-[19.2px] tracking-[-1px] text-[#AAFF00] align-middle uppercase block">
          {t.label}
        </span>
        <h2 className="relative z-10 font-heading font-normal text-[40px] md:text-[52px] leading-[55.6px] tracking-[-2px] text-white align-middle">
          {t.heading}
        </h2>
        <p className="relative z-10 font-heading font-normal text-[16px] leading-[21px] tracking-[-1px] text-[#A3A3A3] align-middle">
          {t.description}
        </p>
      </div>

      {/* Carousel - Full Width */}
      <div className="relative w-full">
        <Carousel
          rtl={locale === "ar"}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6 md:-ml-8 gap-6">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:pl-8 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-[360px] flex-shrink-0"
              >
                {/* Card wrapper with fixed dimensions */}
                <div
                  className="rounded-[18px] mx-auto w-full max-w-[360px]"
                  style={{
                    height: "332px",
                    background: "radial-gradient(circle, rgba(170, 255, 0, 0.24) 0%, rgba(170, 255, 0, 0) 100%)",
                    transform: "translate3d(0px, 0px, 0px)"
                  }}
                >
                  <div
                    className="relative flex h-full flex-col justify-between overflow-hidden rounded-[17px] border border-black bg-[#0F0F0F] p-[32px] text-start"
                    style={{
                      borderImage: "radial-gradient(circle, rgba(170, 255, 0, 0.24) 0%, rgba(170, 255, 0, 0) 100%) 1 / 1 / 0 stretch"
                    }}
                  >
                    {/* Pattern Background using Next.js Image */}
                    <div className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
                      <Image
                        src="/assets/Pattern.png"
                        alt="pattern"
                        fill
                        className="object-cover opacity-55"
                        priority={false}
                      />
                    </div>

                    <p className="text-white/80 text-[15px] leading-[24px] font-normal relative z-20 line-clamp-4">
                      {item.quote}
                    </p>

                    <div className="flex items-center gap-4 relative z-20">
                      {/* Avatar with border */}
                      <div className="rounded-full border border-white w-10 h-10 min-w-10 relative overflow-hidden">
                        <Image
                          src={item.avatar || "/assets/me.webp"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading font-semibold text-sm leading-[150%] tracking-[-0.2px] text-white">
                          {item.name}
                        </span>
                        <span className="font-heading font-normal text-sm leading-[150%] tracking-[-0.2px] text-[#7C7C7C]">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-12 relative z-10">
            <CarouselPrevious
              className="text-white border-white/10 hover:bg-white/5 hover:border-white/20 flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "42px",
                opacity: 1,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                transform: "none",
              }}
            />
            <CarouselNext
              className="text-white border-white/10 hover:bg-white/5 hover:border-white/20 flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "42px",
                opacity: 1,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                transform: "none",
              }}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}