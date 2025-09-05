'use client';

import React, { useState } from 'react';
import { AlertTriangle, Terminal, Play, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ProblemSolutionSection: React.FC = () => {
  const [query, setQuery] = useState("Show me customers who haven't paid in the last 30 days");

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            All AI agents are using same models and techniques,<br />
            you just need to teach them your business
          </h2>
        </div>

        {/* Command Line Interface */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Terminal className="w-4 h-4 text-gray-400 ml-2" />
              <span className="text-gray-300 text-sm">AI Query Console</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-green-400 font-mono">$</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white font-mono text-lg outline-none placeholder-gray-400"
                  placeholder="Type your business question in natural language..."
                />
              </div>
              
              <Button 
                className="bg-primary-600 hover:bg-primary-700 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-2" />
                Run the question
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Without Zingle AI */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                Without Zingle AI
              </h3>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-800">Generic AI Output</span>
                  </div>
                  
                  <div className="bg-white rounded p-4 font-mono text-sm text-gray-800">
                    <div className="text-gray-600 mb-2">SELECT * FROM customers</div>
                    <div className="text-gray-600 mb-2">WHERE payment_status = 'unpaid'</div>
                    <div className="text-gray-600 mb-4">AND created_date &gt; '2024-08-05'</div>
                    
                    <div className="space-y-2 text-xs">
                      <div>customer_id: 1001 | status: 3 | amount: NULL</div>
                      <div>customer_id: 1002 | status: 5 | amount: 2500</div>
                      <div>customer_id: 1003 | status: 3 | amount: NULL</div>
                    </div>
                  </div>
                  
                  <div className="text-red-700 text-sm">
                    ❌ Raw data without business context<br/>
                    ❌ Unclear what status codes mean<br/>
                    ❌ No insight into next actions
                  </div>
                </div>
              </div>
            </div>

            {/* With Zingle AI */}
            <div className="space-y-4 relative">
              <h3 className="text-xl font-bold text-green-600 mb-6 text-center">
                With Zingle AI
              </h3>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 relative">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-800">Business-Context AI Output</span>
                  </div>
                  
                  <div className="bg-white rounded p-4 text-sm">
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                        <div className="font-semibold text-gray-800">Enterprise Customer (ID: 1001)</div>
                        <div className="text-sm text-gray-600">Status: Renewal discussion in progress</div>
                        <div className="text-xs text-blue-600 mt-1">→ High-value client, requires strategic attention</div>
                      </div>
                      
                      <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                        <div className="font-semibold text-gray-800">SMB Customer (ID: 1002)</div>
                        <div className="text-sm text-gray-600">Status: Payment overdue ($2,500)</div>
                        <div className="text-xs text-red-600 mt-1">→ Send automated reminder, escalate if no response</div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-semibold text-gray-800">New Customer (ID: 1003)</div>
                        <div className="text-sm text-gray-600">Status: Bank verification pending</div>
                        <div className="text-xs text-blue-600 mt-1">→ Normal onboarding process, no action needed</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Annotation Arrows */}
                <div className="absolute -right-8 top-20 hidden lg:block">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600 whitespace-nowrap">Business process</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600 whitespace-nowrap">Column calculations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600 whitespace-nowrap">Edge cases</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600 whitespace-nowrap">Meaning of column values</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-green-700 text-sm mt-4">
                ✅ Clear business context and next actions<br/>
                ✅ Meaningful insights from the same data<br/>
                ✅ Actionable recommendations for each case
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};