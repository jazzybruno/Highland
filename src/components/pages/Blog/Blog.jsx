import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Gallery from "../Blog/Gallery";
import Navbar from "../../ui/Navbar/Navbar"
import { Link } from "react-router-dom";
import tiltle from '../../images/About/title.svg'
import Outline from "../Blog/Outline";
import logo from "../../images/Landing/logo.svg";
import search from "../../images/Landing/bx_search.svg";
import slide1 from "../../images/Admission/admit.jpg";
import slide2 from "../../images/Admission/slide2.jpg";
import slide3 from "../../images/Admission/slide3.jpg";
import slide4 from "../../images/Admission/slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Highlights from "../../ui/Highlights/Highlights";





function Blog() {
  return (
    <div className="blog-container">
      <div className="landing">
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
            <Navbar />
        </div>

        <div className="about-videos-navigate-container1">
          <div className="about-video-navigate">
            <div className="about-videos-navigate-title">
              <h3> BLOG </h3>
            </div>
            <div className="about-videos-navigate-description">
               <span>HIGHLAND's News and Events</span>
            </div>
            <div className="about-video-navigate-link">
              <a href="#blog">Details</a>

            </div>
          </div>
        </div>

      </div>


      <section id="blog">
        <div className="contanier">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text">Our Blog</div>
              </div>
              <div className="underline mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <Outline />
      <Outline />
      <Outline />

      <section>
        <div>
          <div>
            <div className="text-center">
              <div className="underline mx-auto"></div>
            </div>
          </div>
        </div>
        <Gallery />
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
