import React from "react";
import './Achievement.css'

const Achievements = (props)=> {
    return(
        <div className="achievements-details">
         <div className="achievements-details-title">
            {props.title}
         </div>
         <div className="achievements-details-message">
           { props.desc}
         </div>
        </div>
        )
    
    }

export default Achievements;