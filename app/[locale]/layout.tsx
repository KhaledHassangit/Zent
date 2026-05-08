import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo } from "next/font/google";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/types/types";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-arabic",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: {
      default: "Zent Studio",
      template: "%s | Zent Studio",
    },
    description: isAr
      ? "نُسرّع التحول الرقمي بحلول برمجية مبتكرة"
      : "Accelerating Digital Change With Innovative Software",
    keywords: ["digital agency", "web development", "UI/UX design", "mobile apps", "SaaS"],
    authors: [{ name: "Zent Studio" }],
    openGraph: {
      title: "Zent Studio",
      description: isAr
        ? "نُسرّع التحول الرقمي بحلول برمجية مبتكرة"
        : "Accelerating Digital Change With Innovative Software",
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      siteName: "Zent Studio",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zent Studio",
      description: isAr
        ? "نُسرّع التحول الرقمي بحلول برمجية مبتكرة"
        : "Accelerating Digital Change With Innovative Software",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${isRTL ? "font-arabic" : "font-english"} ${cairo.variable}`}
    >
      <body className={`min-h-full flex flex-col bg-black text-white antialiased ${isRTL ? "font-arabic" : "font-english"}`}>
        <Navbar dict={dict} locale={locale as Locale} />
        <main id="main-content" className="flex-1 overflow-hidden">
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
