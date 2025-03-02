import React from "react";
import Logo from "../assets/logo.png";

interface MenuLink {
  id: number;
  name: string;
  link: string;
}

const MenuLinks: MenuLink[] = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "FAQ",
    link: "/#faq",
  },
  {
    id: 3,
    name: "FeedBack",
    link: "/#feedback",
  },

  {
    id: 4,
    name: "Settings",
    link: "/#settings",
  },
 
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-45" />
              
            </a>
          </div>

          {/* NavLinks Section */}
          <div>
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="cursor-pointer py-4">
                  <a
                    href={link}
                    className="text-lg font-medium 
                               hover:text-primary py-2 
                               hover:border-b-2 
                               hover:border-primary
                               transition-all duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
