'use client';

import React from 'react';
import { ArrowRight, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white section-padding">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container-custom relative">
        <div className="items-center">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span>Backed by Nexus & Accel | SOC 2</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl tracking-tight font-bold text-secondary-900 sm:text-5xl md:text-6xl">
              <span className="block">Enterprise AI Gives</span>
              <span className="block text-red-600">Wrong Answers.</span>
              <span className="block text-primary-600">We Fix That.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base text-secondary-600 sm:text-lg md:mt-8 md:text-xl max-w-3xl">
              <strong>Fastest way to teach AI your business</strong>
            </p>
            
            <p className="mt-4 text-base text-secondary-600 sm:text-lg max-w-3xl">
              No new tools. Build perfect context, and make AI agents within existing tools works perfectly
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-secondary-900">100+</div>
                <div className="text-sm text-secondary-600">Data Teams</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">30 min</div>
                <div className="text-sm text-secondary-600">to see output</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">11 years</div>
                <div className="text-sm text-secondary-600">of data team time saved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full sm:w-auto">
                  Talk to Founder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Schedule Demo for early access
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};