import React from 'react'
import dots from '../../images/Landing/threedots.svg'

import teachers from '../../images/Landing/Teachers.svg'
import graduates from '../../images/Landing/student.svg'
import buildings from '../../images/Landing/building.svg'
import office  from '../../images/Landing/office.svg'
import students from '../../images/Landing/graduates.svg'
import './statistics.css'
import tiltle from '../../images/About/title.svg'

 

function statistics() {
  return (
    <div>
         <div className="second-details-title">
                <div className="second-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="second-details-title-text"> Statistics  </div>
              </div>
        <div className='top-statistics'>
        <div>
            <img  src={teachers} alt =""/>
            <div className='no-statistics'>32</div>
            <p className='name-sta'>Teachers</p>
        </div>
        <div>
            <img  src={graduates} alt ="" className='grad-static'/>
            <div className='no-statistics'>158</div>
            <p className='name-sta'>Graduates</p>
        </div>
        <div>
            <img  src={buildings} alt =""/>
            <div className='no-statistics'>15</div>
            <p className='name-sta'>Buildings</p>
        </div>

        </div>
        
        <div className='bottom-statistics'>
         <div >
            <img  src={office} alt ="" className='office-static'/>
            <div className='no-statistics'>1</div>
            <p className='name-sta'>Office location</p>
         </div>
         <div className='student-static'>
            <img  src={students} alt =""/>
            <div className='no-statistics'>183</div>
            <p className='name-sta'>Students</p>
         </div>
        

        </div>
        
    </div>
  )
}

export default statistics