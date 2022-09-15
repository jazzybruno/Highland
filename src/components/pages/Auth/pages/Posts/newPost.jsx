import React from 'react';
import './Posts.css';
import logo from '../../../../images/About/logo.svg';
import test from "../../../..//images/Admission/admit.jpg"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const NewPost = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [file , setFile] = useState("");
    const [photo , setPhoto] = useState("");
    const [image , setImage] = useState(null)
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("")
    const [status , setStatus] = useState("Post")

     const formHandler = (e) => {
        e.preventDefault()
        setStatus("Posting ....")
        const user = JSON.parse(localStorage.getItem("user"))
        const formData = new FormData();
        formData.append("image", photo);
        formData.append("title", title);
        formData.append("content", content);
        const config = {
            headers:{
                'content-type':'multipart/form-data',
                'x-auth-token': user.token
            }
        }
        
        const api = axios.create({
            baseURL: 'https://highland-backend.herokuapp.com/'
        })
          
        api.post("/post", formData, config)

        .then((res)=>{
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 3000
              })
              .then(()=>{
                window.location.href= "/posts"
              })
        })
        .catch((err)=>{
            console.log(err);
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
                showConfirmButton: false,
                timer: 3000
              })
        })
     }
 
    return (
        <div className="main-post-part">
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
            <div className="main-post-part-lower"> 
             <div className="main-post-part-form">
                <h4>Create a new post</h4>
                <form action="" onSubmit={formHandler}>
                    <div className='two-flex-divs'>
                    <div>
                    <label htmlFor="">Title </label>
                    <input type="text" value={title} placeholder='Enter the title'  className='title-post' onChange={e => {
                        setTitle(e.target.value)
                    }}/>
                    </div>
                    
                    <div>

                    <label htmlFor="">Image</label>
                    <input type="file" name="" id="" accept='image/*' onChange={(e) => {
                        const reader = new FileReader();
                        reader.onload = ( ) => {
                             if(reader.readyState === 2){
                                setFile(reader.result)
                                setImage(true)
                             }
                        }

                        reader.readAsDataURL(e.target.files[0])
                        setPhoto(e.target.files[0])
                    }} />
                    </div>
                    </div>
                 
                    
                    <div className='post-div-textare'>
                    <div className='label-for-textare'><label htmlFor="">Content </label></div>
                    <textarea name="" id="" cols="80" rows="3" className='textarea-post' value={content} placeholder='Enter the content' onChange={e => {
                        setContent(e.target.value)
                    }}></textarea> 
                    <div className='main-post-form'> <input type="submit" value={status}  /></div>
                    </div>

                    {
                    image ? <div className="photo-dynamic-preview">
                    <img src={file} alt="" />
                </div> : null
                }
                    
                </form>
                
             </div>
            </div>
        </div>
    )
}

export default NewPost