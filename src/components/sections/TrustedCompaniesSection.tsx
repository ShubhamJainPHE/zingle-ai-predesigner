import React from 'react';

export const TrustedCompaniesSection: React.FC = () => {
  const companies = [
    'SpaceX',
    'OpenAI', 
    'Meta',
    'Google',
    'Microsoft',
    'Sprinklr',
    'Razorpay',
    'PayPal',
    'Amazon',
    'Apple',
    'Intuit'
  ];

  return (
    <section className="py-12 bg-white border-b border-secondary-100">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-medium text-secondary-500 mb-8 tracking-wide uppercase">
            Trusted by more than 100+ data teams worldwide
          </p>
          
          {/* Company logos grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-6 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            {companies.map((company, index) => (
              <div key={index} className="group">
                <div className="bg-secondary-100 hover:bg-secondary-200 transition-colors duration-200 rounded-lg p-4 min-h-[60px] min-w-[80px] flex items-center justify-center">
                  <span className="text-secondary-600 font-semibold text-sm group-hover:text-secondary-800 transition-colors duration-200">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Note for real implementation */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-700">
              <strong>📝 Content Required:</strong> Replace with actual company logos (SVG format preferred). 
              Only include companies with written permission to use their logo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};