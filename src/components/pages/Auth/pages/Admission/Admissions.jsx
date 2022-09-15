import React from 'react';
import logo from '../../../../images/About/logo.svg';
import test from "../../../..//images/Admission/admit.jpg"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import './Admissions.css'
import { InfinitySpin } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

const Admissions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [admissions , setAdmissions] = useState([]);
    const navigate = useNavigate()
    
    const user = JSON.parse(localStorage.getItem("user"))

    const api = axios.create({
        baseURL: 'https://highland-backend.herokuapp.com/'
    })

    const config = {
        headers:{
            'content-type':'multipart/form-data',
            'x-auth-token': user.token
        }
    }
    

    const getAdmissions = () => {
        api.get("/admission" , config)
        .then((res)=>{
            console.log(res);
            setAdmissions(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // const deleteMessage = (id) => {
    //    api.delete(`/contact/${id}` , config)
       
    //    .then(()=>{  
    //     Swal.fire({
    //         icon: 'success',
    //         title: 'The Message has been deleted ',
    //         showConfirmButton: false,
    //         timer: 3000
    //       })
    //       .then(()=>{
    //         window.location.href= "/messages"
    //       })
    // })
    // .catch((err)=>{
    //     console.log(err);
        
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text:"Failed to delete message",
    //         showConfirmButton: false,
    //         timer: 3000
    //       })
    // })
    // }

    useEffect(()=>{
        getAdmissions()
    } , [])

return(
    <div className="main-home-page-all-container-contact">
     <div className="main-home-page-upper-main-container"> 
        <img src={logo} alt="" />
            Highland School 
            <div className="links-for-navigations">
            <a href="/home">Dashboard</a>
            <a href="/posts">Posts</a>
            <a href="/post/create">New Post</a>
            <a href="/messages">Messages</a>
            <a href="/admissions">Admissions</a>
            </div>
           </div>

           <div className="main-home-page-upper-main-container1"> 
            <div className="Navbar">
       <a href="/home"><img src={logo} alt="logo" className="nav-logo" /></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Dashboard</a>
        <a href="/posts">Posts</a>
        <a href="/post/create">New Post</a>
        <a href="/messages">Messages</a>
        <a href="/Admissions">Admissions</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
           </div>
  <div className='main-post-part-lower'>
  { admissions.length ===0 ?   <InfinitySpin 
   width='300'
   color="#4773d4"
 /> : admissions.map((admission , index) => {
    return (
        <div className="main-admission-part-div">
          <div className="main-admission-part-img">
            <img src={admission.studentPhoto} alt="img of the student" />
          </div>
          <div className="main-admission-part-info">
            <div className='main-class-some-few-info'><h6>Personal Info</h6>
             <p><span>Name:</span>{admission.firstName + " " + admission.lastName}</p>
             <p><span>Email:</span>{admission.email}</p>
            </div>
            <div className='main-class-some-few-info'><h6>Father Info</h6>
             <p><span>Name:</span>{admission.fatherName}</p>
             <p><span>Phone:</span>{admission.fatherPhone}6</p>
            </div>
            <div className='main-class-some-few-info'>
              <button onClick={()=>{
                navigate("/admit" , {
                    state: {
                        id : admission._id
                    }
                })
              }}>Detailes</button>
              </div>
          </div>
 </div>
    )
 })
  }
  </div>
  </div>

    )
}

export default Admissions