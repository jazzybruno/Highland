import React from "react";
// import { useState } from "react";
import "../OurTeam/OurTeam.css";
import "../AboutUs/About.css";
import Layout from "../OurTeam/Layout";
import team from "../../images/OurTeam/team-icon.png";
import logo from "../../images/Landing/logo.svg";
import search from "../../images/Landing/bx_search.svg";
import slide1 from "../../images/Admission/admit.jpg";
import slide2 from "../../images/Admission/slide2.jpg";
import slide3 from "../../images/Admission/slide3.jpg";
import slide4 from "../../images/Admission/slide4.jpg";
import Footer from "../../ui/Footer/Footer";
import Header from "../../ui/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function OurTeam() {
  return (
    <div>
      <Header />
      <div className="orientation1"></div>
      <div className="admission-container">
        {/* the image swiper start  */}
        <Swiper
          slidesPerView={1}
          effect
          // spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="admission-swiper-container"
        >
          <SwiperSlide>
            <div className="swiper-images">
              <img src={slide1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-images">
              <img src={slide2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-images">
              <img src={slide3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-images">
              <img src={slide4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* the image swiper end  */}
      </div>
      {/* the contents on the swiper start/ */}
      <div className="about-video-details1">
        <div className="about-video-details-logo1">
          <a href="#">
            {" "}
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="about-video-details-logo2">
          <a href="#">ABOUT US</a>
        </div>
        <div className="about-video-details-logo3">
          <a href="#">BLOG</a>
        </div>
        <div className="about-video-details-logo4">
          <a href="#">ADMISSION</a>
        </div>
        <div className="about-video-details-logo5">
          <a href="#">OUR TEAM</a>
        </div>
        <div className="about-video-details-logo6">
          <a href="#">CONTACT</a>
        </div>
        <div className="about-video-details-logo7">
          <a href="#">
            {" "}
            <img src={search} alt="" />
          </a>
        </div>
      </div>

      <div className="about-videos-navigate-container1">
        <div className="about-video-navigate">
          <div className="about-videos-navigate-title">
            <h3> OUR TEAM </h3>
          </div>
          <div className="about-videos-navigate-description">
           Highland's Teams Members
          </div>
          <div className="about-video-navigate-link">
            <a href="#admission">Details</a>
          </div>
        </div>
      </div>
      <section className="text-center">
        <div className="svg">
          <img src={team} alt="team" className="blog-team-icon" />
          <h6 className=" team-title text-grey fw-light">HIGHLAND SCHOOL</h6>
        </div>
        <h2>Our Team</h2>
        <p className="text center">
          The dedicated teachers, classroom assistants and administration staff
          work tirelessly to provide a professional level of education to the
          pupils. They are supported by hygiene assistants and maintenance
          staff.
        </p>
      </section>
      <div>
        <h2 className="team-titles">Leadership</h2>
        <Layout />
      </div>
      <div>
        <h2 className="team-titles">Assistance</h2>
        <Layout />
      </div>
      <section className="container">
        <div className="image-container w-25 mr-4">
          <img src={slide4} alt="" className="img-fluid mb-4 pb-2 " />
        </div>
        <div className="">
          <h4>Edward Munyaburanga</h4>
          <h4>0788237817</h4>
          <h6>Principal</h6>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OurTeam;
