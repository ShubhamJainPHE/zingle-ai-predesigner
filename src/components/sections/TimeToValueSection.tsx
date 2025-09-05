'use client';

import React from 'react';
import { Clock, Settings, Users, TrendingUp, CheckCircle } from 'lucide-react';

export const TimeToValueSection: React.FC = () => {
  const phases = [
    {
      time: '30 min',
      title: 'Setup & Connect',
      description: 'Install extension, connect your data sources as-is',
      icon: Settings,
      color: 'bg-blue-500',
      position: 'left-0'
    },
    {
      time: 'Same day',
      title: 'Business Context Active',
      description: 'AI understands your business rules and processes',
      icon: Users,
      color: 'bg-green-500', 
      position: 'left-1/2 transform -translate-x-1/2'
    },
    {
      time: 'Within hours',
      title: 'Enterprise-Grade Results',
      description: 'Perfect responses, continuous learning, full adoption',
      icon: TrendingUp,
      color: 'bg-purple-500',
      position: 'right-0'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Speed to Value
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Business AI in 30 Minutes,<br />
            <span className="text-blue-600">Not 30 Days</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            While others take weeks to deliver basic AI, Zingle gives you enterprise-grade 
            business intelligence in the time it takes to grab coffee.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="relative mb-16">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 rounded-full"></div>
            <div className="absolute top-6 left-0 right-0 flex justify-between items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Timeline labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-2xl ${phase.color} text-white mb-4 shadow-lg`}>
                  <phase.icon className="w-8 h-8" />
                </div>
                <div className={`text-2xl font-bold ${phase.color.replace('bg-', 'text-')} mb-2`}>
                  {phase.time}
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  {phase.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison callout */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">14+ days</div>
                <div className="text-sm text-secondary-600">Traditional AI setup</div>
              </div>
              <div className="text-4xl text-secondary-300">vs</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30 minutes</div>
                <div className="text-sm text-secondary-600 flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  Zingle AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};