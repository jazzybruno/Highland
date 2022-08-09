import React from 'react'
import principal from '../../images/Landing/principal.png'
import lines from '../../images/Landing/lines.svg'
import dots from '../../images/Landing/threedots.svg'
import './Second.css'
import tiltle from '../../images/About/title.svg'




function Landing() {
  return (
    <div>
        <div className='upper-lines'><img  src={lines} alt =""/></div>
        {/* <div className='title-foreword'>
        <img  src={dots} alt =""/>
        <div className='foreword'>
        <h3>Principal's Foreword</h3>
        <p>Edward Munyaburanga,HIghland School</p>
        </div>
        </div> */}

<div className="second-details-title">
                <div className="second-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="second-details-title-text">Principal’s Foreword  </div>
              </div>

        <div className='center-lan' >
            <div className='word-of'>
           <div className="word-of-container">
           <p>
                "Education in Highland will always reflect the confidence we have in our
                student's ability and our aim to prepare students for the challenges of the future"</p>
                <br/>
                 <p>"We continually blaze new trials for our students to discover new learning opportunities
                 that will enable them to be wholesome individuals who believe in themselves and what the future can offer
                 the.At Highland,there is a healthy emphasis on both curicular and co-curricular programmes".
              </p>
           </div>
            </div>
            <div className='image-of'>
            <img  src={principal} alt =""/>
              <h3>Principal's foreword</h3>
              <p>Edward Munyaburanga</p>
            </div>

        </div>
        <div className='down-lines'><img  src={lines} alt =""/></div>



        

        
        
    
    </div>
  )
}

export default Landing