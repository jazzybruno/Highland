import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState , useEffect } from 'react'
import "./Achieve.css"
import axios from 'axios'
import Swal from 'sweetalert2'


function NewAchieve(props) {
      const [title , setTitle] =useState("")
      const [description , setdescription] =useState("")
     
    const user = JSON.parse(localStorage.getItem("user"));

  const api = axios.create({
    baseURL: "https://highland-backend.herokuapp.com/",
    // baseURL: "http://localhost:3000/",
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "x-auth-token": user.token,
    },
  };


    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      let achivement = {
        title : title,
        desc: description 
      }
  
        api.post(`/achieve?title=${title}&desc=${description}` , achivement , config)
        .then(res=>{
          Swal.fire({
            icon: 'success',
            title: 'The Achievement has been saved ',
            showConfirmButton: false,
            timer: 5000
        })
        .then(()=>{
            window.location.href= "/achieve"
        })
        })
        .catch(err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        })
    }

  return (
   <div className='main-new-achievement'>
   <div className='main-new-achievement-sub'>
     <div className="container">
        <form >
            <h3 className='file-header'>Achievement Details</h3>

        <input
                type="text"
                placeholder="Title"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                // name="title"
                value={title}
                className="form-control"
                required
            />

            <br/>
            <input
                type="text"
                placeholder="description"
                onChange={(e)=>{
                    setdescription(e.target.value)
                }}
                // name="description"
                value={description}
                className="form-control"
                required
            />
           
           <br />

            <div className='file-buttons'>
                <Link to="/achieve"><button className="enroll-back">Back</button></Link>
               <button onClick={handleSubmit} className="enroll-next">Register</button>

            </div>

        </form>
    </div>
    </div>
   </div>
  )
}

export default NewAchieve