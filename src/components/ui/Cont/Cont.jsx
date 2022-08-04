import React from 'react'
import './Cont.css'

import call from '../../images/Contact/call.svg'
import email from '../../images/Contact/email.svg'
import facebook from '../../images/Contact/facebook.svg'



function Cont() {
  return (
    <div>
        <div className='second-contact'>
        
        <div>
            <img  src={call} alt =""/>
            <div className='contact-name'>Call</div>
            <p>0788351500</p>
        </div>
        <div>
            <img  src={email} alt =""/>
            <div className='contact-name'>Email</div>
            <p>info@highlandschool.com</p>
        </div>
        <div>
            <img  src={facebook} alt =""/>
            <div className='contact-name'>Facebook</div>
            <p>Highland School Nyamata</p>
        </div>
        

      </div>


    </div>
  )
}

export default Cont