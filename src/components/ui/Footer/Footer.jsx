import React from "react";
import './Footer.css'
import location from '../../images/Footer/location.svg';
import email from '../../images/Footer/email.svg';
import phone from '../../images/Footer/phone.svg';
import site from '../../images/Footer/site.svg'
import pointer from '../../images/Footer/pointer.svg'
import youtube from '../../images/Footer/youtube.svg'
import twitter from '../../images/Footer/twitter.svg'
import ig from '../../images/Footer/ig.svg'
import facebook from '../../images/Footer/facebook.svg'

const Footer = ()=>{
    return (
        <div>
          {/* the main footer component start */}
          <div className="main-footer">
            {/* the main footer links start */}
            <div className="main-footer-links">
              {/* the main footyer links contant start */}
                <div className="main-footer-links-contant">
                    <div className="footer-contact-title">
                        <h3>Contact Us</h3>
                    </div>

                    <div className="footer-contact-content"> 
                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon">  <img src={phone} alt="" />  </div>
                            <div className="footer-contact-content-item-text">0788351500 </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon"> <img src={email} alt="" /> </div>
                            <div className="footer-contact-content-item-text">info@highlandschool.com </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon"> <img src={site} alt="" /> </div>
                            <div className="footer-contact-content-item-text">www.highland-school.com </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon"> <img src={location} alt="" /> </div>
                            <div className="footer-contact-content-item-text">Nyamata , Bugesera </div>
                        </div>


                    </div>
                     </div>
              {/* the main footyer links contant end */}
           
              {/* the main footyer links  quick start */}
              <div className="main-footer-links-quick">
              <div className="footer-contact-title">
                        <h3 >Quick Links</h3>
                    </div>
                    <div className="footer-links">
                        <div className="footer-link-item">
                            <div className="footer-link-item-icon"> <img src={pointer} alt="" /></div>
                            <div className="footer-link-item-text">About us</div>
                        </div>

                        <div className="footer-link-item">
                            <div className="footer-link-item-icon"> <img src={pointer} alt="" /></div>
                            <div className="footer-link-item-text">Blog</div>
                        </div>

                        <div className="footer-link-item">
                            <div className="footer-link-item-icon"> <img src={pointer} alt="" /> </div>
                            <div className="footer-link-item-text">Admission</div>
                        </div>

                        <div className="footer-link-item">
                            <div className="footer-link-item-icon"><img src={pointer} alt="" /></div>
                            <div className="footer-link-item-text">Contact</div>
                        </div>

                       
                    </div>
                     </div>
              {/* the main footyer links quick end */}

               {/* the main footer links media start  */}
                <div className="main-footer-links-media"> 
                <div className="footer-media-title ">
                        <h3>Follow us</h3>
                    </div>  
                     <div className="media-details">
                        <div className="media-details-links">
                            <a href=""> <img src={youtube} alt="" /></a>
                            <a href=""> <img src={facebook} alt="" /></a>
                            <a href=""> <img src={twitter} alt="" /></a>
                            <a href=""> <img src={ig} alt="" /></a>
                        </div>
                        <div className="media-details-message">
                            <div className="media-details-message-title">Subscribe</div>
                            <div className="media-details-message-input"> 
                            <input type="text"  placeholder="Your email"/>
                            </div>
                        </div>
                     </div>
                </div>
               {/* the main footer links media end  */}
            </div>
            {/* the main footer links end */}
            {/* the main footer copyright start */}
            <div className="main-footer-copyright">
            <div className="copyright-data">
            Copyright © 2022. All Rights Reserved |  www.highland-school.com  | Designed by BRIS.
            </div>
            </div>
            {/* the main footer copyright start */}
            
          </div>
          {/* the main footer component end */}
        </div>
    )
}

export default Footer;``