import React from 'react';
import './Header.css';
import location from '../../images/Header/location.svg'
import mail from '../../images/Header/mail.svg'
import phone from '../../images/Header/phone.svg'

const Header = () => {
    return (
      <div>
        {/* the main header start  */}
        <div className="main-header">
            {/* the main header location start  */}
            <div className="main-header-location">
                {/* the main header location item start */}
                <div className="main-header-location-item">
                    <div className="main-header-location-item-icon"> <img src={location} alt="" /> </div>
                    <div className="main-header-location-item-text"> Nyamata , Bugesera </div>
                </div>
                {/* the main header location item end */}
            </div>
            {/* the main header location end  */}

            {/* the main header contact start */}
            <div className="main-header-contact">
                {/* the main header contact info start */}
                <div className="main-header-contact-info"> 
                   
                   {/* the main header contact info item start */}
                     <div className="main-header-contact-info-item1"> 
                       <div className="main-header-contant-info-item-icon">
                            <img src={phone} alt="" />
                       </div>   

                       <div className="main-header-contact-info-item-text">
                       0788351500
                       </div>

                      </div>

                      <div className='line-dividing-them '> </div>

                      <div className="main-header-contact-info-item2"> 
                       <div className="main-header-contant-info-item-icon">
                            <img src={mail} alt="" />
                       </div>   

                       <div className="main-header-contact-info-item-text">
                       info@highlandschool.com
                       </div>

                      </div>


                   {/* the main header contact info item end */}
                 </div>
                {/* the main header contact info end */}
            </div>
            {/* the main header contact end */}

        </div>
        {/* the main header end  */}
      </div>
    );
}

export default Header;