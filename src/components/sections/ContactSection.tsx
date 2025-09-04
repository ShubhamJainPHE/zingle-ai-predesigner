'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  inquiryType: string;
}

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Note: This is a placeholder - implement actual email service integration
      // Options: Resend, SendGrid, EmailJS, or API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    'Talk to Founder',
    'Schedule Demo',
    'Technical Integration',
    'Enterprise Sales',
    'Partnership',
    'Investment Inquiry'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '[FOUNDER EMAIL REQUIRED]',
      description: 'Direct line to our founder'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '[PHONE NUMBER REQUIRED]',
      description: 'Mon-Fri from 9am to 6pm PST'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '[LOCATION REQUIRED]',
      description: 'Remote-first team'
    }
  ];

  const responseInfo = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We typically respond within 2 hours during business days'
    },
    {
      icon: MessageSquare,
      title: 'Personalized Support',
      description: 'Every inquiry gets personal attention from our team'
    },
    {
      icon: CheckCircle,
      title: 'Follow-up',
      description: 'We ensure your questions are fully answered'
    }
  ];

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Ready to Fix Your Enterprise AI?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            Let&apos;s discuss how Zingle can teach your AI tools the business context they need. 
            Talk directly with our founder about your specific use case.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Send us a message
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-green-800 font-medium">Message sent successfully!</div>
                  <div className="text-green-700 text-sm">We&apos;ll get back to you within 2 hours.</div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-red-800 font-medium">Something went wrong</div>
                  <div className="text-red-700 text-sm">Please try again or email us directly.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company', { required: 'Company is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Acme Corp"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-secondary-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  {...register('inquiryType', { required: 'Please select an inquiry type' })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an option</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your needs and how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Form Notice */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-700">
                <strong>⚠️ Development Note:</strong> Form submission requires API route implementation. 
                See /api/contact.ts for email service integration (Resend, SendGrid, etc.)
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Get in touch directly
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-primary-100 rounded-lg mr-4">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">{info.label}</div>
                      <div className="text-lg text-secondary-800 mb-1">{info.value}</div>
                      <div className="text-sm text-secondary-600">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Information */}
            <div className="bg-primary-50 rounded-2xl p-6">
              <h4 className="font-semibold text-primary-900 mb-4">What to expect</h4>
              <div className="space-y-4">
                {responseInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <info.icon className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-900 text-sm">{info.title}</div>
                      <div className="text-primary-700 text-sm">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="border border-secondary-200 rounded-lg p-4">
                <div className="font-medium text-secondary-900 mb-2">Need immediate assistance?</div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};