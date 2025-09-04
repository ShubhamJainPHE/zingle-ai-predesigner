import React from 'react';
import { AlertTriangle, CheckCircle, Brain, Database, Code } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ProblemSolutionSection: React.FC = () => {
  const aiExamples = [
    {
      schema: 'customer_status = 3',
      meaning: 'Enterprise customer in renewal discussion',
      context: 'High-value client requiring strategic attention'
    },
    {
      schema: 'payment_date = NULL',
      meaning: 'Transaction might be pending bank confirmation',
      context: 'Normal processing delay, not a payment failure'
    },
    {
      schema: 'failed order',
      meaning: 'Might be due to payment failure or RTO or cancelled by user',
      context: 'Multiple failure modes requiring different responses'
    }
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            AI agents within your current tools are good,<br />
            you just need to teach them your business
          </h2>
        </div>

        {/* AI Comparison */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* What AI Sees */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center justify-center lg:justify-start">
                  <Database className="w-6 h-6 mr-3" />
                  What Your AI Sees
                </h3>
              </div>
              
              <div className="space-y-4">
                {aiExamples.map((example, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-mono text-red-700 font-semibold mb-2">
                      {example.schema}
                    </div>
                    <div className="text-red-600 text-sm">
                      Raw schema data without business context
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-red-100 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="font-semibold text-red-800">AI sees schema, predicts your business</span>
                </div>
              </div>
            </div>

            {/* What It Should Understand */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center justify-center lg:justify-start">
                  <Brain className="w-6 h-6 mr-3" />
                  What It Should Understand
                </h3>
              </div>
              
              <div className="space-y-4">
                {aiExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="font-semibold text-green-800 mb-2">
                      {example.meaning}
                    </div>
                    <div className="text-green-600 text-sm">
                      {example.context}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">AI understands business, helps you improve it</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800">
            <Code className="mr-2 h-5 w-5" />
            Try Playground
          </Button>
        </div>
      </div>
    </section>
  );
};