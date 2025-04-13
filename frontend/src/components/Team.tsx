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
      role: 'lKavdhï kdhl" mQ¾K ixj¾Ol',
      description: "jHdlrK jHdmD;sh kv;a;= lrñka lKavdhu w;r iqyo iïnkaO;d iy ld¾hhka fõ,djg bgq ùu iqrlaIs; lf<ñ' bÈßmi yd miqmi ixj¾Ok l%shdj,shkays iDcqj odhlj ld¾h m%jdy l<ukdlrKh iy isxy, jHdlrK fuj,ula ks¾udKh lsÍu i|yd u. fmkaùu lf<ñ'",
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
      role: 'mQ¾K ixj¾Ol" NdId m¾fhaIl',
      description: "mßYS,l w;=reuqyqK;a ixrpl ieliSu i|yd odhl;ajh ,nd ÿksñ' miqmi iy bÈßmi wx. tAldnoaO lsÍu isÿ lf<ñ' ;jo isxy, jHdlrK kS;s m¾fhaIKh lr tla/ia lsÍfï ld¾hNdrho bgq lf<ñ'",
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
      role: 'w;=reuqyqK;a ks¾udml" jHdmD;s f,aLl',
      description: "jHdmD;sfha bÈßmi ixj¾Okhg odhl;ajh ,nd ÿksñ'  jHdmD;sfha msgq i|yd uQ,sl fmkqu ilia lsÍug odhl jqfKñ' ;jo jHdmD;s f,aLkh i|yd úia;rd;aul m¾fhaIKhla isÿ lf<ñ'",
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
      role: 'bÈßmi ixj¾Ol" iudc udOH l,ukdlrKh',
      description: "jHdmD;sfha bÈßmi ixj¾Okhg odhl;ajh ,ndfoñka  jHdlrK mÍlaIl iy m%;spdr msgq ixj¾Okh lf<ñ' jHdmD;sfha iudc udOH msgq ks¾udKh iy l<ukdlrKh lr m%pdrl yd iïnkaO;d jevms<sfj<g iyh ÿkafkñ'",
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
      role: 'mQ¾K ixj¾Ol" w;=reuqyqK;a ks¾udml',
      description: "bÈßmi ixj¾Okh lsÍfï§ iudk mo jHdlrK Í;s iy mo iuQyh msgq ks¾udKh iy f.dvke.Su isÿ lf<ñ' meyeÈ,s yd m%fõYuh úfYaIdx. yryd jHdmD;sfha wOHdmksl jákdlu iy mßYS,l w;aoelSu jeä ÈhqKq lsÍug iyh ÿkafkñ'",
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
      role: 'NdId o;a; iïmdol',
      description: 'isxy, NdIdj wOHhkh lrñka mo iuQyh úfYaIdx.h i|yd iudk mo" úreoaO mo iy hq., mo tl;= lsÍu isÿ lrñka" wOHdmksl wka;¾.;hg odhl ù fuj,fï NdId iyh j¾Okh lsÍug Woõ lf<ñ',
      image: Akalanka,
      socialLinks: {
        instagram: 'https://www.instagram.com/_akalanka_wihangana?igsh=YmJuZTFrNnprYjl3&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/akalanka-wihangana-447129340/',
        github: 'https://github.com/akalankawihangana'
      }
    }
  ];