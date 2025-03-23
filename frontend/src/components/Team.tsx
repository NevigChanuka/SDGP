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
      description: 'Led the Project, ensuring seamless coordination and technical execution. Contributed to the both frontend and backend. Managed project workflows, audited team contributions, and guided the team toward creating an innovative vehicle management solution.',
      image: Nevig,
      socialLinks: {
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/nevig-chanuka-1614a3268/',
        github: 'https://github.com/NevigChanuka'
      }
    },
    {
      id: '2',
      name: 'ÈkQld úrdð',
      role: 'Full-Stack Developer | UI/UX Designer',
      description: 'Led the Flutter project, gathering and motivating the team to deliver high-quality results. Designed and implemented the mobile app\'s driver dashboard and driving history features, ensuring a seamless user experience.',
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
      role: 'Full-Stack Developer | UI/UX Expert',
      description: 'Manage the project, ensuring seamless collaboration and high-quality execution. Designed the UI/UX, developed the backend, and implemented the mobile application.',
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
      role: 'Frontend Developer | Presenter',
      description: 'Led the presenting and pitching of the project. Developed the frontend interface with a focus on user experience and visual appeal.',
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
      role: 'Frontend Developer | UI/UX Designer',
      description: 'Developed the frontend interface with a focus on responsive and visually appealing user experiences. Contributed to UI/UX design and mobile app development.',
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
      role: 'Full-Stack Developer | Documentation',
      description: 'Led documentation efforts and conducted in-depth research to enhance system performance and reliability. Contributed to both frontend and backend development.',
      image: Akalanka,
      socialLinks: {
        instagram: 'https://www.instagram.com/_akalanka_wihangana?igsh=YmJuZTFrNnprYjl3&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/akalanka-wihangana-447129340/',
        github: 'https://github.com/akalankawihangana'
      }
    }
  ];