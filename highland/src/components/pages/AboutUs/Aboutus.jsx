import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Video from '../../videos/about.mp4';
import './About.css'

const AboutUs = () => {
    return (
        <div>
        <Header />
        {/* tthe about us page start */}
        <div className="aboutus">
         {/* the video secton  start */}
          <video src={Video} autoPlay loop muted />
         {/* the video secton  end */}
        {/* tthe about us page end */}
        <Footer />
        </div>
        </div>
    );
}

export default AboutUs;