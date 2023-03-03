import React from "react";
import "./landingpage.css";

// asset
import bgVideo from "../assets/videos/bg.mp4";
import logoJivaloka from "../assets/image/jivalokalogo.svg";
import cyberMantra from "../assets/image/cybermantra.svg";
import ue1 from "../assets/image/ue.svg";
import katVr from "../assets/image/katvr.svg";
import mejik1 from "../assets/image/mejik.svg";

// icons
import { RiWhatsappLine, RiHome4Line } from "react-icons/ri";

//component
import Header from "../components/Header";
// import Slider from "../components/Slider";

function LandingPage() {
  return (
    <div className="flex flex-col w-[100vw] h-auto min-h-[100vh]">
      {/* <Header /> */}
      <div>
        <video
          autoPlay={true}
          loop
          muted
          src={bgVideo}
          type="video/mp4"
          class="video-bg"
        />

        <div className="absolute flex flex-col lg:gap-5 xs:gap-1 text-white lg:px-[6rem] xs:px-[2rem] lg:top-[15rem] md:top-[6rem] xs:top-[2rem]">
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
            onclick="location.href='mailto:contact@jivaloka.digital"
            type="button"
            className="lg:text-2xl xs:text-sm font-archivo border-2 lg:w-[10rem] xs:w-[5rem] lg:h-[2.5rem] xs:h-[2rem] border-white rounded-md m-2 "
          >
            contact
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center lg:gap-[14rem] xs:gap-[5rem] lg:mt-[5rem] xs:mt-[2rem]">
        <div className="flex flex-col w-full h-full items-center lg:gap-[5rem] xs:gap-[2rem]">
          <h2 className="font-semibold lg:text-2xl md:text-lg xs:text-sm">
            Our Latest project
          </h2>
          <iframe
            className="md:w-[100%] xs:min-w-[450px] lg:h-[95vh] md:h-[71vh] xs:h-[250px] "
            title="Litedex bird view"
            src="https://nonton.carakan.id/videos/embed/4cccb9fd-dae5-4075-ba1e-97ca5dc9235b"
            frameborder="0"
            allowfullscreen=""
            sandbox="allow-same-origin allow-scripts allow-popups"
          />
        </div>

        <div className="flex md:flex-row xs:flex-col text-white lg:w-[85%] xs:w-[100%] bg-black h-[20%]">
          <div className="flex flex-col justify-between lg:p-11 xs:p-6 md:w-2/5 xs:w-full lg:h-[80vh] md:h-[55vh] xs:h-[30vh]">
            <div className="flex lg:flex-col xs:flex-row xs:gap-1">
              <p className="lg:text-2xl xs:text-base">Digital</p>
              <p className="lg:text-2xl xs:text-base">Twins</p>
              <p className="lg:text-2xl xs:text-base">Project</p>
            </div>
            <h2 className="lg:text-4xl xs:text-xl font-semibold">
              METAVERSE OF VOCATIONAL HIGH SCHOOL
            </h2>
            <p className="lg:text-lg xs:text-sm">
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
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:py-[8rem] xs:py-[3rem] lg:gap-[3rem] xs:gap-[1rem] w-full h-full">
        <h2 className="font-semibold lg:text-2xl md:text-lg xs:text-sm">
          Our Partner
        </h2>

        <div className="flex lg:flex-row xs:flex-wrap w-full h-full items-center justify-center lg:gap-7 xs:gap-5 p-3">
          <img
            src={cyberMantra}
            className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]"
          />

          <img src={ue1} className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]" />

          <img src={katVr} className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]" />

          <img src={mejik1} className="lg:w-[17rem] xs:w-[8rem] md:w-[10rem]" />
        </div>
      </div>

      <div className="flex flex-col w-full h-full items-center lg:py-10 xs:py-5 bg-[#232323] text-white">
        <div className="flex flex-col items-center lg:py-16 xs:py-10 gap-5">
          <img src={logoJivaloka} className="lg:w-[15rem] xs:w-[7rem]" />

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
}

export default LandingPage;
