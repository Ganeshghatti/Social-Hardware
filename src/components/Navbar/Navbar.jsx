import React from "react";
import logo from "../../../public/assets/images/logo.png";
import "./Navbar.scss";
import ButtonComponent from "../ButtonComponent";
import { TfiAlignRight } from "react-icons/tfi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center md:px-12 px-4">
      <img src={logo} alt="logo" className="w-36 h-4 md:w-64 md:h-9 object-contain" />
      <ul className="flex items-center justify-center gap-12 text-white hidden md:flex">
        <li className="hover:text-orange transition-all duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-orange transition-all duration-300 cursor-pointer">
          Technology
        </li>
        <li className="hover:text-orange transition-all duration-300 cursor-pointer">
          Features
        </li>
        <li className="hover:text-orange transition-all duration-300 cursor-pointer">
          FAQ
        </li>
        <li className="hover:text-orange transition-all duration-300 cursor-pointer">
          Partnerships
        </li>
      </ul>
      <ButtonComponent
        text={"Contact"}
        link={"#Contact"}
        styles={"hidden md:flex"}
      />
      <div className="md:hidden">
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
              className="menu-gradient absolute top-0 right-0 w-screen  h-screen z-1"
              onClick={toggleMenu}
            ></div>
            <div className="absolute top-0 right-0 w-[80vw] h-screen flex flex-col z-10 items-center justify-center gap-32 bg-black">
              <ul className="flex flex-col items-center justify-center gap-10">
                <li className="text-white hover:text-orange transition-all duration-300 cursor-pointer">
                  Home
                </li>
                <li className="text-white hover:text-orange transition-all duration-300 cursor-pointer">
                  Technology
                </li>
                <li className="text-white hover:text-orange transition-all duration-300 cursor-pointer">
                  Features
                </li>
                <li className="text-white hover:text-orange transition-all duration-300 cursor-pointer">
                  FAQ
                </li>
                <li className="text-white hover:text-orange transition-all duration-300 cursor-pointer">
                  Partnerships
                </li>
              </ul>
              <ButtonComponent
                text={"Contact"}
                link={"#Contact"}
                styles={"md:hidden flex"}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
