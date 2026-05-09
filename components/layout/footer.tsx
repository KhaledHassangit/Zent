import type { Dictionary } from "@/types/types";
import Image from "next/image";
import Link from "@/util/link";
import { socialLinks } from "@/lib/data";

export default function Footer({ dict }: { dict: Dictionary }) {
  const f = dict.footer;
  const nav = dict.nav;

  return (
    <footer className="relative w-full bg-black px-4 pb-12 pt-5 md:px-[50px] md:pt-12 xl:px-[100px] overflow-hidden">
      <div
        className="pointer-events-none absolute z-0 opacity-50"
        style={{
          width: '2px',
          height: '1574.97px',
          top: '-4.67px',
          left: '-84.63px',
          transform: 'rotate(30deg)',
          borderLeft: '2.13px solid transparent',
          borderImageSource: 'radial-gradient(50% 50% at 50% 50%, rgba(170, 255, 0, 0.1) 0%, rgba(170, 255, 0, 0) 100%)',
          borderImageSlice: 1
        }}
      />

      <div className="mx-auto max-w-[1440px] relative z-10">

        {/* Main Footer Card */}
        <div className="relative rounded-[20px]">
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{
              padding: '2.13px',
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(170, 255, 0, 0.05) 100%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor'
            }}
          />

          <div className="relative bg-black rounded-[20px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="w-full h-full" style={{ backgroundImage: "url('/assets/Pattern.png')", backgroundRepeat: 'repeat', backgroundSize: 'auto' }}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 p-6 md:p-10 md:py-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-12 w-48">
                  <Image
                    src="/assets/logo.png"
                    alt="Zent Studio"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="max-w-[587px] text-[16px] leading-[23.27px] text-white/60 font-heading">
                  {f.tagline}
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <p className="text-[14px] leading-normal text-white/70">{dict.hero.social_label}</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex size-[48px] items-center justify-center rounded-[36px] bg-[#FFFFFF24] text-white transition-all hover:scale-110 hover:bg-[#FFFFFF35]"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <nav>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[14px] text-white/80">
                  <Link href="#about" className="transition-colors hover:text-[#AAFF00]">{nav.about}</Link>
                  <Link href="#services" className="transition-colors hover:text-[#AAFF00]">{nav.services}</Link>
                  <Link href="#projects" className="transition-colors hover:text-[#AAFF00]">{nav.works}</Link>
                  <Link href="#faq" className="transition-colors hover:text-[#AAFF00]">{nav.faqs}</Link>
                  <Link href="#contact" className="transition-colors hover:text-[#AAFF00]">{nav.contact}</Link>
                </div>
              </nav>

            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-[1184px] h-[1px] bg-[#AAFF0014]" />
          </div>
          <p className="text-[12px] text-white/40 tracking-wider font-heading">{f.copyright}</p>
        </div>

      </div>
    </footer>
  );
}