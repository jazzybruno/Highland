import React from 'react';
import logo from '../../images/Landing/logo.svg';
import search from '../../images/Landing/bx_search.svg';
import './landing.css';
import swiper1  from '../../images/Landing/swiper1.png'
import swiper2  from '../../images/Landing/swiper2.png'
import swiper3  from '../../images/Landing/swiper3.png'
import swiper4  from '../../images/Landing/swiper4.png'

import {Swiper , SwiperSlide} from 'swiper/react'
import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
 



function Landing() {
  return (
    <div className='landing'>
        
        <div className='Nav'>
            <div className='Nav-top'>
                <div className='Nav-top-img'><img src={logo} alt="Logo" /></div>
                <div className='Nav-top-links'>
                    <a href=''>ABOUT US</a>
                    <a href=''>BLOG</a>
                    <a href=''>ADMISSION</a>
                    <a href=''>OUR TEAM</a>
                    <a href=''>CONTACT</a>
                    <span className='sear'><img src={search} alt="search" /></span>
                    
                </div>
            </div>
            <div className='Nav-body'> 
            <p>Welcome to <span className='Nav-body-span'>HIGHLAND</span> School a  model located in Nyamata .</p>
            <button className='Nav-body-button'>Take a tour</button>

            </div>

        </div> 
        <div>
          
        </div>
        <Swiper
                  spaceBetween={0}
                  modules={[Navigation,EffectFade]}
                  slidesPerView={1}
                  speed={800}
                  loop={true}
                  touchRatio={1.5}
                  navigation={true}
                  effect={"flip"}
                  pagination={{ clickable: true }}
                  className="myswiper"
                >
                  <SwiperSlide >
                    <div className="swiper-silder-container">
                    <img src={swiper1} alt="pro"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                  <div className="swiper-silder-container">
                    <img src={swiper2} alt="pro"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                  <div className="swiper-silder-container">
                    <img src={swiper3} alt="pro"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                  <div className="swiper-silder-container">
                    <img src={swiper4} alt="pro"/>
                    </div>
                  </SwiperSlide>
                  
                  
                
                </Swiper>
    </div>
  )
}

export default Landing