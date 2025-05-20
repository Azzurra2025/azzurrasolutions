import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
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
          src={caseStudy.image} 
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{caseStudy.client}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{caseStudy.challenge.substring(0, 100)}...</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
              +{caseStudy.technologies.length - 3} more
            </span>
          )}
        </div>
        <Link
          to={`/case-studies/${caseStudy.id}`}
          className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors duration-200 group"
        >
          Read Case Study 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;