import React from "react"
import './Enroll-form.css'

import { Link, useNavigate } from "react-router-dom"


export default function Enrollform(props) {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            DOB: "", 
            place: "", 
            gender: "", 
            disability: "", 
            sponsor: "", 
            phone: "", 
            insurance: "",
            nationality:"",
            religion:""

            
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


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = props.currentData
        navigate("/enrollad" , {
            state: {
                ...data,
                personalDetails: formData
            }
        })
    }
     
    return (

        <div className="enroll-form-body">
            <h3 className='enroll-form-header'>Personal Details</h3>
            <form className="form-container-this-one">

                <div className="right-form">
                <input
                    type="text"
                    placeholder="Firs tName"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="form-control"
                />
                <input
                    type="date"
                    placeholder="Date Of Birth"
                    onChange={handleChange}
                    name="DOB"
                    value={formData.DOB}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Gender"
                    onChange={handleChange}
                    name="gender"
                    value={formData.gender}
                    className="form-control"
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="form-control"
                />
                
                <input
                    type="number"
                    placeholder="Phone"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Nationality"
                    onChange={handleChange}
                    name="nationality"
                    value={formData.nationality}
                    className="form-control"
                />
            <Link to="/enrollstudent" ><button className="enroll-form-back">Back</button></Link>

                </div>
            <div className="left-form">
            <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    className="form-control"
                />
                
            <input
                    type="text"
                    placeholder="Place Of Birth"
                    onChange={handleChange}
                    name="place"
                    value={formData.place}
                    className="form-control"
                />
            
            <select
                    type="text"
                    placeholder="Disability"
                    onChange={handleChange}
                    name="disability"
                    value={formData.disability}
                    className="form-control"
                > 
                <option value="true">True</option>
                <option value="false">False</option>
                </select>
                <input
                    type="text"
                    placeholder="Sponsor"
                    onChange={handleChange}
                    name="sponsor"
                    value={formData.sponsor}
                    className="form-control"
                />
            
            
            
            <input
                    type="text"
                    placeholder="Medical Insurance"
                    onChange={handleChange}
                    name="insurance"
                    value={formData.insurance}
                    className="form-control"
                />
            
            <input
                    type="text"
                    placeholder="Religion"
                    onChange={handleChange}
                    name="religion"
                    value={formData.religion}
                    className="form-control"
                />
            <button onClick={handleSubmit} className="enroll-form-next">Next</button>
            </div>
                
            </form>
        </div>
       
    )
}
