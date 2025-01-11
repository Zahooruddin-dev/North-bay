import { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  // deaclaring a state to change between mobile and desktop viewport

  const [isMobilemenuOpen, setisMobilemenuOpen] = useState(false);

  //   now creating a toggle to get know thw state

  const toggleMobileMenu = () => {
    setisMobilemenuOpen(!isMobilemenuOpen);
  };

  //   for smooth scrooling

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setisMobilemenuOpen(false);
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full  flex-col items-center justify-center">
      <div className="flex justify-between items-center  backdrop-blur-3xl p-4 overflow-y-hidden  lg:m-2 lg:w-[50rem]  lg:shadow-lg w-[95%] rounded-full">
        <img src={logo} alt="" width={84} height={22} />

        <div className="hidden lg:flex space-x-6">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 pl-[.6rem] border-neutral-300/20" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobilemenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobilemenuOpen && (
        <div className=" h-screen backdrop-blur-lg lg:hidden mt-5 w-[95%] mx-auto rounded-lg">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`${link.targetId}`}
              className="block p-4 uppercase tracking-tighter"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
