import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Brain, Shield, Lightbulb, Users } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const iconMap = {
    'code': <Code className="h-10 w-10 text-primary-500" />,
    'cloud': <Cloud className="h-10 w-10 text-primary-500" />,
    'brain': <Brain className="h-10 w-10 text-primary-500" />,
    'shield': <Shield className="h-10 w-10 text-primary-500" />,
    'lightbulb': <Lightbulb className="h-10 w-10 text-primary-500" />,
    'users': <Users className="h-10 w-10 text-primary-500" />,
  };

  const renderIcon = () => {
    return iconMap[service.icon as keyof typeof iconMap] || null;
  };

  return (
    <div 
      className="card h-full flex flex-col"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0 
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors duration-200 group"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;