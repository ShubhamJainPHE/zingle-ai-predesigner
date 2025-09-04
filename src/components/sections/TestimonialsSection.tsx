import React from 'react';
import { Star, Quote, Building, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Note: These are placeholder testimonials following PRD guidelines
  // Replace with real customer testimonials with written permission
  const testimonials = [
    {
      id: 1,
      name: '[Customer Name Required]',
      title: '[Title Required]',
      company: '[Company Required]',
      companySize: 'Enterprise',
      image: '/api/placeholder/customer1', // Replace with real photo
      rating: 5,
      testimonial: '[Replace with real customer testimonial - requires written permission and actual metrics]',
      metrics: {
        improvement: '[Actual metric required]',
        timeframe: '[Timeframe required]'
      },
      verified: true
    },
    {
      id: 2,
      name: '[Customer Name Required]',
      title: '[Title Required]',
      company: '[Company Required]',
      companySize: 'Mid-Market',
      image: '/api/placeholder/customer2', // Replace with real photo
      rating: 5,
      testimonial: '[Replace with real customer testimonial - requires written permission and actual metrics]',
      metrics: {
        improvement: '[Actual metric required]',
        timeframe: '[Timeframe required]'
      },
      verified: true
    },
    {
      id: 3,
      name: '[Customer Name Required]',
      title: '[Title Required]',
      company: '[Company Required]',
      companySize: 'Startup',
      image: '/api/placeholder/customer3', // Replace with real photo
      rating: 5,
      testimonial: '[Replace with real customer testimonial - requires written permission and actual metrics]',
      metrics: {
        improvement: '[Actual metric required]',
        timeframe: '[Timeframe required]'
      },
      verified: true
    }
  ];

  const companyLogos = [
    // Note: Only include with written permission
    '[Company Logo 1 - Permission Required]',
    '[Company Logo 2 - Permission Required]',
    '[Company Logo 3 - Permission Required]',
    '[Company Logo 4 - Permission Required]',
    '[Company Logo 5 - Permission Required]',
    '[Company Logo 6 - Permission Required]'
  ];

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            See how companies are transforming their customer communication with Zingle AI.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">1000+</div>
              <div className="text-sm text-secondary-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-secondary-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">4.9/5</div>
              <div className="text-sm text-secondary-600">Rating</div>
            </div>
          </div>
          
          {/* Company Logos Placeholder */}
          <div className="bg-secondary-50 rounded-lg p-8">
            <p className="text-sm text-secondary-500 mb-4 font-medium">TRUSTED BY LEADING COMPANIES</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 opacity-60">
              {companyLogos.map((logo, logoIndex) => (
                <div key={logoIndex} className="bg-secondary-200 h-12 rounded flex items-center justify-center">
                  <span className="text-xs text-secondary-500 text-center px-2">{logo}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-secondary-400 mt-4">
              ⚠️ PLACEHOLDER: Replace with actual company logos (requires written permission)
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-secondary-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
              {/* Content Notice */}
              <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                ⚠️ PLACEHOLDER
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary-200 mb-3" />
                <p className="text-secondary-700 leading-relaxed italic">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Metrics */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 text-primary-600 mr-2" />
                  <span className="text-sm font-semibold text-primary-800">Results</span>
                </div>
                <p className="text-sm text-primary-700">
                  <span className="font-semibold">{testimonial.metrics.improvement}</span> in {testimonial.metrics.timeframe}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-secondary-500" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary-600">{testimonial.title}</div>
                  <div className="text-sm text-secondary-500">{testimonial.company} • {testimonial.companySize}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Requirements Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Content Requirements for Production</h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p><strong>Required for each testimonial:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Real customer name, title, and company affiliation</li>
              <li>Written permission to use testimonial on website</li>
              <li>Professional headshot photo (high-resolution)</li>
              <li>Specific metrics or outcomes (with verification)</li>
              <li>Contact information for verification if needed</li>
            </ul>
            <p><strong>Company logos:</strong> Only include with explicit written permission</p>
            <p><strong>Verification:</strong> All testimonials should be verifiable and authentic</p>
          </div>
        </div>

        {/* Case Studies CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to See Detailed Case Studies?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Explore in-depth success stories and learn exactly how our customers achieved 
              these remarkable results with Zingle AI.
            </p>
            <button className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};