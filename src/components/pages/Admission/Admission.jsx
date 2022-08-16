import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import './Admission.css';
import '../AboutUs/About.css';
import Header from '../../ui/Header/Header';
import Footer from "../../ui/Footer/Footer";
import Info from "../../ui/Info/info";
import people from "./info";
import {Swiper , SwiperSlide} from 'swiper/react'
import slide1 from "../../images/Admission/admit.jpg"
import slide2 from "../../images/Admission/slide2.jpg"
import slide3 from "../../images/Admission/slide3.jpg"
import slide4 from "../../images/Admission/slide4.jpg"
import tiltle from '../../images/About/title.svg'
import logo from '../../images/About/logo.svg'
import search from '../../images/About/search.svg'
import Fees from "../../ui/Fees/Fees";
import Data from './Levels'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation , Autoplay , EffectFade  } from "swiper";
import Meeting from "../../ui/Meeting/Meeting";

const Admission = ()=>{
  const [meet , SetMeet] = useState(false)
  const [name , SetName] = useState("")
  const [contact , SetContact] = useState("")
  const meeting = (value , name , contact) => {
     SetMeet(value)
     SetContact(contact)
     SetName(name)
  }
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
                <h3> ADMISSION </h3>
            </div>
            <div className="about-videos-navigate-description">Study at <span> HIGHLAND </span> for a promised bright future</div>
            <div className="about-video-navigate-link">
                <a href="#admission">Details</a>
            </div>
        </div>
       </div>
                {/* the contents on the swiper end/ */}
                {/* the next section of about us starts here  */}
                <section id="admission">
                  <div className="admission-fees-structure">
                  <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text"> Fees Structure </div>
              </div>

                <div className="admission-fees-sructure-container">
                 {Data.map(v=> {return <Fees key={v.id} photo={v.photo} desc={v.desc}  level={v.level}/>})}
                </div>
                  </div>
                  
                  {/* the apply part starts here */}
                  <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text"> HOW TO APPLY </div>
              </div>
              <div className="application-description-container">
              <div className="application-description">
              We are delighted that you have chosen to apply to Highland School. Highland utilizes the SchoolAdmin application and enrollment portal. The general process consists of the following steps.
              </div>
              </div>
              <div className="application-process-container">
                <div className="application-process-title">
                    Application Process
                </div>
                <div className="application-process-description">
                    {/* the application process one start   */}
                    <div className="application-process-container">
                        <div className="application-process-container-number">1</div>
                        <div className="application-process-container-label">Choose Level</div>
                        <div className="application-process-container-desc">Choose which level you want to
                          enroll your child in and then follow to 
                      the next part of the procedure.</div>
                    </div>
                    {/* the application process one end   */}

                     {/* the application process one start   */}
                     <div className="application-process-container">    
                        <div className="application-process-container-number">2</div>
                        <div className="application-process-container-label">Requirements</div>
                        <div className="application-process-container-desc">In order to fulfill the procedure , 
you have to have all the requirements
for certain levels.</div>
                    </div>
                    {/* the application process one end   */}

                     {/* the application process one start   */}
                     <div className="application-process-container">
                        <div className="application-process-container-number">3</div>
                        <div className="application-process-container-label">Registration fees</div>
                        <div className="application-process-container-desc">For the procedure to take place, there 
is a ceratin amount of fee you pay. Download
the requirements to see the amount.</div>
                    </div>
                    {/* the application process one end   */}

                     {/* the application process one start   */}
                     <div className="application-process-container">
                        <div className="application-process-container-number">4</div>
                        <div className="application-process-container-label">Register</div>
                        <div className="application-process-container-desc">Then to finish register your child and you are all done.</div>
                    </div>
                    {/* the application process one end   */}

                </div>
                <div className="application-section-enroll">
                    <Link to="/enroll"><a href="#">ENROLL NOW</a></Link>
                </div>
              </div>
                  {/* the apply part ends here */}

                  {/* the more info part starts here  */}
                  <div className="information-container">
                  <div className="application-process-title">
                    For more info.......    
                </div>
                 
                  <div className="information-details-container">
                  
                    {people.map(v=> {return <Info booking={meeting} photo={v.photo} key={v.id} name={v.name} role={v.role} contact={v.contact}  />})}
                  
                  </div>
                  { meet ?  <Meeting  canceling={meeting} name={name} contact={contact} /> : ""}
                  
                  </div>
                  {/* the more info part starts end here  */}
          
                </section>
                {/* the next section of about us ends here */}
 
                    <Footer/>
        </div>
    )
}

export default Admission;