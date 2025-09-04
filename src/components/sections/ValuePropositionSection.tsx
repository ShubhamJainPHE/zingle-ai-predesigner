import React from 'react';
import { DollarSign, Clock, Zap } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Stop Wasting Money on{' '}
            <span className="text-red-600">new AI agents</span>
          </h2>
          
          {/* Sub-headline */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-8">
            30 minutes to perfect AI. Forever.
          </h3>
          
          {/* Description */}
          <p className="text-lg text-secondary-700 leading-relaxed max-w-3xl mx-auto mb-12">
            you don&apos;t need $ and time to make Enterprise AI work, it can happen from day 1 with zingle
          </p>

          {/* Value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Save $650K+</h4>
              <p className="text-secondary-600 text-sm">
                Stop buying new AI tools that don&apos;t understand your business
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">30-Minute Setup</h4>
              <p className="text-secondary-600 text-sm">
                VS Code extension → Connect repos → Perfect AI responses
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Zero Disruption</h4>
              <p className="text-secondary-600 text-sm">
                Improve existing AI stack. No migration, no downtime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};