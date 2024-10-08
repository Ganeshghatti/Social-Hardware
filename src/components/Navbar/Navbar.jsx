import React from "react";
import logo from "../../../public/assets/images/logo.png";
import "./Navbar.scss";
import ButtonComponentv1 from "../ButtonComponentv1";
import { TfiAlignRight } from "react-icons/tfi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { name: "Technology", id: "technology" },
    { name: "Tech Demo", id: "video" },
    { name: "Features", id: "features" },
    { name: "FAQ", id: "faq" },
    { name: "Partnerships", id: "partnerships" },
  ];

  return (
    <nav className="flex justify-between items-center lg:px-16 px-4 absolute top-0 left-0 w-full z-50">
      <img src={logo} alt="logo" className="w-44 h-6 lg:w-72 lg:h-11 object-contain" />
      <ul className="hidden lg:flex items-center justify-center gap-12 text-white absolute left-1/2 transform -translate-x-1/2">
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
      <ButtonComponentv1
        text={"Contact"}
        link={"contact"}
        styles={"hidden lg:flex"}
      />
      <div className="lg:hidden">
        {isOpen ? (
          <IoMdClose
            size={30}
            onClick={toggleMenu}
            className="cursor-pointer text-white hover:text-orange transition-all duration-300 z-50 relative"
          />
        ) : (
          <TfiAlignRight
            size={30}
            onClick={toggleMenu}
            className="cursor-pointer text-white hover:text-orange transition-all duration-300"
          />
        )}
        {isOpen && (
          <>
            <div
              className="menu-gradient fixed top-0 right-0 w-screen h-screen z-1"
              onClick={toggleMenu}
            ></div>
            <div className="fixed navbar-menu top-0 right-0 w-[80vw] h-screen flex flex-col z-10 items-center justify-center gap-32 bg-black">
              <ul className="flex flex-col items-center justify-center gap-10">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-white hover:text-orange transition-all duration-300 cursor-pointer"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <ButtonComponentv1
                text={"Contact"}
                link={"contact"}
                styles={"lg:hidden flex"}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
