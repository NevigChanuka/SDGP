import Nevig from '../assets/Nevig.jpg';
import Dinuka from '../assets/Dinuka.jpg';
import Imandi from '../assets/Imandi.jpeg';
import Supuni from '../assets/Supuni.jpg';
import Kalana from '../assets/Kalana.jpg';
import Akalanka from '../assets/Akalanka.jpg';


export interface TeamMember {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
    socialLinks: {
      instagram?: string;
      linkedin?: string;
      github?: string;
    };
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'fkú.a pdkql',
      role: 'Team Lead | Full-Stack Developer',
      description: 'Led the Vyakarana project, ensuring smooth coordination and timely delivery. Contributed to both frontend and backend development, managed workflows, and guided the team in creating an innovative Sinhala grammar tool.',
      image: Nevig,
      socialLinks: {
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/nevig-chanuka-1614a3268/',
        github: 'https://github.com/NevigChanuka'
      }
    },
    {
      id: '2',
      name: 'Èkqld úrdð',
      role: 'Full-Stack Developer | Language Researcher',
      description: 'Contributed to frontend styling and UI components, integrated the backend with the frontend, and researched and collected Sinhala grammar rules.',
      image: Dinuka,
      socialLinks: {
        instagram: 'https://www.instagram.com/dinu_viraji._/',
        linkedin: 'https://www.linkedin.com/in/dinuka-viraji-521356278/ ',
        github: 'https://github.com/dinukaviraji'
      }
    },
    {
      id: '3',
      name: 'bukaÈ lú;aud',
      role: 'UI/UX Designer | Documentation',
      description: "Contributed to the frontend development and created the wireframe prototype of the project. Also conducted detailed research to support the project's documentation and design decisions.",
      image: Imandi,
      socialLinks: {
        instagram: 'https://www.instagram.com/ima.kik/',
        linkedin: 'https://www.linkedin.com/in/imandi-kavithma-7bba24294',
        github: 'https://github.com/imandikavithma'
      }
    },
    {
      id: '4',
      name: ' iqmqks YIsl,d',
      role: 'Frontend Developer | Content Manager',
      description: "Developed the Grammar Checker and Feedback pages of the website. Also created and managed the project's social media pages to support outreach and engagement.",
      image: Supuni,
      socialLinks: {
        instagram: 'https://www.instagram.com/supuni__s?igsh=MXUxM253ZnFwY21waQ==',
        linkedin: 'https://www.linkedin.com/in/supuni-shashikala-860554294/',
        github: 'https://github.com/Supuni1868'
      }
    },
    {
      id: '5',
      name: 'l<K lreKdr;ak',
      role: 'Full-Stack Developer | UI/UX Designer',
      description: 'Developed the frontend by designing and building the Similar Words, Grammar Rules, and Word Bank pages. Helped improve the platform’s educational value and user experience through clear, accessible layouts and features.',
      image: Kalana,
      socialLinks: {
        instagram: 'https://www.instagram.com/kalana_1061?igsh=MWc5b2hoMDVodGlvdg==',
        linkedin: 'www.linkedin.com/in/kalana-karunarathna-031a2a2b7',
        github: 'https://github.com/Kalana232491'
      }
    },
    {
      id: '6',
      name: 'wl,xl úyx.k',
      role: 'Language Data Collector',
      description: 'Collected synonyms, antonyms, and paired words for the Word Bank feature, contributing to the educational content and enhancing the tool’s language support capabilities.',
      image: Akalanka,
      socialLinks: {
        instagram: 'https://www.instagram.com/_akalanka_wihangana?igsh=YmJuZTFrNnprYjl3&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/akalanka-wihangana-447129340/',
        github: 'https://github.com/akalankawihangana'
      }
    }
  ];