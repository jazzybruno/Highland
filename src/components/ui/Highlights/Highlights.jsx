import React from 'react'
import './Highlights.css';
import slide1  from '../../images/Landing/swiper1.png'
import slide2  from '../../images/Landing/swiper2.png'
import slide3  from '../../images/Landing/swiper3.png'
import slide4  from '../../images/Landing/swiper4.png'
// import swiper1 from  '../../../images/Landing/bg1.jpg'
// import swiper2 from  '../../../images/Landing/bg2.png'
 import swiper3 from  '../../images/Landing/bg3.png'
 import swiper4 from  '../../images/Landing/bg4.jpg'
import swiper1 from '../../images/Landing/bg1.jpg'
import swiper2 from  '../../images/Landing/bg2.png'


import {Swiper , SwiperSlide} from 'swiper/react'
import{Pagination , Navigation , Autoplay , EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import dots from '../../images/Landing/threedots.svg'
import tiltle from '../../images/About/title.svg'

function Highlights() {
  return (
    <div>
       
       <div className="second-details-title">
                <div className="second-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="second-details-title-text"> Highlights  </div>
              </div>
        <div className='swiper-highlights'>

       
        < Swiper 
                   slidesPerView={3}
                   effect
                   spaceBetween={30}
                   loop={true}
                   pagination={{
                     clickable: true
                   }}
                     navigation={true}
                     autoplay={{delay: 3000, disableOnInteraction: false}}
                     
                     modules={[Pagination, Navigation , Autoplay , EffectFade]}
                     className="admission-swiper-container"
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
                            <img src={slide3} alt="" />
                            </div>
                         </SwiperSlide>

                         <SwiperSlide> 
                            <div className="swiper-image">
                            <img src={slide4} alt="" />
                            </div>
                         </SwiperSlide>
                         <SwiperSlide> 
                            <div className="swiper-image">
                            <img src={swiper1} alt="" />
                            </div>
                         </SwiperSlide>
                         <SwiperSlide> 
                            <div className="swiper-image">
                            <img src={swiper2} alt="" />
                            </div>
                         </SwiperSlide>
                         <SwiperSlide> 
                            <div className="swiper-image">
                            <img src={swiper3} alt="" />
                            </div>
                         </SwiperSlide>
                         <SwiperSlide> 
                            <div className="swiper-image">
                            <img src={swiper4} alt="" />
                            </div>
                         </SwiperSlide>

                  </Swiper>
                {/* the image swiper end  */}
                </div>

    </div>
  )
}

export default Highlights