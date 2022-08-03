import React from 'react'
import './Meeting.css'
import call from '../../images/Admission/phone.gif'
const Meeting = (props) => {

    const canceling = (e)=>{
       e.preventDefault()
         props.canceling(false)
    }

    return (
        <div className="meeting-container" onClick={canceling}>
            <div className="meeting-main-container">
                {/* <div className="meeting-main-container-animation">
                    <img src={call} alt="" />
                </div> */}

                <div className="meeting-main-container-title">
                    Booking Your Meeting
                </div>

                <div className="meeting-main-container-desc">
                    <h4>To book your meeting with <span>{props.name}</span></h4>
                    <div>
                    <div className="application-process-container">
                        <div className="application-process-container-number">1</div>
                        <div className="application-process-container-label">Call {props.contact}</div>
                        <div className="application-process-container-desc">First call the number above in order to book a meeting </div>
                    </div>

                    <div className="application-process-container">
                        <div className="application-process-container-number">2</div>
                        <div className="application-process-container-label">Obey the time </div>
                        <div className="application-process-container-desc">Second make sure you obey the time you agreed on </div>
                    </div>
                    </div>
                </div>
                <div className='meeting-main-exit'>
                    <button onClick={canceling}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Meeting