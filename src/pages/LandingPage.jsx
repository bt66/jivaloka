import React from "react";
import "./landingpage.css";

// asset
import bgVideo from "../assets/videos/bg.mp4";
// import trailer from "../assets/videos/trailer1.mp4";

import logoJivaloka from "../assets/image/jivalokalogo.svg";
import cyberMantra from "../assets/image/cybermantra.svg";
import ue1 from "../assets/image/ue.svg";
import katVr from "../assets/image/katvr.svg";
import mejik1 from "../assets/image/mejik.svg";

// icons
import { RiWhatsappLine, RiHome4Line } from "react-icons/ri";

//component
import Header from "../components/Header";
import Slider from "../components/Slider";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-[100vw] h-auto min-h-[100vh]">
      <Header />
      <div>
        <video
          autoPlay={true}
          loop
          muted
          src={bgVideo}
          type="video/mp4"
          class="video-bg"
        />

        <div className="absolute flex flex-col lg:gap-5 xs:gap-1 text-white lg:px-[6rem] xs:px-[2rem] lg:top-[15rem] md:top-[6rem] xs:top-[1rem]">
          <img
            src={logoJivaloka}
            alt="jivaloka"
            className="flex lg:w-[15rem] md:w-[8rem] xs:w-[5rem] content-center"
          />

          <span className="font-semibold lg:text-lg md:text-sm xs:text-xs lg:w-[20rem] md:w-[10rem] xs:w-[10rem]">
            Twin world developers created immersive virtual environtment for
            socializing, gaming, and commerce specialize in niche or unique
            virtual space
          </span>

          <a
            type="button"
            href="mailto:contact@jivaloka.digital"
            className="flex justify-center text-center lg:text-xl xs:text-sm font-archivo border-2 lg:w-[10rem] xs:w-[5rem] md:h-[2rem] xs:h-[2rem] border-white rounded-md m-2 "
          >
            <button>contact</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:gap-[14rem] xs:gap-[5rem] lg:mt-[5rem] xs:mt-[2rem]">
        <div className="flex flex-col w-full h-full items-center lg:gap-[5rem] xs:gap-[2rem]">
          <h2 className="font-semibold lg:text-2xl md:text-lg xs:text-sm">
            Our Latest project
          </h2>

          <iframe
            // autoPlay={true}
            title="Litedex Thrailer"
            className="md:w-[100%] xs:min-w-[100%] lg:h-[95vh] md:h-[71vh] xs:h-[250px] "
            src="https://nonton.carakan.id/videos/embed/3e909e14-c8f6-4f3f-baf1-e8170ae9cabf"
            frameborder="0"
            allowfullscreen="full"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>

        <div className="flex md:flex-row xs:flex-col text-white lg:max-w-[90%] xs:max-w-[100%] bg-black h-auto">
          <div className="flex flex-col justify-between lg:p-7 xs:p-4 md:w-4/12  xs:w-full md:h-auto xs:h-auto">
            <div className="flex lg:flex-col xs:flex-row xs:gap-1">
              <p className="lg:text-2xl xs:text-base">Digital</p>
              <p className="lg:text-2xl xs:text-base">Twins</p>
              <p className="lg:text-2xl xs:text-base">Project</p>
            </div>
            <h2 className="lg:text-4xl xs:text-lg font-semibold">
              METAVERSE OF VOCATIONAL HIGH SCHOOL
            </h2>
            <p className="lg:text-lg xs:text-xs">
              We start develop the
              <span className="font-semibold"> Digital Twins</span> building
              from
              <span className="font-semibold"> Vocational High School</span>, so
              they can doing
              <sapan className="font-semibold"> school learning</sapan> from
              this
              <sapan className="font-semibold"> metaverse</sapan>, they can play
              with voice chat, internet browser and with they have own character
              from <span className="font-semibold">metahuman</span>, also they
              have own <span className="font-semibold">digital wallet</span> too
              for transaction
            </p>
          </div>

          <div className="flex lg:w-9/12 md:w-4/6 xs:w-[100%] h-[100%] md:pr-7 md:py-7">
            <Slider />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:py-[8rem] xs:py-[3rem] lg:gap-[3rem] xs:gap-[1rem] w-full h-full">
        <h2 className="font-semibold lg:text-2xl md:text-lg xs:text-sm">
          Our Partner
        </h2>

        <div className="flex lg:flex-row xs:flex-wrap w-full h-full items-center justify-center lg:gap-7 xs:gap-5 p-3">
          <img
            src={cyberMantra}
            alt="cybermantra"
            className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]"
          />

          <img
            src={ue1}
            alt="unrealengine"
            className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]"
          />

          <img
            src={katVr}
            alt="katVR"
            className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]"
          />

          <img
            src={mejik1}
            alt="mejik"
            className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full items-center lg:py-10 xs:py-5 bg-[#232323] text-white">
        <div className="flex flex-col items-center lg:py-16 xs:py-10 gap-5">
          <img
            src={logoJivaloka}
            alt="jivaloka"
            className="lg:w-[15rem] xs:w-[7rem]"
          />

          <div className="flex flex-col items-center gap-2">
            <p className="lg:text-base xs:text-xs">Contact: </p>

            <div className="flex flex-col items-start lg:gap-1 xs:gap-0">
              <div className="flex items-center lg:gap-3 xs:gap-1">
                <RiHome4Line className="text-white lg:text-2xl xs:text-lg" />
                <span className="lg:text-base xs:text-xs">0274-8609836</span>
              </div>

              <div className="flex items-center lg:gap-3 xs:gap-1">
                <RiWhatsappLine className="text-white lg:text-2xl xs:text-lg" />
                <span className="lg:text-base xs:text-xs">
                  +62 821-3485-2429
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="lg:text-lg xs:text-xs text-[#979797]">
          ©Copyright © 2023 Jivaloka.All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
