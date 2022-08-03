import React from 'react';
import logo from '../../images/Landing/logo.svg';
import search from '../../images/Landing/bx_search.svg';
import './landing.css';

import swiper1 from  '../../images/Landing/bg1.jpg'
import swiper2 from  '../../images/Landing/bg2.png'
import swiper3 from  '../../images/Landing/bg3.png'
import swiper4 from  '../../images/Landing/bg4.jpg'

import Header from '../../ui/Header/Header';

import {Swiper , SwiperSlide} from 'swiper/react'
import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Second from './second/Second'
import Statistics from './Statistics/Statistics';
import Highlights from './Highlights/Highlights';

 



function Landing() {
  return (
    <div className='landing'>
        
        <div className='Nav'>
            <div className='Nav-top'>
                <div className='Nav-top-img'><img src={logo} alt="Logo" /></div>
                <div className='Nav-top-links'>
                    <a href='/about'>ABOUT US</a>
                    <a href=''>BLOG</a>
                    <a href='/admission'>ADMISSION</a>
                    <a href=''>OUR TEAM</a>
                    <a href=''>CONTACT</a>
                    <span className='sear'><img src={search} alt="search" /></span>
                    
                </div>
            </div>
            <div className='Nav-body'> 
            <p>Welcome to <span className='Nav-body-span'>HIGHLAND</span> School a  model located in Nyamata .</p>
            <button className='Nav-body-button'>Take a tour</button>

                         <SwiperSlide> 
                            <div className="swiper-images">
                            <img src={swiper1} alt="" />
                            </div>
                         </SwiperSlide>

                         <SwiperSlide> 
                            <div className="swiper-images">
                            <img src={swiper2} alt="" />
                            </div>
                         </SwiperSlide>

                         <SwiperSlide> 
                            <div className="swiper-images">
                            <img src={swiper3} alt="" />
                            </div>
                         </SwiperSlide>

                         <SwiperSlide> 
                            <div className="swiper-images">
                            <img src={swiper4} alt="" />
                            </div>
                         </SwiperSlide>

                  </Swiper>
                {/* the image swiper end  */}
             
                                </div>
                                   {/* the contents on the swiper start/ */}
                <div className="about-landing-details1">
            <div className="about-landing-details-logo1">
               <a href="#"> <img src={logo} alt="logo" /></a>
            </div>
            <div className="about-landing-details-logo">
                <a href="#">ABOUT US</a>
            </div>
            <div className="about-landing-details-logo">
            <a href="#">BLOG</a>
            </div>
            <div className="about-landing-details-logo">
            <a href="#">ADMISSION</a>
            </div>
            <div className="about-landing-details-logo">
            <a href="#">OUR TEAM</a></div>    
            <div className="about-landing-details-logo">
            <a href="#">CONTACT</a>
            </div>
            <div className="about-landing-details-logo">
            <a href="#"> <img src={search} alt="" /></a>
            </div>
        </div>

       <div className="about-landing-navigate-container1">
       <div className="about-landing-navigate">
            
            <div className="about-landing-navigate-description">Welcome To <span className='span-high'> HIGHLAND </span> School a model school located in Nyamata</div>
            <div className="landing-button">
                <a href="#landing">Take a Tour</a>
            </div>
        </div>
       </div>
       <Second/>
       <Statistics/>
       <Highlights/>
       
        
    </div>
  )
}

export default Landing