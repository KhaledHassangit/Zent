import { getDictionary, isValidLocale } from "@/lib/i18n";
import { Locale } from "@/types/types";
import { notFound } from "next/navigation";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhySection from "@/components/sections/why-section";
import ProjectsSection from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import PixelsExample from "@/components/sections/pixels-example";
import BrandsSection from "@/components/sections/brands-section";
import AboutSection from "@/components/sections/about-section";
import { fetchCategories } from "@/services/categories";
import { fetchProjects } from "@/services/projects";
import LightRays from "@/components/effects/LightRays";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const [dict, projectsData, categoriesData] = await Promise.all([
    getDictionary(locale as Locale),
    fetchProjects(),
    fetchCategories(),
  ]);

  const projects = projectsData.data;
  const categories = categoriesData.data;

  return (
    <>

    
      <HeroSection dict={dict} locale={locale as Locale} />
      <BrandsSection dict={dict} />
      <AboutSection dict={dict}  />
      <ServicesSection dict={dict} categories={categories} />
      <WhySection dict={dict} />
      <ProjectsSection dict={dict} locale={locale as Locale} projects={projects} />
      <TestimonialsSection dict={dict} locale={locale as Locale} />
      <FaqSection dict={dict} locale={locale as Locale} />
      <PixelsExample dict={dict} locale={locale as Locale} />
    </>
  );
}
