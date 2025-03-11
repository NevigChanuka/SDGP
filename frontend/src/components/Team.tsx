import './Team.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import pic01 from "../assets/Navig.jpg";
import pic03 from "../assets/Supuni.jpg";
import pic04 from "../assets/Imandi.jpg";
import pic05 from "../assets/Kalana.jpg";
import pic06 from "../assets/Dinuka.jpg";
import pic07 from "../assets/Akalanka.jpg";


const Team:React.FC = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <h4>Our Team Section</h4>
        </div>

        <div className="card_Container">
  {[
    {
      name: "Nevig",
      role: "Web Analyst",
      img: pic01,
      instagram: "",
      github: "https://github.com/NevigChanuka",
      linkedin: "",
    },
    {
      name: "Dinuka",
      role: "UI/UX Designer",
      img: pic06,
      instagram: "https://www.instagram.com/dinu_viraji._/",
      github: " https://github.com/dinukaviraji ",
      linkedin: "https://www.linkedin.com/in/dinuka-viraji-521356278/ ",
    },
    {
      name: "Supuni",
      role: "Front-End Developer",
      img: pic03,
      instagram: "https://instagram.com/supuni_profile",
      github: "https://github.com/supuni_profile",
      linkedin: "https://linkedin.com/in/supuni_profile",
    },
    {
      name: "Imandi",
      role: "Back-End Developer",
      img: pic04,
      instagram: " https://www.instagram.com/ima.kik/ ",
      github: "https://github.com/imandikavithma",
      linkedin: "https://www.linkedin.com/in/imandi-kavithma-7bba24294",
    },
    {
      name: "Kalana",
      role: "Project Manager",
      img: pic05,
      instagram: "https://www.instagram.com/kalana_1061?igsh=MWc5b2hoMDVodGlvdg==",
      github: "https://github.com/Kalana232491/",
      linkedin: "https://linkedin.com/in/kalana_profile",
    },
    {
      name: "Akalanka",
      role: "Software Engineer",
      img: pic07,
      instagram: "https://www.instagram.com/_akalanka_wihangana/",
      github: "https://github.com/akalankawihangana",
      linkedin: "https://www.linkedin.com/in/akalanka-wihangana-447129340/",
    },
  ].map((member, index) => (
    <div className="card" key={index}>
      <div className="imbBx">
        <img src={member.img} alt={member.name} />
      </div>
      
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Team;
