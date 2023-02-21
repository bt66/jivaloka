import React from "react";
import "./landingpage.css";

// asset
import bgVideo from "../assets/videos/bg.mp4";
import logoJivaloka from "../assets/image/jivalokalogo.svg";
import cyberMantra from "../assets/image/cybermantra.svg";
import ue1 from "../assets/image/ue.svg";
import katVr from "../assets/image/katvr.svg";
import mejik1 from "../assets/image/mejik.svg";

function LandingPage() {
  return (
    <div className="flex flex-col w-[100vw] h-auto min-h-[100vh]">
      <div>
        <video
          autoPlay={true}
          loop
          muted
          src={bgVideo}
          type="video/mp4"
          class="video-bg"
        />

        <div className="absolute flex flex-col lg:gap-5 xs:gap-1 text-white  lg:px-[6rem] xs:px-[2rem] lg:top-[15rem] md:top-[8rem] xs:top-[1rem]">
          <img
            src={logoJivaloka}
            className="flex lg:w-[15rem] md:w-[8rem] xs:w-[5rem] content-center"
          />

          <span className="font-semibold lg:text-lg md:text-sm xs:text-xs lg:w-[20rem] md:w-[10rem] xs:w-[10rem]">
            Twin world developers created immersive virtual environtment for
            socializing, gaming, and commerce specialize in niche or unique
            virtual space
          </span>

          <button
            type="button"
            className="lg:text-2xl xs:text-sm font-archivo border-2 lg:w-[10rem] xs:w-[5rem] border-white rounded-md m-2"
          >
            contact
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:py-[8rem] xs:py-[2rem] gap-[3rem] w-full h-full">
        <h2 className="font-semibold lg:text-2xl xs:text-lg">Our Partner</h2>

        <div className="flex lg:flex-row xs:flex-col w-full h-full items-center justify-center gap-5 ">
          <img
            src={cyberMantra}
            className="lg:w-[20rem] xs:w-[15rem] md:w-[15rem]"
          />

          <img src={ue1} className="lg:w-[20rem] xs:w-[15rem] md:w-[15rem]" />

          <img src={katVr} className="lg:w-[20rem] xs:w-[15rem] md:w-[15rem]" />

          <img
            src={mejik1}
            className="lg:w-[20rem] xs:w-[15rem] md:w-[15rem]"
          />
        </div>
      </div>

      <div className="flex flex-col  w-full h-full items-center  py-12 bg-[#232323] text-white">
        <div className="flex flex-col items-center py-16 gap-5">
          <img src={logoJivaloka} className="lg:w-[15rem] xs:w-[10rem]" />
          <p className="lg:text-base xs:text-xs">
            contact:
            <span className="lg:text-base xs:text-xs">
              mail.jivaloka.digital
            </span>
          </p>
        </div>

        <p className="lg:text-lg xs:text-sm text-[#979797]">
          ©Copyright © 2023 Jivaloka.All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
