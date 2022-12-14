import React from "react";
// import { useState } from "react";
import "./OurTeam.css";
import "../AboutUs/About.css";
import Layout1 from "../OurTeam/Layout1";
import Layout2 from "../OurTeam/Layout2";
import team from "../../images/OurTeam/team-icon.png";
import nicole from "../../images/Enroll/nicole.jpg";
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
import kebra from '../../images/OurTeam/kebra.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import NavBar from "../../ui/Navbar/Navbar";
import env from "../../images/Landing/env.jpg"
import env2 from "../../images/Landing/env2.jpg"

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
          navigation={false}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="admission-swiper-container"
        >
          <SwiperSlide>
            <div className="swiper-images">
              <img src={env2} alt="" />
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="swiper-images">
              <img src={slide1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-images">
              <img src={env} alt="" />
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
          <a href="/#">
            {" "}
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="about-video-details-logo2">
          <a href="/about#">ABOUT US</a>
        </div>
        <div className="about-video-details-logo3">
          <a href="/blog#">BLOG</a>
        </div>
        <div className="about-video-details-logo4">
          <a href="/admission#">ADMISSION</a>
        </div>
        <div className="about-video-details-logo5">
          <a href="/team#">OUR TEAM</a>
        </div>
        <div className="about-video-details-logo6">
          <a href="/contact#">CONTACT</a>
        </div>
        <div className="about-video-details-logo7">
          <a href="/login">
            {" "}
            <img src={search} alt="" />
          </a>
        </div>
      </div>

      <div className='about-responsive-div'>
        <NavBar />
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
            <a href="#ourteam">Details</a>
          </div>
        </div>
      </div>
      <section id="ourteam" className="text-center">
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
        <Layout1 />
      </div>
      <div>
        <h2 className="team-titles">Assistance</h2>
        <Layout2 />
      </div>
      <div className="team-wrapper">
        <div className="team-card card-body ">
          <img className="team-card-img img-fluid" src={kebra} alt="" />
          <div className="team-card__body">
            <h4 className="team-card__title">Nicole Kebra Munyaburanga</h4>
            <h5>0786207426</h5>
            <h6>Receptionist</h6>
            <p className="team-card__description"></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OurTeam;
