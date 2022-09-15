import { Button } from "bootstrap";
import React from "react";
import {useState} from 'react';
import {Link , useNavigate} from 'react-router-dom'
import './Levels.css'


function ChooseLevel() {
    const levelList = ["Nursery Level", "Lower Primary Level", "Upper Primary Level"];
    const [checked, setChecked] = useState("");
    const handleCheck = (event) => {
        let value = event.target.value
         setChecked(value)
    };

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/enrollstudent" , {
            state:  {level: checked}
        })
    }

    return(
        <div className="levelList">
            <div className="choose-level-title">
                <h3>CHOOSE LEVEL</h3>
            </div>
            <div className="levels-container">
                {levelList.map((item, index) => (
                    <div class="checkbox" key={index}>
                    <label><input value={item} type="radio" name="remember" onChange={handleCheck} /> {item}</label>
                  </div>
                ))}
            </div>
            <div className="enroll-class-btn">

                <a to="" onClick={handleSubmit} className="enroll-continue-btn" >Continue Enrollment</a>
            </div>
        </div>
    );
}

export default ChooseLevel;