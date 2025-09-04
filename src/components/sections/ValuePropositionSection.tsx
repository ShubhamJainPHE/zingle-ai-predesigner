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

        </div>
      </div>
    </section>
  );
};