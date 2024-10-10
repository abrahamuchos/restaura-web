import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../assets/constants/index.jsx"

import logo from "../assets/img/logo.png"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(/**@type{boolean} */ false);

  /**
   * Toggles the mobile menu open and closed.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  /**
   * Scrolls to the target element with the given id.
   * @param {MouseEvent<HTMLAnchorElement>} event
   * @param {string} targetId
   */
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className='fixed top-0 z-50 w-full flex flex-col justify-center items-center lg:top-4'>
      <div className="flex w-full justify-around items-center overflow-hidden p-4 backdrop-blur-lg
        lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg
        xl:w-[60rem]"
      >

        <img src={logo} alt="resturant-logo" className='w-[100px] h-[22px] mr-[5rem]'/>
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a key={link.targetId}
               href={`#${link.targetId}`}
               className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : "" } hover:opacity-50`}
               onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link) => (
            <a key={link.targetId}
               href={`#${link.targetId}`}
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
}