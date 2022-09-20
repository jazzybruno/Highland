import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState , useEffect } from 'react'
import "./Achieve.css"
import axios from 'axios'


function NewAchieve(props) {
      const [title , setTitle] =useState("")
      const [description , setdescription] =useState("")
     
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


    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      const achivement = {
        title : title,
        desc: description 
      }
      console.log(achivement);
        api.post("/achieve" , achivement , config   )
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
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
                name="title"
                value={title}
                className="form-control"
            />

            <br/>
            <input
                type="text"
                placeholder="descriptionription"
                onChange={(e)=>{
                    setdescription(e.target.value)
                }}
                name="description"
                value={description}
                className="form-control"
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