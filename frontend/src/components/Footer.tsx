import React from "react";




const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Left - Brand Name */}
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold">YourBrand</h2>
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
              </div>
    
              {/* Center - Navigation Links */}
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Services</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
              </ul>
    
              {/* Right - Social Media Icons */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-facebook text-xl"></i></a>
                <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-twitter text-xl"></i></a>
                <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-instagram text-xl"></i></a>
              </div>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;




