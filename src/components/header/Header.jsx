import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// icons
import { MdMenu, MdClose } from "react-icons/md";

// assets
import logoJivaloka from "../../assets/image/jivalokalogo.svg";

// import { click } from "@testing-library/user-event/dist/click";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const [navSize, setnavSize] = useState("5rem");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("2rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className="absolute z-50  w-[100vw] items-center text-white "
      style={{
        height: navSize,
        transition: "all 0.5s",
      }}
    >
      {/* destop & table */}
      <div className="hidden md:flex w-full h-full ">
        <motion.div
          className="flex w-full items-center justify-around"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
        >
          <img src={logoJivaloka} className="w-[8rem]" alt="logojivaloka" />
          <ul className="flex items-center  gap-6">
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li className="text-base duration-100 hover:font-semibold   transition-all ease-in-out cursor-pointer">
              Product
            </li>
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              Project
            </li>
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              Gallery
            </li>
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              Partner
            </li>
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>
        </motion.div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden  w-full h-full">
        <div className="relative w-full ">
          <motion.div
            className="rectangle text-2xl absolute cursor-pointer right-3 top-1 rounded-full"
            viewBox="0 0 100 100"
            onClick={handleClick}
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </motion.div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              className="w-4/5 bg-[#232323] px-6 py-5 flex flex-col absolute top-11 right-0 rounded-md"
            >
              <ul className="flex flex-col gap-4 items-end w-full">
                <li
                  className="text-sm duration-100 transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </li>
                <li
                  className="text-sm duration-100 transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Product
                </li>
                <li
                  className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Project
                </li>
                <li
                  className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </li>
                <li
                  className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Partner
                </li>
                <li
                  className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
