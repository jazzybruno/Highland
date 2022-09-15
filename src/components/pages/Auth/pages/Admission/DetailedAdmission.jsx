import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './Admissions.css'
import { useLocation, useNavigate } from 'react-router-dom';

const DetailedAdmission = (props) => {
    const [admission , setAdmissions] = useState([])
    const location = useLocation()
    const data = location.state
    const navigate = useNavigate()
    const getAdmission = (id) =>{
     const api = axios.create({
        baseURL: 'https://highland-backend.herokuapp.com/'
     })

     const user = JSON.parse(localStorage.getItem("user"))

     const config = {
        headers:{
            'content-type':'multipart/form-data',
            'x-auth-token': user.token
        }
    }

     api.get(`/admission/${id}` , config)
     .then((res)=>{
        const data = res.data
        console.log(data);
        setAdmissions(data)
     })
     .catch((err)=>{
        console.log(err);
     })
    }

    useEffect(()=>{
        getAdmission(data.id)
    } , [])
    
    return (
        <div className="main-container-admission-single">
            <h4>Admission Details : <span>{admission.firstName + " " + admission.lastName }</span></h4>
            <button onClick={()=>{
                navigate("/admissions")
            }}>Back to Admissions</button>
           
              <div className="main-container-both-location-details">
              <div className="main-container-admission-location">
               <div className="main-container-admission-single-image">
                <h5>Students Photo:</h5>
               <div className="main-container-lock-photo">
               <img src={admission.studentPhoto} alt="" />
               </div>
                <h5>Location Details</h5>
                <p><span>Province:</span> {admission.province}</p>
                <p><span>District:</span> {admission.district}</p>
                <p><span>Sector:</span> {admission.sector}</p>
                <p><span>Cell:</span>  {admission.cell}</p>
                <p><span>Village:</span>  {admission.village}</p>
               </div>
              </div>

              <div className="main-container-admission-single-personal-details">
                <h5>Personal Details:</h5>
                  <p><span>First Name:</span> {admission.firstName}</p>
                  <p><span>Last Name:</span> {admission.lastName}</p>
                  <p><span>Email:</span> {admission.email}</p>
                  <p><span>Date Of Birth:</span> {admission.dateOfBirth}</p>
                  <p><span>Gender:</span> {admission.gender}</p>
                  <p><span>Insurance:</span> {admission.insurance}</p>
                  <p><span>Birth Place:</span> {admission.BirthPlace}</p>
                  {/* <p><span>Disability:</span> {admission.disablity}</p> */}
                  <p><span>Nationlaity:</span> {admission.nationality}</p>
                  <p><span>Phone:</span> {admission.phone}</p>
                  <p><span>Religion:</span> {admission.religion}</p>
                  <p><span>Level:</span> {admission.level}</p>
               </div>
               <div className="main-container-both-location-details-parents">
               <div className="main-container-admission-father">
                <h5>Father Details</h5>
                <p><span>Name:</span> {admission.fatherName}</p>
                <p><span>ID:</span> {admission.fatherId}</p>
                <p><span>Phone:</span> {admission.fatherPhone}</p>
                <p><span>Email:</span> {admission.fatherEmail}</p>
               </div>
               <div className="main-container-admission-mother">
                <h5>Mother Details</h5>
                <p><span>Name:</span> {admission.motherName}</p>
                <p><span>ID:</span> {admission.motherId}</p>
                <p><span>Phone:</span> {admission.motherPhone}</p>
                <p><span>Email:</span> {admission.motherEmail}</p>
               </div>
               </div>
            </div>
        </div>
    )
}

export default DetailedAdmission