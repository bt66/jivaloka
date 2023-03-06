import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// icons
import { MdMenu, MdClose } from "react-icons/md";
// import { click } from "@testing-library/user-event/dist/click";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 1 ? setnavColor("#232323") : setnavColor("transparent");
    window.scrollY > 1 ? setnavSize("3rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className="fixed z-50 lg:p-5 md:p-3 xs:p-2 w-[100vw] items-center text-white "
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      {/* destop & table */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex w-full items-center justify-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center lg:gap-16 md:gap-8"
          >
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li className="text-base duration-100 hover:font-semibold   transition-all ease-in-out cursor-pointer">
              Content
            </li>
            <li className="text-base duration-100 hover:font-semibold  transition-all ease-in-out cursor-pointer">
              Product
            </li>
            <button className="absolute lg:right-[4rem] md:right-[2rem] font-archivo border-2 w-[10rem] md:h-[2rem] border-white rounded-md">
              Download Demo
            </button>
          </motion.ul>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden  w-full h-full">
        <div className="relative w-full ">
          <div
            className="text-2xl  absolute cursor-pointer right-0 rounded-full"
            onClick={handleClick}
          >
            {menuOpen ? (
              <MdClose className="transition-all ease-in-out duration-300" />
            ) : (
              <MdMenu className="transition-all ease-in-out duration-300" />
            )}
          </div>

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
                  Content
                </li>
                <li
                  className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Product
                </li>
                <button
                  className="text-sm font-archivo text-end w-[70%] h-[2rem]"
                  type="button"
                  onClick={() => setMenuOpen(false)}
                >
                  <p className="text-sm duration-100  transition-all ease-in-out cursor-pointer border-b-2 border-white py-1">
                    Download Demo
                  </p>
                </button>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
