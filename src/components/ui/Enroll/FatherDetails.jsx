import React from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
import '../Enroll-form-file/File.css'

function FatherDetails() {

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

    const { register,handleSubmit } = useForm();
    const onChange = (e) => {
       const file = e.target.files[0];

    } ;
    const onSubmit = data => {
       const storageRef = app.storage().ref();
       const fileRef = storageREf.child(data.image[0].name);
       fileRef.put(data.image[0]).then(() => {
           console.log("Uploaded file");
       });
    }

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

  return (
    <div className={div}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <Link to="/enrollmo"><button className="enroll-next">Next</button></Link>

            </div>

        </form>
    </div>
  )
}

export default FatherDetails;