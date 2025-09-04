import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { CTOTestimonialSection } from '@/components/sections/CTOTestimonialSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { FlywheelSection } from '@/components/sections/FlywheelSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustedCompaniesSection />
      <ProblemSolutionSection />
      <ValuePropositionSection />
      <CTOTestimonialSection />
      <FeaturesSection />
      <FlywheelSection />
      <ContactSection />
    </Layout>
  );
}
