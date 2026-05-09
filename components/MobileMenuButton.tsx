// components/MobileMenuButton.tsx
"use client";

import { Locale } from "@/types/types";
import LangSwitcher from "@/util/LangSwitcher";
import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  locale:Locale;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick ,locale}: MobileMenuButtonProps) {
  return (
            <div className="flex md:hidden items-center gap-2">
    <LangSwitcher locale={locale} />
    <button
      onClick={onClick}
      aria-label="Open menu"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="flex items-center justify-center size-10 rounded-full text-white border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition"
    >
      <Menu size={18} />
    </button>
    </div>
  );
}