import React from "react";
import './details.css';


const Details = (props)=>{

    const booking = (e) => {
       e.preventDefault();
       console.log("Hello World");
        props.booking(true , props.name , props.contact)
    }
    return(
    <div className="details-container">
        <div className="details-container-img">
            <img src={props.photo} alt="" />
        </div>
        <div className="details-container-name">
           {props.name}
        </div>

        <div className="details-container-role">
            {props.role}
        </div>

        <div className="details-container-contact">
        {props.contact}
        </div>

        <div className="details-container-line-separating">

        </div>

        </div>
    )
}

export default Details;