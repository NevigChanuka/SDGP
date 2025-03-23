import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import type { TeamMember } from '../components/Team';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <h3 className="text-3xl font-bold text-gray-900 font-sandaru">{member.name}</h3>
      <p className="text-sm text-gray-600 mb-4 font-bold">{member.role}</p>
      <p className="text-sm text-gray-500 mb-6 ">{member.description}</p>
      
      <div className="flex gap-4">
        {member.socialLinks.instagram && (
          <a href={member.socialLinks.instagram} className="text-gray-600 hover:text-gray-900">
            <Instagram size={20} />
          </a>
        )}
        {member.socialLinks.linkedin && (
          <a href={member.socialLinks.linkedin} className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
        )}
        {member.socialLinks.github && (
          <a href={member.socialLinks.github} className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  );
}