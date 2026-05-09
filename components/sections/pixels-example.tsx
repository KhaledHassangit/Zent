import Image from "next/image";
import Link from "@/util/link";
import Container from "@/util/Container";
import UIButton from "@/util/UIButton";
import { LocaleSectionProps} from "@/types/types";

export default function PixelsExample({ dict, locale }:LocaleSectionProps) {
  const p = dict.pixels_example;
  return (
    <section className="bg-black py-12 md:py-20">
      <Container>
        <div className="relative mx-auto w-full max-w-310 min-h-100 md:h-120 rounded-[32px] overflow-hidden py-12 md:py-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/pixel-bg.png"
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center h-full px-6">

            <div className="relative flex justify-center w-fit mb-4">
              <div
                className="relative z-10 flex items-center justify-center rounded-full border border-[rgba(170,255,0,0.17)] bg-[#0a0a0a] px-3 py-1"
              >
                <span className="text-[12px] leading-[16px] text-[#AAFF00]">
                  {p.label}
                </span>
              </div>
            </div>

            <h2 className="mb-4 max-w-[571px] text-center text-[32px] leading-[1.07] text-white md:text-[44px] lg:text-[52px] font-heading">
              {p.heading_start} <span className="font-medium text-[#AAFF00]">{p.heading_accent}</span>
            </h2>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <UIButton href="/#contact" label={p.cta_main} locale={locale} />
                <Link
                href={`mailto:${p.email}`}
                className="w-[137px] h-[48px] flex items-center justify-center rounded-[42px] whitespace-nowrap lowercase text-[15px] leading-[21px] text-white transition-all duration-300 cursor-pointer hover:bg-white/20 bg-white/10 backdrop-blur-[10px] px-4"
              >
                <span className="font-medium">{p.email}</span>
              </Link>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}