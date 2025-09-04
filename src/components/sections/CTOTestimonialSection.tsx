import React from 'react';
import { Quote, Building2, AlertTriangle } from 'lucide-react';

export const CTOTestimonialSection: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="relative">
            <Quote className="w-16 h-16 text-primary-400 mx-auto mb-8 opacity-50" />
            
            <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
              &ldquo;We spent{' '}
              <span className="text-red-400">$650K on AI tools</span>{' '}
              that couldn&apos;t tell the difference between{' '}
              <span className="text-yellow-400">active users</span> and{' '}
              <span className="text-yellow-400">registered users</span>.&rdquo;
            </blockquote>
            
            {/* Attribution */}
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="w-12 h-12 bg-secondary-700 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary-300" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-secondary-200">[Fortune 500 CTO Name Required]</div>
                <div className="text-secondary-400 text-sm">[Company Name] | [Title]</div>
              </div>
            </div>
          </div>

          {/* Follow-up message */}
          <div className="bg-secondary-800 rounded-2xl p-8">
            <div className="flex items-start justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  Sound familiar?
                </h3>
                <p className="text-secondary-300 text-lg leading-relaxed">
                  Your Databricks, Snowflake, MongoDB AI chatbots are making the same mistakes right now.
                </p>
              </div>
            </div>

            {/* Content requirements notice */}
            <div className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
              <p className="text-yellow-200 text-sm">
                <strong>📝 Content Required:</strong> Real Fortune 500 CTO testimonial with:
                written permission, actual name/company, verifiable background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};