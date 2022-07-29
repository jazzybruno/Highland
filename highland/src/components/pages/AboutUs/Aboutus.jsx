import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Video from '../../videos/about.mp4';
import './About.css'
import search from '../../images/About/search.svg'
import logo from '../../images/About/logo.svg'

const AboutUs = () => {
    return (
        <div>
        <Header />
        {/* tthe  about us page start */}
        <section className="aboutus">
         {/* the video secton  start */}
       {/* the video about us video start */}
       <div className="aboutus-video">
         <div className="orientation"></div>
        <video src={Video} controls autoPlay={true} loop={true} />
        <div className="about-video-details">
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
       </div>
       {/* the video about us video end */}
         {/* the video secton  end */}
        {/* tthe about us page end */}
        {/* <Footer /> */}
        </section>
        </div>
    );
}

export default AboutUs;