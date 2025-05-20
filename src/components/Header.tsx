import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navItems } from '../data/navItems';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-primary-500' : 'text-white'}`}>
            Azzurra Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-200 ${
                scrolled 
                  ? 'text-gray-800 hover:text-primary-500' 
                  : 'text-white hover:text-gray-200'
              } ${location.pathname === item.path ? 'border-b-2 border-secondary-500' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`btn px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              scrolled 
                ? 'bg-secondary-500 text-white hover:bg-secondary-600' 
                : 'bg-white text-primary-500 hover:bg-gray-100'
            }`}
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium py-2 px-4 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary w-full flex justify-center mt-4"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;