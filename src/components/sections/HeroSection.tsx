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
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
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
              <strong>Teaching AI your business brain</strong>
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
                <div className="text-2xl font-bold text-secondary-900">30min</div>
                <div className="text-sm text-secondary-600">Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">0</div>
                <div className="text-sm text-secondary-600">Migration Needed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
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

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* VS Code/AI Context Mockup */}
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden border border-secondary-200">
                {/* VS Code Header */}
                <div className="bg-secondary-800 px-4 py-3 text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="ml-4 font-mono">Zingle AI Extension</span>
                  </div>
                </div>
                
                {/* Before/After Comparison */}
                <div className="bg-secondary-50 p-6">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    {/* Before */}
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <div className="text-red-700 font-semibold mb-2">❌ What AI Sees</div>
                      <div className="font-mono text-red-600 space-y-1">
                        <div>customer_status = 3</div>
                        <div>payment_date = NULL</div>
                        <div>failed order</div>
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <div className="text-green-700 font-semibold mb-2">✅ What It Should Know</div>
                      <div className="text-green-600 space-y-1 text-xs">
                        <div>Enterprise customer in renewal</div>
                        <div>Transaction pending confirmation</div>
                        <div>RTO or user cancelled</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Context Enhancement */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-5 h-5" />
                      <span className="font-semibold text-sm">Business Context Enhanced</span>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/10 backdrop-blur rounded p-3">
                      <div className="font-medium">Databricks AI Agent</div>
                      <div className="text-primary-200 text-xs">Now understands business rules</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur rounded p-3">
                      <div className="font-medium">30min Setup Complete</div>
                      <div className="text-primary-200 text-xs">Zero disruption to workflow</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-green-600 rounded-lg shadow-lg flex items-center justify-center animate-float">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-600 rounded-lg shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};