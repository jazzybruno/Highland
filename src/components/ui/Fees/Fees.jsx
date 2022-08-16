import React from "react";
import './Fees.css';
import photo from '../../images/Admission/admit.jpg'


const Fees = (props) => {
return( <div className="fees-container">
     <div className="fees-container-img">
        <img src={props.photo} alt="" />
     </div>
     <div className="fees-container-line">
      <div className="fees-container-line-line"></div>
     </div>
     <div className="fees-container-level">

        <p>{props.level}</p>
        <h4>{props.desc}</h4>
     </div>

     <div className="fees-container-requiremenmts">
         <a  href="https://drive.google.com/u/0/uc?id=12EGgDgMp3rczQpRGlPHRzJVzS-yl47NJ&export=download">Download Requirements</a>
         <a href="https://drive.google.com/file/d/12EGgDgMp3rczQpRGlPHRzJVzS-yl47NJ/view?usp=sharing" target="_blank">View in  PDF</a>
     </div>
</div> )
}

export default Fees;