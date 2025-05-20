import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <div 
      className="card h-full"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0 
      }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 flex justify-center w-full">
            <a href="#" className="text-white hover:text-gray-200 mx-2" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 mx-2" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-secondary-500 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;