import React from 'react';
import Facebook from "../assets/facebook_logo.png";
import Instagram from "../assets/insta_logo.png";
import LinkedIn from "../assets/linkedin_logo.png";
import Logo from "../assets/logo-removebg.png";



interface FooterLink {
    name: string;
    link: string;
    }

interface FooterSocial extends FooterLink {
    icon: string;
    }
    
const FooterCompany: FooterLink[] = [
    { name: "About", link: "#" },

    { name: "Team", link: "#" },
    ];

const FooterFeatures: FooterLink[] = [
    { name: "Grammar Checker", link: "#" },
    ];

const FooterServices: FooterLink[] = [
    { name: "Feedback", link: "#" },
    { name: "FAQs", link: "#" },
    ];

const FooterSocials: FooterSocial[] = [
    { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61573618317072", icon: Facebook },
    { name: "Instagram", link: "https://www.instagram.com/vyakarana.site/", icon: Instagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105934369/admin/dashboard/", icon: LinkedIn },
    ];



export const Footer: React.FC = () => {
  return (
    <footer>
        <div className="bg-green-500 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-1">
                <div className="grid md:grid-cols-3 py-1">
                    <div className="py-1 px-1">
                    

                        <br/>
                        {/* Grammar Checker Logo */}
                        <img src={Logo} alt="logo" className="w-40 h-20 flex flex-col items-center" />
                        <p className="py-1"><b>Sinhala Grammar Checker</b></p>
                        
                    </div>
                
    

                    {/*Link section*/}

                    <div className="flex flex-row gap-25 md:gap-15">
                        {/* First col */}
                        <div className="py-6 px-1">
                            
                            <h1 className="text-xl font-bold mb-3">Company</h1>
                                <ul className="space-y-3">
                                    {FooterCompany.map((link) => (
                                    <li
                                        key={link.name}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-green-200"
                                    >
                                        <span>{link.name}</span>
                                    </li>
                                    ))}
                                </ul>
                        </div>
                    

                    
                        {/* Second col */}
                        <div className="py-6 px-1">
                            <h1 className="text-xl font-bold mb-3">Features</h1>
                            <ul className="space-y-3">
                                {FooterFeatures.map((link) => (
                                <li
                                    key={link.name}
                                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-green-200"
                                >
                                    <span>{link.name}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    

                    
                        {/* Third col */}
                        <div className="py-6 px-1">
                            <h1 className="text-xl font-bold mb-3">Services</h1>
                            <ul className="space-y-3">
                                {FooterServices.map((link) => (
                                <li
                                    key={link.name}
                                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-green-200"
                                >
                                    <span>{link.name}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social Handles */}
                    <div className="py-6 px-30">
                        <h1 className="sm:text-2xl font-semibold sm:text-left text-justify mb-3 gap-3  text-black">
                            Get to Know Us
                        </h1>

                        <div className="flex items-center gap-12 mt-6">
                            {FooterSocials.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
                                <img src={social.icon} alt={social.name} className="w-6 h-6 hover:text-primary duration-300" />
                            </a>
                            ))}
                           
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <p className="py-6 px-150 mt-1 text-green-200 text-sm items-center">
                Copyright © 2025 Design by <span className="font-bold">Vyakarana Team</span>
            </p>
        
        </div>
    </footer>    
  )
}

export default Footer