import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate } from "react-router-dom"
import './File.css'

function file(props) {
    const [div , setDiv] = useState("")
    const [photo , setPhoto] = useState("")
    var w = window.innerWidth;
    function setClassName(w) {    
        if(w > 540){
            setDiv("file-form")
        }else{
            setDiv("container")
        }
    }

    useEffect(()=>{
        setClassName(w)
    } , [w])

    const { register,handleSubmit } = useForm();
     const onChange = (e) => {
        const file = e.target.files[0];

     } ;
     const [formData,setFormData] = React.useState(
       {
        year:"",
        class:"",
        preSchool:""
       } 
     )
     function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
       
    }

     const navigate = useNavigate()

    const handleSubmission = (e) => {
        const data = props.currentData
        e.preventDefault()
        navigate('/enrollper' , {
            state: {
                ...data,
                studentData : formData,
                studentPhoto: photo
            }
        })
    }

  return (
    <div className={div}>
        <form>
          <div className="container">
          <h3 className='file-header'>Student's Details</h3>

<div className="form-group">
<input
       type="text"
       placeholder="Year"
       onChange={handleChange}
       name="year"
       value={formData.year}
       className="form-control"
   />
</div>
   <br/>

   <div className="form-group">
   <input
       type="text"
       placeholder="Class"
       onChange={handleChange}
       name="class"
       value={formData.class}
       className="form-control"
   />
   </div>

  <br/>

 
    <div className="form-group">
    <input
       type="text"
       placeholder="Previous School"
       onChange={handleChange}
       name="preSchool"
       value={formData.preSchool}
       className="form-control"
   />
    </div>

   <br/>
   




   <div className="choose-file">
       <p className='student-photo'>Student Photo</p>
       <input required name ="image" type="file" onChange={(e) => {
                        const reader = new FileReader();
                        reader.onload = ( ) => {
                             if(reader.readyState === 2){
                             }
                        }

                        reader.readAsDataURL(e.target.files[0])
                        setPhoto(e.target.files[0])
                    }}   />
   </div>
   <div className='file-buttons'>
   <Link to="/enroll"><button className="enroll-back">Back</button></Link>
   <button onClick={handleSubmission} className="enroll-next">Next</button>

   </div>
          </div>

        </form>
    </div>
  )
}


export default file;

