"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Globe } from "lucide-react";
import { LangSwitcherProps } from "@/types/types";



export default function LangSwitcher({ locale, className }: LangSwitcherProps) {
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

  return (
    <button
      onClick={toggleLocale}
      aria-label="Toggle language"
      className={`flex items-center justify-center size-[40px] rounded-full bg-white/[0.06] border border-white/10 text-white/90 hover:bg-white/[0.1] transition ${className}`}
    >
      <Globe size={16} />
      <span className="sr-only">Switch Language</span>
    </button>
  );
}