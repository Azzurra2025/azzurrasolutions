import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = '/services',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(14, 47, 90, 0.8), rgba(170, 30, 44, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-60 h-60 bg-secondary-500 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 md:mb-12 text-gray-100"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={itemVariants}
          >
            {primaryButtonText && (
              <Button
                variant="secondary"
                size="lg"
                as="link"
                to={primaryButtonLink}
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                as="link"
                to={secondaryButtonLink}
                className="bg-white/10 hover:bg-white/20 border-white text-white"
              >
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;