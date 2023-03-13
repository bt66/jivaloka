import React from "react";

// assets
import logoJivaloka from "../../assets/image/jivalokalogo.svg";

// icons
import { RiHome4Line, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-[100%] h-full bg-[#1C1625] text-white gap-6 px-[5rem] py-[4rem]">
        <div className="flex flex-row justify-between gap-14 w-full">
          <div className="flex flex-col gap-3 w-2/6">
            <img
              src={logoJivaloka}
              alt="jivaloka"
              className="lg:w-[9rem] xs:w-[7rem]"
            />
            <p className="text-base">
              Twin world developers created <br /> immersive virtual
              environtment for <br />
              socializing, gaming, and commerce <br /> specialize in niche or
              unique virtual <br /> space
            </p>
          </div>

          <div className="flex flex-col gap-3 w-2/6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="flex flex-col gap-1 text-sm">
              <span>
                Jl. Prof. Herman Yohanes No.54 A, Samirono, <br /> Caturtunggal,
                Kec. Depok, Kabupaten <br /> Sleman, Daerah Istimewa Yogyakarta
                55223
              </span>
              <p>jivalokameta@gmail.com</p>
              <p>Tel: 0274-8609836</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-1/6">
            <h3 className="text-xl font-semibold">Quick Menu</h3>
            <ul className="text-sm">
              <li>Games</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 w-1/6">
            <h3 className="text-xl font-semibold">Socials</h3>
            <ul className="text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twiter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-lg text-[#979797]">
          ©Copyright © 2023 Jivaloka.All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
