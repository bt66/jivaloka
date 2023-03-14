import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// assets
import img0 from "../assets/image/jivalokaPendopo.png";
import img1 from "../assets/image/LitedexProtocol.png";
import img2 from "../assets/image/SmkN1Cibinong.png";
import img3 from "../assets/image/SmkN2Magelang.png";
import img4 from "../assets/image/Ballin.png";

function Slider() {
  return (
    <div className="flex bg-cover text-white items-center w-full h-full">
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="flex items-center justify-center mySwiper"
        
      >
        <SwiperSlide className="card w-96 bg-base-100 shadow-xl min-h-[40rem] bg-opacity-50">
          <figure className="px-10 pt-10"><img src={img0} alt="JIVALOKA PENDOPO" className="rounded-xl" /></figure>
            <div className="card-body">
              <h2 className="card-title">JIVALOKA PENDOPO</h2>
              <p>
              Twin world developers created immersive virtual environtments for socializing, gaming, and commerce specialize in niche or unique virtual spaces.
              </p>
              <div className="card-action justify-end">
                <button className="btn btn-primary bg-opacity-0">Play Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card w-96 bg-base-100 shadow-xl min-h-[40rem] bg-opacity-50">
          <figure className="px-10 pt-10"><img src={img1} alt="LITEDEX PROTOCOL" className="rounded-xl" /></figure>
            <div className="card-body">
              <h2 className="card-title">LITEDEX PROTOCOL</h2>
              <p>
              Litedex Protocol is the first Decentralized Exchange Platform in Indonesia that carries the concept of Meta Finance. The Litedex protocol with a homepage develops various projects that are investor favorites, such as Staking, Farming, Swap, Pool, Lending, Borrowing, NFT Marketplace, and Bridge features.
              </p>
              <div className="card-action justify-end">
                <button className="btn btn-primary bg-opacity-0">Play Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card w-96 bg-base-100 shadow-xl min-h-[40rem] bg-opacity-50">
          <figure className="px-10 pt-10"><img src={img2} alt="DIGITAL TWINS SMK N 1 CIBINONG " className="rounded-xl" /></figure>
            <div className="card-body">
              <h2 className="card-title">DIGITAL TWINS SMK N 1 CIBINONG</h2>
              <p>
              SMK N 1 Cibinong is an exceptional vocational school located in the heart of Indonesia. Our institution is dedicated to providing high-quality education and training to our students, preparing them for successful careers in their chosen fields. 
              </p>
              <div className="card-action justify-end">
                <button className="btn btn-primary bg-opacity-0">Play Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card w-96 bg-base-100 shadow-xl min-h-[40rem] bg-opacity-50">
          <figure className="px-10 pt-10"><img src={img3} alt="DIGITAL TWINS SMK N 2 MAGELANG " className="rounded-xl" /></figure>
            <div className="card-body">
              <h2 className="card-title">DIGITAL TWINS SMK N 2 MAGELANG </h2>
              <p>
              SMK  N 2 Magelang is an exceptional vocational school located in the heart of Indonesia. Our institution is dedicated to providing high-quality education and training to our students, preparing them for successful careers in their chosen fields. 
              </p>
              <div className="card-action justify-end">
                <button className="btn btn-primary bg-opacity-0">Play Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card w-96 bg-base-100 shadow-xl min-h-[40rem] bg-opacity-50">
          <figure className="px-10 pt-10"><img src={img4} alt="BALLIN" className="rounded-xl" /></figure>
            <div className="card-body">
              <h2 className="card-title">BALLIN </h2>
              <p>
              Ballin was a young game developer who had just joined the team at BVA, a renowned game development studio. He was assigned to work on the first project, which involved creating a multiplayer game using Unreal Engine. The project had a tight deadline of one month,
              </p>
              <div className="card-action justify-end">
                <button className="btn btn-primary bg-opacity-0">Play Now</button>
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img1} alt="Litedex Protocol" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Smk N 1 Cibinong" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Smk N 2 Magelang" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Ballin" />
        </SwiperSlide> */}
      </Swiper>
    </>
    {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="flex items-center justify-center"
      >
        <SwiperSlide>
          <img src={img1} alt="smkn2mgl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="smkn2mgl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="smkn2mgl" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default Slider;
