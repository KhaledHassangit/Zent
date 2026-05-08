import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { Locale } from "@/types/types"; // Importing your specific type

interface ButtonProps {
  locale: Locale;       // Uses "en" | "ar"
  href: string;
  label: string;
  className?: string;
}

const UIButton = ({ locale, href, label, className = "" }: ButtonProps) => {
  // Determine direction: Only 'ar' is RTL based on your type
  const isRTL = locale === 'ar';

  // Construct full URL (e.g., "/ar/#contact")
  const fullPath = `/${locale}${href}`;

  return (
    <Link
      href={fullPath}
      className={`rounded-[42px] flex items-center justify-center whitespace-nowrap capitalize text-[15px] leading-[21px] backdrop-blur-[10px] bg-[#aaff00] text-black ps-[12px] pe-[6px] py-[4px] h-[48px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.1)] hover:bg-[#99E600] transition-colors duration-200 group gap-3 ${className}`}
    >
      <span className="font-medium">{label}</span>

      {/* Icon Container - shrink-0 prevents squashing with long text */}
      <span className="w-[36px] h-[36px] rounded-[45px] bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
        {isRTL ? <ArrowUpLeft size={18} color="white" /> : <ArrowUpRight size={18} color="white" />}
      </span>
    </Link>
  );
};

export default UIButton;