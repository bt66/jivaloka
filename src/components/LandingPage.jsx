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

        <div className="absolute flex flex-col gap-5 text-white  px-[6rem] mt-[15rem] ">
          <img src={logoJivaloka} className="flex w-[15rem] content-center" />

          <span className="font-semibold text-lg">
            Twin world developers created <br /> immersive virtual environtment
            for <br />
            socializing, gaming, and commerce <br /> specialize in niche or
            unique virtual <br /> space
          </span>

          <button
            type="button"
            className="text-2xl font-archivo border-2 w-[10rem] border-white rounded-md m-2"
          >
            contact
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[120vh] gap-[3rem]">
        <h2 className="font-semibold text-2xl">Our Partner</h2>

        <div className="flex flex-row items-center justify-center gap-5">
          <img src={cyberMantra} />

          <img src={ue1} />

          <img src={katVr} />

          <img src={mejik1} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-[20vh] py-12 bg-[#232323] text-white">
        <div className="flex flex-col items-center py-16 gap-5">
          <img src={logoJivaloka} />
          <p>
            contact:<span>mail.jivaloka.digital</span>
          </p>
        </div>

        <p className="text-lg text-[#979797]">
          ©Copyright © 2023 Jivaloka.All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
