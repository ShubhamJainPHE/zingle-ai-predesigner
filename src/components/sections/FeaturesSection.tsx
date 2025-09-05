import React from 'react';
import { Zap, Lock } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50" id="features">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Zingle
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Fix Enterprise AI Without Changing Your Stack
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            Enhance your existing AI tools with business context that actually works.
          </p>
        </div>

        {/* Zero Trust Architecture */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-secondary-900">
                Zero Trust Architecture
              </h3>
            </div>
            <p className="text-secondary-700 mb-6">
              Your data never leaves your infrastructure. Zingle processes context locally, 
              ensuring complete privacy and compliance with enterprise security requirements.
            </p>
            
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-sm text-secondary-600 font-medium">
                <span className="text-green-600">✓</span> SOC 2 Compliant | 
                <span className="text-green-600 ml-2">✓</span> GDPR Ready | 
                <span className="text-green-600 ml-2">✓</span> On-Premise Option
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};