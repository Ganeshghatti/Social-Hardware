import React from "react";
import "./Footer.scss";
import logo from "../../../public/assets/images/logo.png";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Technology", id: "technology" },
    { name: "Features", id: "features" },
    { name: "FAQ", id: "faq" },
    { name: "Partnerships", id: "partnerships" },
  ];

  return (
    <footer className="px-[4%] flex justify-between items-center py-6">
      <img src={logo} alt="Eclipse Remote Systems" className="w-48" />
      <ul className="flex items-center justify-center gap-12 text-white hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-orange transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/company/social-hardware/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange transition-all duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/social_hardware"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange transition-all duration-300"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
    </footer>
  );
}
