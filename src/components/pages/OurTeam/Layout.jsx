import React from "react";
// import { useState } from "react";
import "../OurTeam/OurTeam.css";
// import "../AboutUs/About.css";
import Details from "../../ui/Details/details";
import Image1 from "../../images/Admission/slide2.jpg";
import Image2 from "../../images/Admission/slide3.jpg";
import Image3 from "../../images/Admission/slide4.jpg";

function Layout() {
  return (
    <div className="main-container">
      <section className="container">
        <div className="image-container">
          <img src={Image1} alt="" className="img-fluid mb-4 pb-2 " />
        </div>
        <div className="text-center">
          <h4>Edward Munyaburanga</h4>
          <h4>0788351500</h4>
          <h6>Principal</h6>
        </div>
      </section>
      <section className="container">
        <div className="image-container">
          <img src={Image2} alt="" className="img-fluid mb-4 pb-2" />
        </div>
        <div className="text-center">
          <h4>Charles Rusanganwa</h4>
          <h4>0786831279</h4>
          <h6>Head master</h6>
        </div>
      </section>
      <section className="container">
        <div className="image-container">
          <img src={Image3} alt="" className="img-fluid mb-4 pb-2" />
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

export default Layout;
