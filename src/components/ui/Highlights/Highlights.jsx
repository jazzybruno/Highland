import React from "react";
import "./Highlights.css";
import slide1 from "../../images/Landing/swiper1.png";
import slide2 from "../../images/Landing/swiper2.png";
import slide3 from "../../images/Landing/swiper3.png";
import slide4 from "../../images/Landing/swiper4.png";
// import swiper1 from  '../../../images/Landing/bg1.jpg'
// import swiper2 from  '../../../images/Landing/bg2.png'
import swiper3 from "../../images/Landing/bg3.png";
import swiper4 from "../../images/Landing/bg4.jpg";
import swiper1 from "../../images/Landing/bg1.jpg";
import swiper2 from "../../images/Landing/bg2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import dots from "../../images/Landing/threedots.svg";
import tiltle from "../../images/About/title.svg";

function Highlights() {
  // const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: 'none' }}>
  //       <img
  //         style={{ width: '100%' }}
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }

  return (
    <div>
      <div className="second-details-title">
        <div className="second-details-title-img">
          {" "}
          <img src={tiltle} alt="" />
        </div>
        <div className="second-details-title-text"> Highlights </div>
      </div>
      <Swiper

        slidesPerView={1}
        effect
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="admission-swiper-container"
        
        breakpoints={{
         640: {
           slidesPerView: 2   ,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 30,
         },
         1024: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
       }}
      >
        <SwiperSlide>
          <div className="swiper-image">
            <img src={slide1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-image">
            <img src={slide2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-image">
            <img src={slide3} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-image">
            <img src={slide4} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img src={swiper1} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img src={swiper2} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img src={swiper3} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img src={swiper4} alt="" className="img-fluid" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* the image swiper end  */}
    </div>
  );
}

export default Highlights;
