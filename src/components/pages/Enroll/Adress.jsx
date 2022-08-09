import React from 'react';
// import './Enroll-1.css'
import Heading from "../../ui/Enroll/Heading";
import Level from '../../ui/Enroll/Levels';
import Address from '../../ui/Enroll/Address';

function Adress() {
    return (
        <div>
            <Heading />
            <div className='all-address-container'>
                <div className='all-levels-container'> 
                    <Level />
                </div>
                <div className='address-container'>
                    <Address />
                </div>
            </div>
        </div>
    )
}

export default Adress;