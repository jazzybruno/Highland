import React from "react";
import "./Achieve.css";
import logo from "../../../../images/About/logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Achievements from "../../../../ui/Achievement/Achievement";
import Swal from "sweetalert2";

const Achieve = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [achievements, setAchievements] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const api = axios.create({
    baseURL: "https://highland-backend.herokuapp.com/",
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "x-auth-token": user.token,
    },
  };

  const getMessages = () => {
    api
      .get("/achieve", config)
      .then((res) => {
        console.log(res);
        setAchievements(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAchievement = (id) => {
    api.delete(`/achieve/${id}`, config)
    .then((res)=>{
        console.log(res);
        Swal.fire({
            icon: 'success',
            title: 'The Achievement has been deleted ',
            showConfirmButton: false,
            timer: 3000
        })
        .then(()=>{
            window.location.href= "/achievements"
        })
    })
    .catch((err)=>{
        console.log(err);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    })
  }

  useEffect(() => {
    getMessages();
  } , []);
 
  return (
    <div className="main-home-page-all-container">
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
          <a href="/homw">
            <img src={logo} alt="logo" className="nav-logo" />
          </a>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/posts">Posts</a>
            <a href="/posts/create">New Post</a>
            <a href="/messages">Messages</a>
            <a href="/Admissions">Admissions</a>
            <a href="/stats">Statistics</a>
            <a href="/achieve">Achievements</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-home-page-lower-main-container">
        {achievements.map((achievement , index) => {
          return (
            <div key={index} className="achievements-details">
              <div className="achievements-details-title">{achievement.title}</div>
              <div className="achievements-details-message">{achievement.desc}</div>
              <div className="achievements-details-button"><button onClick={()=>{
                    deleteAchievement(achievement._id)
              }}>Delete</button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achieve;
