import React from "react";
import Logo from "../assets/logo.png";
import ProfileDropdown from "./ProfileDropdown"; // Importing the dropdown menu

interface MenuLink {
  id: number;
  name: string;
  link: string;
}

const MenuLinks: MenuLink[] = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "FAQ", link: "/#faq" },
  { id: 3, name: "FeedBack", link: "/#feedback" },
  { id: 4, name: "Settings", link: "/#settings" },
];

const NavBar: React.FC = () => {
  return (
    <nav >
      <div className="container mx-auto py-3 px-6 flex justify-between items-center">
        {/* Logo Section (Left Side) */}
        <div>
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-30" />
          </a>
        </div>

        {/* Navigation Links (Center) */}
        <div>
          <ul className="flex items-center gap-8">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id} className="cursor-pointer py-4">
                <a
                  href={link}
                  className="text-lg font-medium text-black-800 dark:text-black-200 hover:text-green-500 py-2 hover:border-b-2 hover:border-green-500 transition-all duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Dropdown (Right Side) */}
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
