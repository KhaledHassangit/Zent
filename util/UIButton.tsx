import { ArrowUpRight, ArrowUpLeft, ArrowRight, ArrowLeft } from 'lucide-react'; 
import { Locale } from "@/types/types"; 
import Link from './link';

interface ButtonProps {
  locale: Locale;       
  href: string;
  label: string;
  className?: string;
}

const UIButton = ({ locale, href, label, className = "" }: ButtonProps) => {
  const isRTL = locale === 'ar';

  const fullPath = `/${locale}${href}`;

  return (
    <Link
      href={fullPath}
      dir={isRTL ? "rtl" : "ltr"}
      className={`
        group/button relative inline-flex shrink-0 items-center 
        overflow-hidden rounded-[42px] bg-[#aaff00] text-black 
        h-[48px] w-fit whitespace-nowrap capitalize text-[15px] leading-[21px] 
        backdrop-blur-[10px] outline-none transition-all duration-500 
        shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.1)] 
        hover:bg-[#99E600] py-[4px]
        
     
        ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}

        ltr:ps-[12px] ltr:pe-[48px] 
        
        rtl:pl-[48px] rtl:pr-[12px]
        
        ltr:hover:ps-[48px] ltr:hover:pe-[12px]
        rtl:hover:pl-[12px] rtl:hover:pr-[48px]
        
        ${className}
      `}
    >
      <span className="relative z-10 font-medium select-none">
        {label}
      </span>

      <span className={`
        absolute inset-y-0 my-auto flex h-[36px] w-[36px] items-center justify-center 
        rounded-[45px] bg-black text-white shrink-0
        transition-all duration-500 
        
        ltr:right-[6px] ltr:group-hover/button:right-[calc(100%-42px)]
        
        rtl:left-[6px] rtl:group-hover/button:left-[calc(100%-42px)]
      `}>
        <span className="absolute transition-opacity duration-300 opacity-100 group-hover/button:opacity-0">
            {isRTL ? <ArrowUpLeft size={18} color="white" /> : <ArrowUpRight size={18} color="white" />}
        </span>

        <span className="absolute transition-opacity duration-300 opacity-0 group-hover/button:opacity-100">
            {isRTL ? <ArrowLeft size={18} color="white" /> : <ArrowRight size={18} color="white" />}
        </span>
      </span>
    </Link>
  );
};

export default UIButton;
