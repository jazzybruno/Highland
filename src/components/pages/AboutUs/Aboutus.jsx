import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Video from '../../videos/about.mp4';
import './About.css'
import search from '../../images/About/search.svg'
import logo from '../../images/About/logo.svg'
import tiltle from '../../images/About/title.svg'
import Mission from "../../ui/mission/Mission";
import Value from "../../ui/value/Value";
import Data from "./values";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Achievements from "../../ui/Achievement/Achievement";
import { Pagination, Navigation , Autoplay , EffectFade  } from "swiper";
import Edward from '../../images/About/principal.svg'


const AboutUs = () => {

    const data = [
        {
            id: 1,
            title: "Our Mission",
            text: "To follow our Lord Jesus Christ By equipping future generation with knowlwdge and moral foundation skills built around Godly principles and cultural values"
        },
        {
            id: 2,
            title: "Our Vision",
            text: "“To transform students into life-long learners and agents of Godly transformation in the rapidly changing world”"
        },
        {
            id: 3,
            title: "Our Goals",
            text: "“To ensure that the school environment becomes a nurturing ground for future agents of change to make the worls a better place in God’s view.”"
        }
    ]

    const   Achieve = [
        {
            id: 1,
            title: "Third best child in the country from Highland",
            desc: "By the names of Agasaro Bethia , the child from highland in the national exam came in the top 5 best students  in Rwanada in the national exams of 2020-2021 "
        },
        {
            id: 2,
            title: "Winning the Shupavu 2910",
            desc: "The children at Highland won the shupavu 2910 where they met and competed with other school like kigali Parents and proven they are the best by winning the shupavu"
        },
        {
            id: 3,
            title: "Students always in the first grade",
            desc: "The Childern  at Highland  school are always in the first grade in the Primary Leaving National Exams meaning that no student has ever gone under 15."
        },
        {
            id: 4,
            title: "Third best child in the country from Highland",
            desc: "By the names of Agasaro Bethia , the child from highland in the national exam came in the top 5 best students  in Rwanada in the national exams of 2020-2021 "
        }
    ]

    return (
        <div>
        <Header />
        {/* tthe  about us page start */}
        <section className="aboutus">
         {/* the video secton  start */}
       {/* the video about us video start */}
       <div className="aboutus-video">
         <div className="orientation"></div>
        <video src={Video}  autoPlay={true} loop={true}  muted />
        <div className="about-video-details">
            <div className="about-video-details-logo1">
               <a href="landing"> <img src={logo} alt="logo" /></a>
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

       <div className="about-videos-navigate-container">
       <div className="about-video-navigate">
            <div className="about-videos-navigate-title">
                <h3> ABOUT US </h3>
            </div>
            <div className="about-videos-navigate-description">Get to know more about <span>HIGHLAND</span> school Nyamata</div>
            <div className="about-video-navigate-link">
                <a href="#about">Details</a>
            </div>
        </div>
       </div>

       </div>
       {/* the video about us video end */}
         {/* the video secton  end */}
            {/* the about us details start */}
         <section id="about">
         <div className="aboutus-details">
              <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text"> ABOUT <span>HIGHLAND</span> SCHOOL</div>
              </div>
                <div className="aboutus-details-description"> 
                {/* the mapping */}
               {data.map(v=>{return <Mission key={v.id} title={v.title} text={v.text} />})}
               <div className="aboutus-details-values">
                <div className="mission-contaier-title">Our Values</div>
                <div className="about-container-line"><div className="about-line"></div></div>
                <div className="about-container-values-in">
                 {Data.map(v=>{return <Value key={v.id} img={v.img} text={v.text} />})}
                </div>
               </div>

               <div className="aboutus-details-testimonials">
                <div className="about-details-testiomony-title">Testimonials</div>
                <div className="about-container-line"><div className="about-line"></div></div>
                <div className="about-details-testiomony-description">

                <Swiper
        slidesPerView={1}
        effect
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        
        navigation={true}
        autoplay={{delay: 5000, disableOnInteraction: true}}
        
        modules={[Pagination, Navigation , Autoplay , EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="about-details-testiomony-description-container">
                       <div className="about-details-testimony-description-container-img">
                            <img src={Edward} alt="" />
                       </div>
                        <div className="about-details-testimony-description-container-message">
                        <div className="about-details-testimony-description-container-tilte"> Munyaburanga Edward </div>
                            <div className="about-details-testimony-description-container-role">  Principal</div>
                            <div className="about-details-testimony-description-container-message"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ut! Blanditiis aspernatur corporis error, ipsa dolores explicabo tempora quis sed sapiente!
                             Amet est nihil animi, natus optio blanditiis consequatur soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione cumque dolor voluptate ducimus, quae voluptatibus id voluptatem repellendus, quia iure, suscipit
                             </div>
                 </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="about-details-testiomony-description-container">
                       <div className="about-details-testimony-description-container-img">
                            <img src={Edward} alt="" />
                       </div>
                        <div className="about-details-testimony-description-container-message">
                        <div className="about-details-testimony-description-container-tilte"> Munyaburanga Edward </div>
                            <div className="about-details-testimony-description-container-role">  Principal</div>
                            <div className="about-details-testimony-description-container-message"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ut! Blanditiis aspernatur corporis error, ipsa dolores explicabo tempora quis sed sapiente!
                             Amet est nihil animi, natus optio blanditiis consequatur soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione cumque dolor voluptate ducimus, quae voluptatibus id voluptatem repellendus, quia iure, suscipit
                             </div>
                 </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="about-details-testiomony-description-container">
                       <div className="about-details-testimony-description-container-img">
                            <img src={Edward} alt="" />
                       </div>
                        <div className="about-details-testimony-description-container-message">
                        <div className="about-details-testimony-description-container-tilte"> Munyaburanga Edward </div>
                            <div className="about-details-testimony-description-container-role">  Principal</div>
                            <div className="about-details-testimony-description-container-message"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ut! Blanditiis aspernatur corporis error, ipsa dolores explicabo tempora quis sed sapiente!
                             Amet est nihil animi, natus optio blanditiis consequatur soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione cumque dolor voluptate ducimus, quae voluptatibus id voluptatem repellendus, quia iure, suscipit
                             </div>
                 </div>
                        </div>
        </SwiperSlide>
        
      </Swiper>

                </div>
               </div>
                 </div>

            </div>
         </section>
            {/* the about us details end */}
        {/* tthe about us page end */}
        {/* <Footer /> */}

        <div className="about-achievements">
            <div className="about-achievements-title"> Achievements
            </div>
            <div className="about-container-line"><div className="about-line"></div></div>
             <div className="about-container-message">
                {Achieve.map(v=> {return <Achievements key={v.id}  title={v.title} desc={v.desc} />})}
             </div>
        </div>
        </section>
        <Footer></Footer>
        </div>

    );
}

export default AboutUs;