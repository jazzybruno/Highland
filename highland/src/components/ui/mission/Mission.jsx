import React from "react";
import './Mission.css'

const Mission = (props)=>{
   return( 
     <div className="mission-container">
        <div className="mission-contaier-title"> <h3>{props.title}</h3></div>
        <div className="container-line"><div className="line"></div></div>
        <div className="mission-container-description" style={{textAlign: "center"}}> {props.text} </div>
     </div>
   )
}

export default Mission;