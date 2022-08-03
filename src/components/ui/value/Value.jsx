import React from "react";
import './Value.css'

const Value = (props) => {
    return(
        <div className="value-container">
            <div className="value-conatainer-img">
                <img src={props.img} alt="" />
            </div>
            <div className="value-conatainer-text">
                {props.text}
            </div>
        </div>
    )
}

export default Value;