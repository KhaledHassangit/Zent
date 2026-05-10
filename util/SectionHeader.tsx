import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  heading: string;
  labelClassName?: string;
  headingClassName?: string;
  containerClassName?: string; 
}

export const SectionHeader = ({
  label,
  heading,
  labelClassName = "",
  headingClassName = "",
  containerClassName = ""
}: SectionHeaderProps) => {
  return (
    <div className={containerClassName}>
      <span className={cn(
        "block font-heading font-medium text-[15.5px] leading-[19.2px] tracking-[-1px] text-primary capitalize",
        labelClassName 
      )}>
        {label}
      </span>

      <h2 className={cn(
        "text-white font-heading tracking-[-1px] md:tracking-[-2px]",
        
        "text-[36px] leading-10.5 lg:text-[42px] lg:leading-11 xl:text-[56px] xl:leading-[58.6px]",
        
        "font-medium",
        
        headingClassName
      )}>
        {heading}
      </h2>
    </div>
  );
};