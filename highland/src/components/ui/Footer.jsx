import React from "react";
import './Footer.css'

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
                         <div className="footer-contact-content-item-icon">  </div>
                            <div className="footer-contact-content-item-text">0788351500 </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon">  </div>
                            <div className="footer-contact-content-item-text">info@highlandschool.com </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon">  </div>
                            <div className="footer-contact-content-item-text">www.highland-school.com </div>
                        </div>

                        <div className="footer-contact-content-item"> 
                         <div className="footer-contact-content-item-icon">  </div>
                            <div className="footer-contact-content-item-text">Nyamata , Bugesera </div>
                        </div>


                    </div>
                     </div>
              {/* the main footyer links contant end */}

              {/* the main footyer links  quick start */}
              <div className="main-footer-links-quick">
                quick links
                     </div>
              {/* the main footyer links quick end */}

               {/* the main footer links media start  */}
                <div className="main-footer-links-media"> 
                 media 
                </div>
               {/* the main footer links media end  */}
            </div>
            {/* the main footer links end */}
            {/* the main footer copyright start */}
            <div className="main-footer-copyright">

            </div>
            {/* the main footer copyright start */}
            
          </div>
          {/* the main footer component end */}
        </div>
    )
}

export default Footer;