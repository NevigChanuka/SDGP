import { CheckCircle } from "lucide-react"; // Import the CheckCircle icon from lucide-react
import { ArrowRight } from "lucide-react"; // Import the ArrowRight icon from lucide-react
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Define the AboutSection component
const AboutSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing

  return (
    // Main container for the About section
    <div className="py-12 px-6 md:px-16 text-justify">
      {/* Inner container with a maximum width */}
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <h2 className="font-sandaru text-3xl font-bold mb-4 mt-30"> zjHdlrKZ .ek"</h2>
        
        {/* Paragraph describing the section */}
        <p className="font-CCWelikala text-2xl mb-4">
          wmf.a b,lalh jkafka isxy, NdIdj bf.k.kakd" W.kakkd" Ndú;dlrkd ish¨ fokdgu jHdlrK fodaI j,ska f;dr ksjerÈ ,sùula" jHdlrK Í;s ms&lt;sn| ukd wjfndaOhla ,nd.ekSug hï rel=&lt;la ùuhs'
        </p>
        
        {/* Subheading */}
        <p className="font-CCWelikala text-xl mb-4">jHdlrK ;=&lt;ska Tng"</p>
        
        {/* List of features or points */}
        <ul>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" /> {/* CheckCircle icon */}
            ksjerÈ jHdlrK iys; ,sùula
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            iudk mo úl,am Ndú;fhka wjia:djg WÑ; ,sùula
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            jHdlrK Í;s ms&lt;sn| ukd oekqula
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            iudk mo
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            úreoaO mo
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            hq., mo
          </li>
          <li className="font-CCWelikala text-xl flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            m%ia:dj msre¿
          </li>
        </ul>
        
        {/* Closing paragraph */}
        <p className="font-CCWelikala text-xl mt-2">,nd .ekSug yelshdj ,efí'</p>

        {/* Button to navigate to the grammar checker page */}
        <div
          className="flex justify-center items-center m-10 absolute w-65 h-12 rounded-full cursor-pointer border-4 border-[#0d8065] hover:scale-110 transition duration-400 hover:bg-[#0d8065] hover:text-white"
          onClick={() => navigate('/grammar-checker')} // Navigate to the grammar checker page on click
        >
          {/* Button text */}
          <span className="font-sandaru text-2xl">Ndú;d lr n,kak</span>
          {/* ArrowRight icon */}
          <ArrowRight className="w-8 h-7 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection; // Export the AboutSection component