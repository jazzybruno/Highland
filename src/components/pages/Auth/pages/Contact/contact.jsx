import React from 'react';
import logo from '../../../../images/About/logo.svg';
import test from "../../../..//images/Admission/admit.jpg"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import './contact.css'
import { InfinitySpin } from  'react-loader-spinner'

const Contact1 = () => {
    const [messages , setMessages] = useState([]);
    
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
    

    const getMessages = () => {
        api.get("/contact" , config)
        .then((res)=>{
            setMessages(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const deleteMessage = (id) => {
       api.delete(`/contact/${id}` , config)
       
       .then(()=>{  
        Swal.fire({
            icon: 'success',
            title: 'The Message has been deleted ',
            showConfirmButton: false,
            timer: 3000
          })
          .then(()=>{
            window.location.href= "/messages"
          })
    })
    .catch((err)=>{
        console.log(err);
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:"Failed to delete message",
            showConfirmButton: false,
            timer: 3000
          })
    })
    }
    useEffect(()=>{
        getMessages()
    } , [])

return(
    <div className="main-home-page-all-container-contact">
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
  <div className='main-post-part-lower'>
  { messages.length ===0 ?   <InfinitySpin 
   width='300'
   color="#4773d4"
 /> : messages.map((message , index)=>{
    return (
        <div className='main-div-message'> 
        <div className='main-div-message-upper-div'> Message from {message.name} </div>
       <div className="main-div-message-upper-div-lower">
       <div className="main-div-message-info">
       <div className='main-div-message-upper-div-name'>
            {message.name}
        </div>
        <div className='main-div-message-upper-div-email'>
            {message.email}
        </div>
        <div className='main-div-message-upper-div-phone'>
            {message.phone}
        </div>
       </div>
       <div className="main-div-message-message">
       <div className='main-div-message-upper-div-title'>
            {message.subject}
        </div>
        <div className='main-div-message-upper-div-message'>
            {message.message}
        </div>
       </div>
       </div>
       <div className="main-div-delete-button">
        <button onClick={()=>{
            deleteMessage(message._id)
        }}>Delete message</button>
       </div>
      </div>
    )
 })}

  </div>
  </div>

    )
}

export default Contact1