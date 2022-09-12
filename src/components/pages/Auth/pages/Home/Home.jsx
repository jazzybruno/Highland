import React from "react";
import './Home.css'
import logo from '../../../../images/About/logo.svg'
import {BsFillFilePostFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {VscSignIn} from 'react-icons/vsc'
import {MdCreateNewFolder} from 'react-icons/md'

const Home = ( ) =>{
    return ( <div className="main-home-page-all-container">
        <div className="main-home-page-upper-main-container">
            <img src={logo} alt="" />
            Highland School Dashboard
            <div className="links-for-navigations">
            <a href="/home">Dashboard</a>
            <a href="/posts">Posts</a>
            <a href="/post/create">New Post</a>
            <a href="/messages">Messages</a>
            <a href="/admissions">Admissions</a>
            </div>
        </div>
        <div className="main-home-page-lower-main-container">
            
                <h1>Welcome To Highland School</h1>

            <div className="main-home-page-lowe-main-container-details">
                <div className="main-home-page-lowe-main-container-details-logo"> <BsFillFilePostFill /> </div>
                <div className="main-home-page-lowe-main-container-details-description">See All Posts </div>
                <div className="main-home-page-lowe-main-container-details-link"><a href="/posts">Click Here</a></div>
            </div>

            <div className="main-home-page-lowe-main-container-details">
                <div className="main-home-page-lowe-main-container-details-logo"> <AiFillMessage /> </div>
                <div className="main-home-page-lowe-main-container-details-description"> See All Messages </div>
                <div className="main-home-page-lowe-main-container-details-link"><a href="">Click Here</a></div>
            </div>

            <div className="main-home-page-lowe-main-container-details">
                <div className="main-home-page-lowe-main-container-details-logo"> <VscSignIn /> </div>
                <div className="main-home-page-lowe-main-container-details-description"> See all Admission </div>
                <div className="main-home-page-lowe-main-container-details-link"><a href="">Click Here</a></div>
            </div>

            <div className="main-home-page-lowe-main-container-details">
                <div className="main-home-page-lowe-main-container-details-logo"> <MdCreateNewFolder /> </div>
                <div className="main-home-page-lowe-main-container-details-description"> Create New Post </div>
                <div className="main-home-page-lowe-main-container-details-link"><a href="">Click Here</a></div>
            </div>
            </div>
    </div> )
}

export default Home;