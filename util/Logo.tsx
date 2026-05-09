import { Locale } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ locale }: { locale: Locale }) => {
  return (
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
  )
}

export default Logo
