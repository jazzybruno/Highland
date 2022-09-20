import React from "react";
import './Stats.css'
import logo from '../../../../images/About/logo.svg'
import {BsFillFilePostFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {VscSignIn} from 'react-icons/vsc'
import {MdCreateNewFolder} from 'react-icons/md'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateStats = ( ) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [stats , setStats] = useState({})
    const [teachers , setTeachers] = useState(0)
    const [graduates , setgraduates] = useState(0)
    const [buildings , setbuildings] = useState(0)
    const [OfficeLocation , setOfficeLocation] = useState(0)
    const [students , setStudents] = useState(0)

    const navigate = useNavigate()

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
      .get("/stats", config)
      .then((res) => {
        console.log(res.data.statistics[0]);
        setStats(res.data.statistics[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = ( event ) => {
  const id = stats._id
    const data = new FormData();
    data.append("teachers", teachers);
    data.append("graduates", graduates);
    data.append("buildings", buildings);
    data.append("OfficeLocation", OfficeLocation);
    data.append("students", students);

    api
      .put(`/stats/${id}?teachers=${teachers}&graduates=${graduates}&buildings=${buildings}&OfficeLocation=${OfficeLocation}&students=${students}`, data, config)
      .then((res) => {
        Swal.fire({
            icon: 'success',
            title: 'The Statisitcs has been changed',
            showConfirmButton: false,
            timer: 5000
        })
        .then(()=>{
            window.location.href= "/stats"
        })
      })
      .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
      });
  }

  useEffect(()=>{
        getMessages()
  } , [])

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
       
        <div className="main-post-part-lower">
            <h5 className="little-title">Statistics for the School</h5>
        <div className='main-new-achievement2'>
   <div className='main-new-achievement-sub2'>
                
                <div className="container">
                    
                        <label htmlFor="">Teachers</label>
                        <input type="text" className="form-control"  onChange={(e)=>{
                            setTeachers(e.target.value)
                        }}  />

                        <label htmlFor="">Graduates</label>
                        <input type="text" className="form-control"  onChange={(e)=>{
                            setgraduates(e.target.value)
                        }} />

                        <label htmlFor="">Buildings</label>
                        <input type="text" className="form-control"  onChange={(e)=>{
                            setbuildings(e.target.value)
                        }} />

                        <label htmlFor="">Office location</label>
                        <input type="text" className="form-control"  onChange={(e)=>{
                            setOfficeLocation(e.target.value)
                        }} />

                        <label htmlFor="">Students</label>
                        <input type="text" className="form-control" onChange={(e)=>{
                            setStudents(e.target.value)
                        }} />

                        <button onClick={()=>{
                            updateHandler()
                        }}>Save</button>
                    
                </div>

           </div>
           </div>
            </div>
    </div> )
}

export default UpdateStats;