import React from 'react';
import './Posts.css';
import logo from '../../../../images/About/logo.svg';
import test from "../../../..//images/Admission/admit.jpg"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { InfinitySpin } from  'react-loader-spinner'

const Post = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [posts , setPosts] = useState([])

    const api = axios.create({
        baseURL: 'https://highland-backend.herokuapp.com/'
    })

    const getPosts = () => {
        api.get('/post')
        .then(res => {
            setPosts(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        }
        )
    }


    const deleteHandler = (id) => {
        const user = JSON.parse(localStorage.getItem("user"))
        const config = {
            headers:{
                'content-type':'multipart/form-data',
                'x-auth-token': user.token
            }
        }
        
        const api = axios.create({
            baseURL: 'https://highland-backend.herokuapp.com/'
        })
          
        api.delete(`/post/${id}`, config)
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'The Post has been deleted ',
                showConfirmButton: false,
                timer: 3000
              })
              .then(()=>{
                window.location.href= "/posts"
                console.log("Hello World");
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
              console.log("Hello World");
        })
        
    }
     


     useEffect(()=>{
        getPosts()
     } , [])

    return (
        <div className="main-post-part">
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
       <a href="/home"><img src={logo} alt="logo" className="nav-logo" /></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/posts">Posts</a>
        <a href="/post/create">New Post</a>
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
            <h3>The list of all Posts</h3>
           { posts.length === 0 ? 
   <div className='spinner'>
    <InfinitySpin 
   width='300'
   color="#4773d4"
 />
   </div>

      :
            posts.map((post)=>{
                return (
                    <div className="post-container">
                    <div className="post-img">
                        <img src={post.photo} alt="jon" />
                    </div>
                    <div className="post-title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-content">
                        <p>
                            {post.content}
                        </p>
                    </div>
                    <div className="post-actions">
                        {/* <button className='button-edit-post'>Edit</button> */}
                        <button className='button-delete-post' onClick={()=>{
                            return deleteHandler(post._id)
                        }}>Delete</button>
                    </div>
                </div>
                )
            })
           }
            </div>
        </div>
    )
}

export default Post