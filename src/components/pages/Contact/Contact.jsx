import React from 'react'
import logo from '../../images/Landing/logo.svg';
import search from '../../images/Landing/bx_search.svg';
import './contact.css';
import slide1 from "../../images/Admission/admit.jpg"
import slide2 from "../../images/Admission/slide2.jpg"
import slide3 from "../../images/Admission/slide3.jpg"
import slide4 from "../../images/Admission/slide4.jpg"
import Header from '../../ui/Header/Header';
import Form from '../../ui/form/form';
import Footer from '../../ui/Footer/Footer';
import Cont from '../../ui/Cont/Cont'

import {Swiper , SwiperSlide} from 'swiper/react'
import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"


function Contact() {
  return (
    <div>
             <Header/>
             <div className="orientation1"></div>
            <div className="admission-container">
           
                {/* the image swiper start  */}
                  < Swiper 
                   slidesPerView={1}
                   effect
                   // spaceBetween={30}
                   loop={true}
                   pagination={{
                     clickable: true
                   }}
                     navigation={true}
                     autoplay={{delay: 2000, disableOnInteraction: false}}
                     
                     modules={[Pagination, Navigation , Autoplay , EffectFade]}
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
               <a href="/"> <img src={logo} alt="logo" /></a>
            </div>
            <div className="about-video-details-logo2">
                <a href="about">ABOUT US</a>
            </div>
            <div className="about-video-details-logo3">
            <a href="blog">BLOG</a>
            </div>
            <div className="about-video-details-logo4">
            <a href="admission">ADMISSION</a>
            </div>
            <div className="about-video-details-logo5">
            <a href="team">OUR TEAM</a></div>    
            <div className="about-video-details-logo6">
            <a href="contact">CONTACT</a>
            </div>
            <div className="about-video-details-logo7">
            <a href="#"> <img src={search} alt="" /></a>
            </div>
        </div>

       <div className="about-videos-navigate-container1">
       <div className="about-video-navigate">
            <div className="about-videos-navigate-title">
                <h3> CONTACT US </h3>
            </div>
            <div className="about-videos-navigate-description">Contact us for more information on <span>HIGHLAND</span>
</div>
            <div className="about-video-navigate-link">
                <a href="#contact">Details</a>
            </div>
        </div>
       </div>
   <section id='contact'>
      <Form />
       <Cont/>

       <Footer />

   </section>
       
    </div>
  )
}

export default Contact