'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Playground', href: '#playground' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-secondary-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-secondary-900">Zingle AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Button variant="ghost" size="sm">
                Talk to Founder
              </Button>
              <Button size="sm">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-secondary-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 px-3 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Talk to Founder
                </Button>
                <Button size="sm" className="w-full">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};