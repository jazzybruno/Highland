import React from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react';
import '../Enroll-form-file/File.css'

function FatherDetails(props) {

    const [div , setDiv] = useState("")
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


     const [formData,setFormData] = React.useState(
       {
        name:"",
        email:"",
        ID:"",
        phone:""

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
    const handleSubmission = () => {
        const data = props.currentData
        navigate("/enrollmo" , {
            state: {
                ...data,
                father: formData

            }
        })
    }

  return (
    <div className={div}>
        <form>
            <h3 className='file-header'>Father's Details</h3>

        <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
                className="form-control"
            />
            <br/>

           <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="form-control"
            />

           <br/>

             <input
                type="text"
                placeholder="National ID"
                onChange={handleChange}
                name="ID"
                value={formData.ID}
                className="form-control"
            />
            <br/>
             <input
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
               className="form-control"
            />

            <br/>
            



            <div className="choose-file">
                {/* <p className='student-photo'>Student Photo</p> */}
                {/* <input required name ="image" type="file" onChange={onChange} /> */}
            </div>
            <div className='file-buttons'>
                <Link to="/enrollad"><button className="enroll-back">Back</button></Link>
                <button onClick={handleSubmission} className="enroll-next">Next</button>

            </div>

        </form>
    </div>
  )
}

export default FatherDetails;