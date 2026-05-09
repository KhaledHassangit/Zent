"use client";

import { useState } from "react";
import MobileMenu from "../MobileMenu";
import UIButton from "@/util/UIButton";
import { useViewport } from "@/hooks/useViewport"; 
import { navLinksConfig } from "@/lib/data";
import { Locale, LocaleSectionProps } from "@/types/types";
import LangSwitcher from "@/util/LangSwitcher";
import MobileMenuButton from "../MobileMenuButton";
import Logo from "@/util/Logo";
import Link from "@/util/link";

export default function Navbar({ dict, locale }: LocaleSectionProps) {
  const t = dict.nav;
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  
  const isScrolled = useViewport({
    onResizeMobile: () => setIsOpen(false), 
    scrollThreshold: 20
  });

  const navLinks = navLinksConfig.map((item) => ({
    label: t[item.key as keyof typeof t],
    href: item.href,
  }));

  return (
    <header
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`fixed left-0 right-0 z-30 transition-all duration-500 ${
        isScrolled ? "top-3 px-4" : "top-0 px-4 pt-4"
      }`}
    >
      <div
        className={`w-full mx-auto max-w-[1440px] flex items-center justify-between relative rounded-[29px] px-3 py-2 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-black/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[1100px]"
            : "bg-transparent"
        }`}
      >
        <Logo locale={locale} />

        {/* Desktop nav  */}
        <nav className="hero-nav-pill hidden md:flex flex-col items-center justify-center rounded-[29px] h-[40px] ps-[2px] pe-[6px]">
          <ul className="flex items-center gap-1 h-full">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(link.href);
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`flex h-[36px] items-center justify-center text-[13px] leading-none tracking-[-0.26px] px-[14px] rounded-[24px] border transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-[rgba(37,48,21,0.9)] border-[#253015] text-[#EAFFE1]"
                        : "border-transparent text-white/90 hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop  buttons */}
        <div className="hidden md:flex items-center gap-2">
          <LangSwitcher locale={locale} />
          <UIButton href="/#contact" label={t.contact} locale={locale} />
        </div>

        {/* Mobile buttons */}
          <MobileMenuButton 
            isOpen={isOpen} 
            onClick={() => setIsOpen(true)} 
            locale={locale}
          />
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navLinks}
        active={active}
        onSelect={setActive}
        locale={locale as Locale}
        contactLabel={t.contact}
        dict={dict}
      />
    </header>
  );
}