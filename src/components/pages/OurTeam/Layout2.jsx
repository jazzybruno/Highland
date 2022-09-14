import React from "react";
// import { useState } from "react";
import "./OurTeam.css";
// import "../AboutUs/About.css";
// import Details from "../../ui/Details/details";
import isaac from '../../images/Enroll/isaac.png'
import jean from '../../images/Enroll/dedieu.png'
// import isaac from '../../images/Enroll/isaac.png'


function Layout2() {
  // return (
  //   <div className="main-container">
  //     <section className="container">
  //       <div className="image-container">
  //         <img src={isaac} alt="" className="img-fluid mb-4 pb-2 " />
  //       </div>
  //       <div className="text-center">
  //         <h4>Isaac Kamali</h4>
  //         <h4>0782058797</h4>
  //         <h6>IT Assistant</h6>
  //       </div>
  //     </section>
  //     <section className="container">
  //       <div className="image-container">
  //         <img src={jean} alt="" className="img-fluid mb-4 pb-2" />
  //       </div>
  //       <div className="text-center">
  //         <h4>Jean de Dieu Nisingizwe</h4>
  //         <h4>0788486613</h4>
  //         <h6>Director of Studies</h6>
  //       </div>
  //     </section>
  //     <section className="container">
  //       <div className="image-container">
  //         <img src={isaac} alt="" className="img-fluid mb-4 pb-2" />
  //       </div>
  //       <div className="text-center">
  //         <h4>Grace Mbabazi</h4>
  //         <h4>0788891743</h4>
  //         <h6>Accountant</h6>
  //       </div>
  //     </section>
  //   </div>
  // );
  return (
    <div className="team-wrapper"> 
      <div className="team-card card-body ">
        <img className="team-card-img img-fluid" src={isaac} alt="" />
        <div className="team-card__body">
          <h4 className="team-card__title">Isaac Kamali</h4>
          <h5>0782058797</h5>
          <h6>Revenue Collector</h6>
          <p className="team-card__description"></p>
        </div>
      </div>
      <div className="team-card card-body ">
        <img className="team-card-img img-fluid" src={jean} alt="" />
        <div className="team-card__body">
          <h4 className="team-card__title">Jean de Dieu Nisingizwe</h4>
          <h5>0788486613</h5>
          <h6>Director of Studies</h6>
          <p className="team-card__description"></p>
        </div>
      </div>
      
      <div className="team-card card-body ">
        <img className="team-card-img img-fluid" src={isaac} alt="" />
        <div className="team-card__body">
          <h4 className="team-card__title">Grace Mbabazi</h4>
          <h5>0788891743</h5>
          <h6>Accountant</h6>
          <p className="team-card__description"></p>
        </div>
      </div>
    </div>
  )
}

export default Layout2;
