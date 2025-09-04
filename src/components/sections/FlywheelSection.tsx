import React from 'react';
import { ArrowRight, RefreshCw, FileText, Edit3, BarChart3, Database } from 'lucide-react';

export const FlywheelSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Zingle generates your current business processes.',
      description: 'AI systems always understand latest state of your business',
      icon: FileText,
      detail: ''
    },
    {
      number: 2,
      title: 'You edit what you wants to add extra or change',
      description: 'Users can guide the model towards more precise outcomes through real-time adjustments',
      icon: Edit3,
      detail: ''
    },
    {
      number: 3,
      title: 'As your processes evolves, zingle automatically updates business process documents.',
      description: 'The AI evolves with every interaction, adapting to shifting data and business priorities while maintaining consistent accuracy',
      icon: RefreshCw,
      detail: ''
    }
  ];

  const aiTools = [
    { name: 'Custom AI Agent', color: 'bg-purple-600' },
    { name: 'Databricks', color: 'bg-red-600' },
    { name: 'Snowflake', color: 'bg-blue-600' },
    { name: 'MongoDB', color: 'bg-green-600' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Continuous Improvement
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Build a smart feedback loop with AI that drives<br />
            continuous performance improvement
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            AI systems always understand the latest state of your business through our automated feedback loop.
          </p>
        </div>

        {/* AI Tools Integration */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Works with your existing AI stack
            </h3>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
              {aiTools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  <div className={`${tool.color} text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg`}>
                    {tool.name}
                  </div>
                  {index < aiTools.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-secondary-400 mx-2" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Content requirement note */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-blue-700">
                <strong>📝 Content Required:</strong> Replace with actual tool logos (SVG format). 
                Verify integration capabilities and add technical details.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-primary-300 transform translate-x-4">
                    <ArrowRight className="absolute -top-2 -right-2 w-5 h-5 text-primary-600" />
                  </div>
                )}
                
                <div className="bg-white border border-secondary-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Step number and icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <step.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                    {step.title}
                  </h4>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <p className="text-sm text-secondary-700">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Database className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-secondary-900">
                Business-Critical Reliability
              </h3>
            </div>
            
            <p className="text-lg text-secondary-700 leading-relaxed mb-8">
              The system automatically evaluates the accuracy of responses to ensure 
              business-critical reliability across all your AI tools and workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">99.7%</div>
                <div className="text-sm text-secondary-600">Context Accuracy</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">30min</div>
                <div className="text-sm text-secondary-600">Average Setup</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">0</div>
                <div className="text-sm text-secondary-600">Data Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};