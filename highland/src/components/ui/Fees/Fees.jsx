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
        <h3>{props.level}</h3>
        <h4>{props.desc}</h4>
     </div>

     <div className="fees-container-requiremenmts">
         <a  href="#">Download Requirements</a>
         <a href="#">View in  PDF</a>
     </div>
</div> )
}

export default Fees;