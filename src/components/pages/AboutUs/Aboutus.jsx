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
import NavBar from "../../ui/Navbar/Navbar";
import kebra from "../../images/About/alumni.png";
import kezi from "../../images/About/kezi.png";
import axios from "axios";
import { useState , useEffect } from "react";
import Swal from "sweetalert2";


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

    const [Achieve, setAchieve] = useState([]);

  
    const api = axios.create({
      baseURL: "https://highland-backend.herokuapp.com/",
    });
 
  
    const getMessages = () => {
      api
        .get("/achieve")
        .then((res) => {
          console.log(res);
          setAchieve(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getMessages();
    } , []);
    

   
    return (
        <div>
        <Header />
        {/* tthe  about us page start */}
        <section className="aboutus">
         {/* the video secton  start */}
       {/* the video about us video start */}
       <div className="aboutus-video">
         <div className="orientation"></div>
        <video src={Video}  autoPlay loop muted  />
        <div className="about-video-details">
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
            <a href="/login"> <img src={search} alt="" /></a>
            </div>
        </div>

        <div className='about-responsive-div'>
        <NavBar />
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
                            <div className="about-details-testimony-description-container-message"> 
                            Education in Highland will always reflect the confidence we have in our student's ability and our aim to prepare students for the challenges of the future
                             </div>
                 </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="about-details-testiomony-description-container">
                       <div className="about-details-testimony-description-container-img">
                            <img src={kebra} alt="" />
                       </div>
                        <div className="about-details-testimony-description-container-message">
                        <div className="about-details-testimony-description-container-tilte"> Munyaburanga Nicole Kebra </div>
                            <div className="about-details-testimony-description-container-role"> Alumni </div>
                            <div className="about-details-testimony-description-container-message"> 
                            Highland School has taught me to be a confident in everything i do and that has helped me to achieve my goals 
                                 </div>
                 </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="about-details-testiomony-description-container">
                       <div className="about-details-testimony-description-container-img">
                            <img src={kezi} alt="" />
                       </div>
                        <div className="about-details-testimony-description-container-message">
                        <div className="about-details-testimony-description-container-tilte"> Ineza Priscilla </div>
                            <div className="about-details-testimony-description-container-role">  Student</div>
                            <div className="about-details-testimony-description-container-message"> 
                                                "I can say this is a precious school , no one comes at Highland and leaves without mastering languages like English and French"
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