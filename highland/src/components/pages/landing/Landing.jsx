import React from 'react';
import logo from '../../images/Landing/logo.svg';
import search from '../../images/Landing/bx_search.svg';
import './landing.css'


function Landing() {
  return (
    <div className='landing'>
        
        <div className='Nav'>
            <div className='Nav-top'>
                <div className='Nav-top-img'><img src={logo} alt="Logo" /></div>
                <div className='Nav-top-links'>
                    <a href=''>ABOUT US</a>
                    <a href=''>BLOG</a>
                    <a href=''>ADMISSION</a>
                    <a href=''>OUR TEAM</a>
                    <a href=''>CONTACT</a>
                    <span className='sear'><img src={search} alt="search" /></span>
                    
                </div>
            </div>
            <div className='Nav-body'> 
            <p>Welcome to <span className='Nav-body-span'>HIGHLAND</span> School a  model located in Nyamata .</p>
            <button className='Nav-body-button'>Take a tour</button>

            </div>

        </div>
    </div>
  )
}

export default Landing