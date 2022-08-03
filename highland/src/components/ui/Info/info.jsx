import React from "react";
import './info.css';


const Info = (props)=>{

    const booking = (e) => {
       e.preventDefault();
       console.log("Helo World");
        props.booking(true , props.name , props.contact)
    }
    return(
    <div className="information-container">
        <div className="information-container-img">
            <img src={props.photo} alt="" />
        </div>
        <div className="information-container-name">
           {props.name}
        </div>

        <div className="information-container-role">
            {props.role}
        </div>

        <div className="information-container-contact">
        {props.contact}
        </div>

        <div className="information-container-line-separating">

        </div>

            <div className="information-container-book ">
                <a href="#" onClick={booking}> Book a meeting</a>
            </div>


    </div>)
}

export default Info