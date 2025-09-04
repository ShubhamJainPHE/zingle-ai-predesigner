import React from 'react';
import { Zap, Clock, Lock } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Improve your existing AI Agents',
      description: 'Your existing AI stack gets smarter. No migration, no disruption.',
      benefits: [
        'Works with Databricks, Snowflake, MongoDB', 
        'No new tools required', 
        'Seamless integration', 
        'Zero downtime deployment'
      ]
    },
    {
      icon: Lock,
      title: 'Your Code Stays Private',
      description: 'Zero storage architecture. Your LLM keys, your environment.',
      benefits: [
        'No data leaves your environment', 
        'Your API keys, your control', 
        'Zero storage on our servers', 
        'Complete data sovereignty'
      ],
      highlight: true
    },
    {
      icon: Clock,
      title: '5-Minute Setup',
      description: 'VS Code extension → Connect repos → Perfect AI responses.',
      benefits: [
        'Install VS Code extension', 
        'Connect your repositories', 
        'Automatic context generation', 
        'Immediate improvement'
      ]
    }
  ];

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow duration-300 ${
                feature.highlight ? 'border-primary-300 ring-2 ring-primary-100' : 'border-secondary-200'
              }`}
            >
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl ${
                  feature.highlight ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                {feature.highlight && (
                  <div className="mt-2">
                    <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">
                      Most Important
                    </span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-secondary-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Privacy emphasis */}
        {features.find(f => f.highlight) && (
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
              
              {/* Content requirement note */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>📝 Content Required:</strong> Add details about &ldquo;how&rdquo; the zero storage architecture works. 
                  Technical explanation for developer audience.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};