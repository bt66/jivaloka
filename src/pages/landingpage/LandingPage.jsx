import React from "react";
import "./landingpage.css";
import Slider from "../../components/Slider.jsx";

// asset
import bgVideo from "../../assets/videos/bg.mp4";
import mgl1 from "../../assets/image/smkn2one.png";
import iconjvlk from "../../assets/image/iconjvlk.png";
import bgLP from "../../assets/image/ornamen.png";
import floo from "../../assets/image/vdvr.png";
import cyberMantra from "../../assets/image/cybermantra.svg";
import ue1 from "../../assets/image/ue.svg";
import katVr from "../../assets/image/katvr.svg";
import mejik1 from "../../assets/image/mejik.svg";
import katvrvideo from "../../assets/videos/katVRexprerience.mp4"
// import logoJivaloka from "../../assets/image/jivalokalogo.svg";

//component
import Header from "../../components/header/Header";

// import Footer from "../../components/footer/Footer";
// import Slider from "../../components/Slider";
// const imgMyimageexample = require("../../assets/image/bgLP.svg");

// const divStyle = {
//   width: "100%",
//   height: "full",
//   backgroundImage: `url(${imgMyimageexample})`,
//   backgroundSize: "cover",
// };

const LandingPage = () => {
  return (
    <div className="flex flex-col w-[100vw] h-auto min-h-[500vh] items-center">
      <Header />
      <video
        autoPlay={true}
        loop
        muted
        src={bgVideo}
        type="video/mp4"
        class="video-bg"
      />

      <div className="flex w-[50%] text-white z-0 mt-[18rem]">
        <div className="flex flex-col gap-9 items-center">
          <h1 className="text-4xl font-semibold">WELCOME TO JIVALOKA</h1>
          <p>
            Welcome to our digital twins company, where we specialize in
            creating hyper-realistic virtual replicas of physical objects and
            systems. Our cutting-edge technology allows us to capture, analyze,
            and simulate real-world data in order to create digital twins that
            accurately reflect their physical counterparts. Our digital twins
            have numerous applications, from predictive maintenance and
            performance optimization to virtual testing and training. Partner
            with us to unlock the potential of digital twins and revolutionize
            your business.
          </p>
          <button className="rounded-full font-medium border-2 px-6 py-2 mt-4 w-[20%]">
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-col w-[100%] gap-[4rem] items-center mt-[70vh] text-white">
        <h2 className="text-3xl font-semibold z-0">Our Product</h2>

        <div className="flex flex-row gap-[7rem] w-[100%] px-[9rem] z-0">
          <div className=" w-[55%]">
            <img src={mgl1} alt="" className="rounded-3xl bg-cover" />
            <img
              src={iconjvlk}
              alt=""
              className="w-[6rem] mt-[-15rem] ml-[41%] "
            />
            <p className="mt-[12rem] pr-[20rem] text-lg">
              You can try it on multiple platform PC or Mobile Apps. Available
              on our official website
            </p>
          </div>

          <div className="w-[45%] px-14">
            <div className="flex flex-col gap-6 items-start bg-black rounded-2xl py-14 px-14">
              <h2 className="text-3xl font-medium">Jivaloka Pendopo</h2>
              <p className="text-lg">
              Twin world developers created immersive virtual environtments for socializing,
               gaming, and commerce specialize in niche or unique virtual spaces.
              </p>
              <button className="rounded-full border-2 px-6 py-2 mt-4">
                Play Now
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-[8rem] z-0">Latest Project</h2>

        <div className="w-[98%] h-full z-0">

        <Slider />

        </div>

        <div className="w-[95%] h-2 bg-white z-0 "></div>

        <h2 className="text-3xl font-semibold mt-[8rem] z-0 mt-80">Latest Work</h2>

        <div
          className=" w-[100%] h-full z-0 "
          // style={{ backgroundImage: `url(${bgLP})` }}
        >
          <div className="flex justify-end">
          <img src={bgLP} alt="" />
          </div>
          <div className="flex flex-row px-[10rem] justify-around mt-[-50rem]">
          <video
        autoPlay={true}
        loop
        muted
        src={katvrvideo}
        type="video/mp4"
        style={{ width: '725px', height: '680px'}}
      />
            <div className="flex flex-col gap-6 w-[30%]">
              <h2 className="text-3xl font-semibold mt-[8rem] z-0">
                KAT VR Experience
              </h2>
              <p className="text-lg">
                Introducing Kat VR, the ultimate destination for immersive
                virtual reality experiences. Our state-of-the-art technology
                allows you to explore new worlds, interact with digital
                environments, and enhance your gaming experience like never
                before. With a wide range of products, including our flagship
                Kat Walk series, we offer intuitive and natural motion that will
                transport you to a new reality. Whether you're a gamer, an
                athlete, or an adventurer, Kat VR is your go-to source for
                cutting-edge virtual reality technology.
              </p>
              {/* <button className="rounded-full border-2 px-6 py-2 mt-4 w-[50%]">
                More Info
              </button> */}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-[8rem] z-0">
          Our Partnership
        </h2>

        <div className="flex flex-row justify-evenly py-[7rem] bg-white z-0 w-[100%] h-full">
          <img src={cyberMantra} alt="" />
          <img src={ue1} alt="" />
          <img src={katVr} alt="" />
          <img src={mejik1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
