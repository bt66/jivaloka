import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 md:p-5 xs:p-2 w-[100vw] items-center text-white">
      {/* destop & table */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex w-full items-center justify-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-16"
          >
            <li
              className="text-base duration-100 hover:font-semibold
                    transition-all ease-in-out cursor-pointer"
            >
              About
            </li>
            <li
              className="text-base duration-100 hover:font-semibold
                    transition-all ease-in-out cursor-pointer"
            >
              Content
            </li>
            <li
              className="text-base duration-100 hover:font-semibold
                    transition-all ease-in-out cursor-pointer"
            >
              Prodact
            </li>
            <button className="absolute right-[4rem] font-archivo border-2 w-[10rem] h-[2.5rem] border-white rounded-md">
              Download Demo
            </button>
          </motion.ul>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden items-center justify-between w-full h-full">
        <div className="relative w-full ">
          <MdMenu
            className="text-3xl backdrop-blur-md absolute cursor-pointer right-0 rounded-full"
            onClick={() => setMenuOpen(true)}
          />
          {menuOpen && (
            <motion.div
              //   onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-2/4 backdrop-blur-[2px] px-6 py-5 flex flex-col absolute top-12 right-0 rounded-md"
            >
              <ul className="flex flex-col gap-4 items-end ">
                <li
                  className="text-base duration-100 
                    transition-all ease-in-out cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </li>
                <li
                  className="text-base duration-100 
                    transition-all ease-in-out cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Content
                </li>
                <li
                  className="text-base duration-100 
                    transition-all ease-in-out cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Prodact
                </li>
                <button
                  className="text-sm font-archivo border-2 w-full h-[2rem] border-white rounded-md"
                  type="button"
                  onClick={() => setMenuOpen(false)}
                >
                  Download Demo
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
