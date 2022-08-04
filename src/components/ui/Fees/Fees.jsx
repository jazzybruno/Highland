
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
         <a  href="#">Download Requirements</a>
         <a href="https://docs.google.com/document/d/1yrNsSQF9wNgzc6EUs6iCLB9lkla14vPn/edit?usp=sharing&ouid=101850246922054795349&rtpof=true&sd=true" target="_blank">View in  PDF</a>
     </div>
</div> )
}
export default Fees;