import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import FAQSection from '@/components/home/FAQSection';
import TeamSection from '@/components/home/TeamSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSection />
      <FAQSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}