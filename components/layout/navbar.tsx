"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, Globe, ArrowUpRight } from "lucide-react";
import MobileMenu, { type Locale } from "../MobileMenu";
import Image from "next/image";
import Link from "next/link";
import UIButton from "@/util/UIButton";

import type { Dictionary } from "@/types/types";

interface NavbarProps {
  dict: Dictionary;
  locale?: Locale;
}

export default function Navbar({ dict, locale = "en" }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";
    const nextPath = `/${nextLocale}${pathname?.replace(/^\/(en|ar)/, "") ?? ""}${search}${hash}`;
    router.push(nextPath);
  };
  const t = dict.nav;
  const navLinks = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.works, href: "#works" },
    { label: t.faqs, href: "#faqs" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`fixed left-0 right-0 z-30 transition-all duration-500 ${isScrolled ? "top-3 px-4" : "top-0 px-4 pt-4"
        }`}
    >
      <div
        className={`w-full mx-auto max-w-[1440px] flex items-center justify-between relative rounded-[29px] px-3 py-2 transition-all duration-500 ${isScrolled
          ? "backdrop-blur-md bg-black/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[1100px]"
          : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href={`/${locale}#home`} className="shrink-0 z-20" aria-label="Zent Studio">
          <Image
            src="/assets/logo.png"
            alt="Zent Studio Logo"
            width={180}
            height={41}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav pill */}
        <nav className="hero-nav-pill hidden md:flex flex-col items-center justify-center rounded-[29px] h-[40px] ps-[2px] pe-[6px]">
          <ul className="flex items-center gap-1 h-full">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(link.href);
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`flex h-[36px] items-center justify-center text-[13px] leading-none tracking-[-0.26px] px-[14px] rounded-[24px] border transition-colors duration-200 whitespace-nowrap ${isActive
                      ? "bg-[rgba(37,48,21,0.9)] border-[#253015] text-[#EAFFE1]"
                      : "border-transparent text-white/90 hover:bg-white/[0.04]"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center justify-center size-[40px] rounded-full bg-white/[0.06] border border-white/10 text-white/90 hover:bg-white/[0.1] transition"
          >
            <Globe size={16} />
          </button>

                <UIButton href="/#contact" label={t.contact} locale={locale} />
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center justify-center size-10 rounded-full bg-white/[0.06] border border-white/10 text-white/90"
          >
            <Globe size={16} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex items-center justify-center size-10 rounded-full text-white border border-white/10 bg-white/[0.04]"
          >
            <Menu size={18} />
          </button>
        </div>
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