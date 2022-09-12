import React, {useState} from "react";
// import { Navbar } from "react-bootstrap";
import './Navbar.css';
import search from "../../images/About/search.svg"
import logo from "../../images/About/logo.svg"

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <a href="/"><img src={logo} alt="logo" className="nav-logo" /></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/about">ABOUT US</a>
        <a href="/blog">BLOG</a>
        <a href="/admission">ADMISSION</a>
        <a href="/team">OUR TEAM</a>
        <a href="/contact">CONTACT US</a>
      </div>
      {/* <a href="#"><img src={search} alt="" /></a> */}
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navigation;
