import React from "react";
import './Stats.css'
import logo from '../../../../images/About/logo.svg'
import {BsFillFilePostFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {VscSignIn} from 'react-icons/vsc'
import {MdCreateNewFolder} from 'react-icons/md'
import { useState } from "react";

const Stats = ( ) =>{
    const [isOpen, setIsOpen] = useState(false);

    return ( <div className="main-home-page-all-container">
        <div className="main-home-page-upper-main-container"> 
        <img src={logo} alt="" />
            Highland School 
            <div className="links-for-navigations">
            <a href="/posts">Posts</a>
            <a href="/post/create">New Post</a>
            <a href="/messages">Messages</a>
            <a href="/admissions">Admissions</a>
            <a href="/stats">Statistics</a>
            <a href="/achieve">Achievements</a>
            </div>
           </div>

           <div className="main-home-page-upper-main-container1"> 
            <div className="Navbar">
       <a href="/homw"><img src={logo} alt="logo" className="nav-logo" /></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/posts">Posts</a>
        <a href="/posts/create">New Post</a>
        <a href="/messages">Messages</a>
        <a href="/Admissions">Admissions</a>
        <a href="/stats">Statistics</a>
        <a href="/achieve">Achievements</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
           </div>
       
        <div className="main-home-page-lower-main-container">
            
                
                <div className="container">
                    <form action="">
                        <label htmlFor="">Hello World</label>
                        <input type="text" className="form-control" />

                        <label htmlFor="">Hello World</label>
                        <input type="text" className="form-control" />

                        <label htmlFor="">Hello World</label>
                        <input type="text" className="form-control" />

                        <label htmlFor="">Hello World</label>
                        <input type="text" className="form-control" />

                        <label htmlFor="">Hello World</label>
                        <input type="text" className="form-control" />
                    </form>
                </div>


            </div>
    </div> )
}

export default Stats;