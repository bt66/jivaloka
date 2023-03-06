import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// assets
import img1 from "../assets/image/smkn2one.png";
import img2 from "../assets/image/smkn2two.png";
import img3 from "../assets/image/smkn2tree.png";

function Slider() {
  return (
    <div className="flex bg-cover text-white items-center w-full h-full">
      <Swiper
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
      </Swiper>
    </div>
  );
}

export default Slider;
