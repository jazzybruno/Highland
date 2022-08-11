import React from "react";
import {useState} from 'react';
import {Link} from 'react-router-dom'
import './Levels.css'

function ChooseLevel() {
    const levelList = ["Nursery Level", "Lower Primary Level", "Upper Primary Level"];
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if(event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return(
        <div className="levelList">
            <div className="choose-level-title">
                <h3>CHOOSE LEVEL</h3>
            </div>
            <div className="levels-container">
                {levelList.map((item, index) => (
                    <div key={index} className="enroll-choose-level mt-4">
                        <input value={item} type="checkbox" onChange={handleCheck} id="choose-level-input" />
                        <span>{item}</span>
                    </div>     
                ))}
            </div>
            <div className="enroll-class-btn">

                <Link to="/enrollstudent" className="enroll-continue-btn" >Continue Enrollment</Link>
            </div>
        </div>
    );
}

export default ChooseLevel;