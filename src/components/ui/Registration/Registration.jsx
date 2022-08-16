import React from 'react'
import './Registration.css'
import {Link} from 'react-router-dom'

function Registration() {
  return (
    <div className='registration-body'>
        <h1 className='registration-head'>Registration fees</h1>
        <p className='registration-para'>The registration fees are 10,000 Rwandan Francs ,and canbe payed either on bank or momo</p>
        <p className='registration-para'>You will get a call no more than today confirming the day of interviewing the child.</p>
        <h2>You should come with the following Documents:</h2>
        <li>Student's prrevious report card for a usual student</li><br/>
        <li>The birth certificate for baby beginners</li><br/>
        <li>The confirmation that the registration fees were paid</li><br/>
        <li>The student ready for the interview</li><br/>
        <div className="finsih-registration">
        <Link to="/enroll"><button className='registration-finish'>Finish Enrollment</button></Link>
        </div>
    </div>

  )
}

export default Registration