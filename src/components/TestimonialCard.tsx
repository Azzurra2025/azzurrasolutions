import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <div 
      className="card h-full p-6 transition-all duration-300 hover:translate-y-[-5px]"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0
      }}
    >
      <Quote className="h-8 w-8 text-secondary-500 mb-4" />
      <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="font-bold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;