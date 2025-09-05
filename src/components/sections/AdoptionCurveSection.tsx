'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Brain, AlertTriangle, CheckCircle } from 'lucide-react';

export const AdoptionCurveSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Business Intelligence
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Business Context: The Difference Between<br />
            <span className="text-green-600">AI Adoption</span> and <span className="text-red-600">AI Abandonment</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            Generic AI frustrates users with irrelevant responses. Business-context AI builds trust through understanding.
          </p>
        </div>

        {/* Graph Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            {/* Y-axis label */}
            <div className="flex">
              <div className="flex items-center justify-center w-16">
                <div className="transform -rotate-90 text-sm font-medium text-secondary-600 whitespace-nowrap">
                  AI ADOPTION
                </div>
              </div>
              
              {/* Main graph area */}
              <div className="flex-1 relative h-80">
                {/* Graph background */}
                <div className="absolute inset-0 bg-white rounded-lg border border-gray-200">
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    <div className="h-full w-full opacity-20">
                      <div className="h-1/4 border-b border-gray-200"></div>
                      <div className="h-1/4 border-b border-gray-200"></div>
                      <div className="h-1/4 border-b border-gray-200"></div>
                      <div className="h-1/4"></div>
                    </div>
                  </div>
                  
                  {/* Success curve (Zingle AI) */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="none">
                    <path
                      d="M 20 280 Q 100 240 200 120 T 380 60"
                      stroke="#10b981"
                      strokeWidth="4"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                    <circle cx="380" cy="60" r="6" fill="#10b981" className="drop-shadow-sm" />
                  </svg>
                  
                  {/* Failure curve (Generic AI) */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="none">
                    <path
                      d="M 20 200 Q 120 180 200 200 T 380 260"
                      stroke="#ef4444"
                      strokeWidth="4"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                    <circle cx="380" cy="260" r="6" fill="#ef4444" className="drop-shadow-sm" />
                  </svg>
                  
                  {/* Annotations */}
                  <div className="absolute top-12 right-8">
                    <div className="bg-white rounded-lg p-3 shadow-lg border border-green-200 max-w-xs">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-800 text-sm">Business-Context AI</span>
                      </div>
                      <p className="text-xs text-green-700">
                        Users trust responses. Adoption accelerates through understanding.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-12 right-8">
                    <div className="bg-white rounded-lg p-3 shadow-lg border border-red-200 max-w-xs">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="font-semibold text-red-800 text-sm">Generic AI</span>
                      </div>
                      <p className="text-xs text-red-700">
                        Users lose trust. Adoption drops due to irrelevant responses.
                      </p>
                    </div>
                  </div>
                  
                  {/* Key moment annotation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                      <div className="text-xs font-medium text-blue-800">
                        Business context makes<br />the difference
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* X-axis label */}
            <div className="text-center mt-4 text-sm font-medium text-secondary-600">
              TIME
            </div>
          </div>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Business Context */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-500 rounded-lg">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-800">Generic AI Path</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-red-700">
                  <div className="font-semibold">Confusing responses</div>
                  <div className="text-sm">AI doesn&apos;t understand business context</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-red-700">
                  <div className="font-semibold">User frustration grows</div>
                  <div className="text-sm">Teams lose confidence in AI capabilities</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-red-700">
                  <div className="font-semibold">Adoption drops</div>
                  <div className="text-sm">Users return to manual processes</div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* With Business Context */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-500 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Business-Context AI</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-700">
                  <div className="font-semibold">Relevant, smart responses</div>
                  <div className="text-sm">AI understands business rules and context</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-700">
                  <div className="font-semibold">Trust builds quickly</div>
                  <div className="text-sm">Teams see immediate value and accuracy</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-green-700">
                  <div className="font-semibold">Adoption accelerates</div>
                  <div className="text-sm">More use cases, higher satisfaction</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};