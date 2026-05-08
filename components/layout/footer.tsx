import type { Dictionary } from "@/types/types";
import Image from "next/image";

export default function Footer({ dict }: { dict: Dictionary }) {
  const f = dict.footer;
  const nav = dict.nav;

  return (
    <footer className="relative w-full bg-black px-4 pb-12 pt-5 md:px-[50px] md:pt-12 xl:px-[100px] overflow-hidden">
      {/* Decorative Angled Lines */}
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

        {/* Main Footer Card - Fixed Border Radius */}
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
                <p
                  className="max-w-[587px] text-[16px] leading-[23.27px] text-white/60 font-heading"
                >
                  {f.tagline}
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <p className="text-[14px] leading-normal text-white/70">{dict.hero.social_label}</p>
                <div className="flex items-center gap-4">
                  {f.social_links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${link.name}`}
                      className="flex size-[48px] items-center justify-center rounded-[36px] bg-[#FFFFFF24] text-white transition-all hover:scale-110 hover:bg-[#FFFFFF35]"
                    >
                      {link.platform === "instagram" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
                        </svg>
                      )}
                      {link.platform === "linkedin" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                        </svg>
                      )}
                      {link.platform === "behance" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z"></path>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <nav>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[14px] text-white/80">
                  <a href="#about" className="transition-colors hover:text-[#AAFF00]">{nav.about}</a>
                  <a href="#services" className="transition-colors hover:text-[#AAFF00]">{nav.services}</a>
                  <a href="#projects" className="transition-colors hover:text-[#AAFF00]">{nav.works}</a>
                  <a href="#faq" className="transition-colors hover:text-[#AAFF00]">{nav.faqs}</a>
                  <a href="#contact" className="transition-colors hover:text-[#AAFF00]">{nav.contact}</a>
                </div>
              </nav>

            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <div className="flex justify-center mb-8">
            <div
              className="w-full max-w-[1184px] h-[1px] bg-[#AAFF0014]"
            />
          </div>
          <p className="text-[12px] text-white/40 tracking-wider font-heading">{f.copyright}</p>
        </div>

      </div>
    </footer>
  );
}