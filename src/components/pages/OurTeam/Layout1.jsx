import React from "react";
// import { useState } from "react";
import "../OurTeam/OurTeam.css";
import Edward from '../../images/Enroll/principal.png'
import Charles from '../../images/Enroll/charles.png'
import John from '../../images/Enroll/john.png'


function Layout1() {
  return (
    <div className="main-container">
      <section className="container">
        <div className="image-container">
          <img src={Edward} alt="" className="img-fluid mb-4 pb-2 " />
        </div>
        <div className="text-center">
          <h4>Edward Munyaburanga</h4>
          <h4>0788351500</h4>
          <h6>Principal</h6>
        </div>
      </section>
      <section className="container">
        <div className="image-container">
          <img src={Charles} alt="" className="img-fluid mb-4 pb-2" />
        </div>
        <div className="text-center">
          <h4>Charles Rusanganwa</h4>
          <h4>0786831279</h4>
          <h6>Head master</h6>
        </div>
      </section>
      <section className="container">
        <div className="image-container">
          <img src={John} alt="" className="img-fluid mb-4 pb-2" />
        </div>
        <div className="text-center">
          <h4>Johnvianny Rwakoojo</h4>
          <h4>0786207426</h4>
          <h6>Academics Coordinator</h6>
        </div>
      </section>
    </div>
  );
}

export default Layout1;
