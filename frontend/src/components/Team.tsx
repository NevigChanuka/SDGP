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
    },
    {
      name: "Dinuka",
      role: "UI/UX Designer",
      img: pic06,
    },
    {
      name: "Supuni",
      role: "Front-End Developer",
      img: pic03,
    },
    {
      name: "Imandi",
      role: "Back-End Developer",
      img: pic04,
      
    },
    {
      name: "Kalana",
      role: "Project Manager",
      img: pic05,
      
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
