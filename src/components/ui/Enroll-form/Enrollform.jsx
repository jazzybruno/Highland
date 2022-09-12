import React from "react"
import './Enroll-form.css'

import { Link } from "react-router-dom"


export default function Enrollform() {
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
    
    return (

        <div className="enroll-form-body">
            <h3 className='enroll-form-header'>Personal Details</h3>
            <form className="form-container">

            
                <div className="right-form">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Date Of Birth"
                    onChange={handleChange}
                    name="DOB"
                    value={formData.DOB}
                />
                <input
                    type="text"
                    placeholder="Gender"
                    onChange={handleChange}
                    name="gender"
                    value={formData.gender}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                
                <input
                    type="number"
                    placeholder="Phone"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                />
                <input
                    type="text"
                    placeholder="Nationality"
                    onChange={handleChange}
                    name="nationality"
                    value={formData.nationality}
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
                />
                
            <input
                    type="text"
                    placeholder="Place Of Birth"
                    onChange={handleChange}
                    name="place"
                    value={formData.place}
                />
            
            <input
                    type="text"
                    placeholder="Disability"
                    onChange={handleChange}
                    name="disability"
                    value={formData.disability}
                />
                <input
                    type="text"
                    placeholder="Sponsor"
                    onChange={handleChange}
                    name="sponsor"
                    value={formData.sponsor}
                />
            
            
            
            <input
                    type="text"
                    placeholder="Medical Insurance"
                    onChange={handleChange}
                    name="insurance"
                    value={formData.insurance}
                />
            
            <input
                    type="text"
                    placeholder="Religion"
                    onChange={handleChange}
                    name="religion"
                    value={formData.religion}
                />
            <Link to="/enrollad" ><button className="enroll-form-next">Next</button></Link>
            </div>
                
            </form>
        </div>
       
    )
}
