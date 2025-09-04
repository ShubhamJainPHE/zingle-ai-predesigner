import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold">Zingle AI</span>
              </div>
              <p className="text-secondary-300 mb-4 max-w-md">
                Revolutionizing communication with intelligent AI solutions. 
                Connect, automate, and scale your business communications effortlessly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-secondary-300 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#team" className="text-secondary-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Zingle AI. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};