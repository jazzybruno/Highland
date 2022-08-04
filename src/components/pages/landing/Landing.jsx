
// import React from 'react';
// import logo from '../../images/Landing/logo.svg';
// import search from '../../images/Landing/bx_search.svg';
// import './landing.css';
// import slide1 from "../../images/Admission/admit.jpg"
// import slide2 from "../../images/Admission/slide2.jpg"
// import slide3 from "../../images/Admission/slide3.jpg"
// import slide4 from "../../images/Admission/slide4.jpg"
// import Footer from '../../ui/Footer/Footer';
// import Header from '../../ui/Header/Header';
// import {Swiper , SwiperSlide} from 'swiper/react'
// import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import "swiper/css/autoplay"
// import Second from '../../ui/second/Second';
// import Statistics from '../../ui/Statistics/Statistics';
// import Highlights from '../../ui/Highlights/Highlights';

 



// function Landing() {
//   return (
//     <div className='landing'>
//          <Header />
       
//         <div className="orientation1"></div>
//             <div className="admission-container">
           
//                 {/* the image swiper start  */}
//                   < Swiper 
//                    slidesPerView={1}
//                    effect
//                    // spaceBetween={30}
//                    loop={true}
//                    pagination={{
//                      clickable: true
//                    }}
//                      navigation={true}
//                      autoplay={{delay: 2000, disableOnInteraction: false}}
                     
//                      modules={[Pagination, Navigation , Autoplay , EffectFade]}
//                      className="admission-swiper-container"
//                      >

//                          <SwiperSlide> 
//                             <div className="swiper-images">
//                             <img src={slide1} alt="" />
//                             </div>
//                          </SwiperSlide>

//                          <SwiperSlide> 
//                             <div className="swiper-images">
//                             <img src={slide2} alt="" />
//                             </div>
//                          </SwiperSlide>

//                          <SwiperSlide> 
//                             <div className="swiper-images">
//                             <img src={slide3} alt="" />
//                             </div>
//                          </SwiperSlide>

//                          <SwiperSlide> 
//                             <div className="swiper-images">
//                             <img src={slide4} alt="" />
//                             </div>
//                          </SwiperSlide>

//                   </Swiper>
//                 {/* the image swiper end  */}
             
//                                 </div>
//                                    {/* the contents on the swiper start/ */}
//                 <div className="about-video-details1">
//             <div className="about-video-details-logo1">
//                <a href="#"> <img src={logo} alt="logo" /></a>
//             </div>
//             <div className="about-video-details-logo2">
//                 <a href="#">ABOUT US</a>
//             </div>
//             <div className="about-video-details-logo3">
//             <a href="#">BLOG</a>
//             </div>
//             <div className="about-video-details-logo4">
//             <a href="#">ADMISSION</a>
//             </div>
//             <div className="about-video-details-logo5">
//             <a href="#">OUR TEAM</a></div>    
//             <div className="about-video-details-logo6">
//             <a href="#">CONTACT</a>
//             </div>
//             <div className="about-video-details-logo7">
//             <a href="#"> <img src={search} alt="" /></a>
//             </div>
//         </div>

//        <div className="about-videos-navigate-container1">
//        <div className="about-video-navigate">
//             <div className="about-videos-navigate-title">
//                 <h3> HOME </h3>
//             </div>
//             <div className="about-videos-navigate-description">Welcome To <span>HIGHLAND</span> School a model school located in Nyamata.</div>
//             <div className="about-video-navigate-link">
//                 <a href="#admission">Take A tour</a>
//             </div>
//         </div>
//        </div>
//        <Second/>
//        <Statistics/>
//        <Highlights/>
//        <Footer />
        
//     </div>
//   )
// }

// export default Landing

import React from 'react';
import logo from '../../images/Landing/logo.svg';
import search from '../../images/Landing/bx_search.svg';
import './landing.css';
import slide1 from "../../images/Admission/admit.jpg"
import slide2 from "../../images/Admission/slide2.jpg"
import slide3 from "../../images/Admission/slide3.jpg"
import slide4 from "../../images/Admission/slide4.jpg"
import Footer from '../../ui/Footer/Footer';
import Header from '../../ui/Header/Header';
import {Swiper , SwiperSlide} from 'swiper/react'
import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"




import Second from '../../ui/Second/Second';

import Statistics from '../../ui/Statistics/Statistics';
import Highlights from '../../ui/Highlights/Highlights';

 



function Landing() {
  return (
    <div className='landing'>
         <Header />
       
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
               <a href="#"> <img src={logo} alt="logo" /></a>
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
            <a href="#">OUR TEAM</a></div>    
            <div className="about-video-details-logo6">
            <a href="#">CONTACT</a>
            </div>
            <div className="about-video-details-logo7">
            <a href="#"> <img src={search} alt="" /></a>
            </div>
        </div>

       <div className="about-videos-navigate-container1">
       <div className="about-video-navigate">
            <div className="about-videos-navigate-title">
                <h3> HOME </h3>
            </div>
            <div className="about-videos-navigate-description">Welcome To <span>HIGHLAND</span> School a model school located in Nyamata.</div>
            <div className="about-video-navigate-link">
                <a href="#admission">Take A tour</a>
            </div>
        </div>
       </div>
       <Second/>
       <Statistics/>
       <Highlights/>
       <Footer />
        
    </div>
  )
}


export default Landing;


