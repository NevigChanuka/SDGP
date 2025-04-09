import { Instagram, Linkedin, Github } from 'lucide-react'; // Import social media icons from lucide-react
import type { TeamMember } from '../components/Team'; // Import the TeamMember type

// Define the props interface for the TeamCard component
interface TeamCardProps {
  member: TeamMember; // The team member data to display
}

// Define the TeamCard component
export function TeamCard({ member }: TeamCardProps) {
  return (
    // Container for the team card with styling
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
      {/* Team member's image */}
      <img 
        src={member.image} // Image source from the member data
        alt={member.name} // Alt text for accessibility
        className="w-40 h-40 rounded-full object-cover mb-4" // Styling for the image
      />
      
      {/* Team member's name */}
      <h3 className="text-2xl font-bold text-gray-900 font-sandaru">{member.name}</h3>
      
      {/* Team member's role */}
      <p className="text-sm text-gray-600 mb-4 font-bold">{member.role}</p>
      
      {/* Team member's description */}
      <p className="text-sm text-gray-500 mb-6 ">{member.description}</p>
      
      {/* Social media links container */}
      <div className="flex gap-4">
        {/* Instagram link */}
        {member.socialLinks.instagram && (
          <a 
            href={member.socialLinks.instagram} // Instagram URL from the member data
            className="text-gray-600 hover:text-gray-900" // Styling for the link
          >
            <Instagram size={20} /> {/* Instagram icon */}
          </a>
        )}
        
        {/* LinkedIn link */}
        {member.socialLinks.linkedin && (
          <a 
            href={member.socialLinks.linkedin} // LinkedIn URL from the member data
            className="text-gray-600 hover:text-gray-900" // Styling for the link
          >
            <Linkedin size={20} /> {/* LinkedIn icon */}
          </a>
        )}
        
        {/* GitHub link */}
        {member.socialLinks.github && (
          <a 
            href={member.socialLinks.github} // GitHub URL from the member data
            className="text-gray-600 hover:text-gray-900" // Styling for the link
          >
            <Github size={20} /> {/* GitHub icon */}
          </a>
        )}
      </div>
    </div>
  );
}