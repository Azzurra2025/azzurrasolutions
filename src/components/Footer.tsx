import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/navItems';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 font-bold text-xl">Azzurra Solutions</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses through innovative IT & software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#custom-software" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#cloud-devops" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cloud & DevOps Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#ai-data" className="text-gray-300 hover:text-white transition-colors duration-200">
                  AI & Data Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#cybersecurity" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link to="/services#it-consulting" className="text-gray-300 hover:text-white transition-colors duration-200">
                  IT Consulting & Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-secondary-500 mr-2 mt-1" />
                <a href="mailto:hr@azzurrasolution.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  hr@azzurrasolution.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary-500 mr-2 mt-1" />
                <a href="tel:+15128663867" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +1 (512) 866-3867
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-500 mr-2 mt-1" />
                <span className="text-gray-300">
                  3301 Buckeye Rd, Suite 200,<br />
                  Atlanta, GA 30341
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Azzurra Solutions LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;