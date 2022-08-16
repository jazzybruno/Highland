import React from 'react';
import logo from '../../images/Landing/logo.svg';
import './Levels.css';


function Heading () {
    return  (
        <div className='enroll-header'>
            <img src={logo} alt="logo" />
            <h2>ENROLL NOW</h2>
        </div>
    )
}

export default Heading;