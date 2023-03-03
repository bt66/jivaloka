import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-screen p-3 px-8 md:p-6 md:px-16 bg-white">
      {/* destop & table */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
            >
              About
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
            >
              Content
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
            >
              Prodact
            </li>
            <button>Download Demo</button>
          </motion.ul>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden xs:bg items-center justify-between w-full h-full">
        <div className="relative w-full">
          <MdMenu
            className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full"
            onClick={() => setMenuOpen(true)}
          />
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl flex flex-col rounded-lg absolute 
              top-12 right-0"
            >
              <ul className="flex flex-col px-4 ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
                >
                  About
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
                >
                  Content
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 
                    transition-all ease-in-out cursor-pointer"
                >
                  Prodact
                </li>
                <button>Download Demo</button>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
