import React from 'react'
import './Registration.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Registration(props) {
  const data = props.data
  const formData = new FormData()
  formData.append("level" , data.level)
  formData.append("studentYear" , data.studentData.year)
  formData.append("studentClass" , data.studentData.class)
  formData.append("studentPrevSchool" , data.studentData.preSchool)
  formData.append("image" , data.studentPhoto)
  formData.append("province" , data.address.province)
  formData.append("district" , data.address.district)
  formData.append("sector" , data.address.sector)
  formData.append("cell" , data.address.cell)
  formData.append("village" , data.address.village)
  formData.append("firstName" , data.personalDetails.firstName)
  formData.append("lastName" , data.personalDetails.lastName)
  formData.append("dateOfBirth" , data.personalDetails.DOB)
  formData.append("BirthPlace" , data.personalDetails.place)  
  formData.append("gender" , data.personalDetails.gender)
  formData.append("disablity" , data.personalDetails.disability)
  formData.append("email" , data.personalDetails.email)
  formData.append("sponsor" , data.personalDetails.sponsor)
  formData.append("phone" , data.personalDetails.phone)
  formData.append("insurance" , data.personalDetails.insurance)
  formData.append("nationality" , data.personalDetails.nationality)
  formData.append("religion" , data.personalDetails.religion)
  formData.append("fatherName" , data.father.name)
  formData.append("fatherId" , data.father.ID)
  formData.append("fatherPhone" , data.father.phone)
  formData.append("fatherEmail" , data.father.email)
  formData.append("motherName" , data.mother.name)
  formData.append("motherId" , data.mother.ID)
  formData.append("motherPhone" , data.mother.phone)
  formData.append("motherEmail" , data.mother.email)

  const navigate = useNavigate()

  const handleData = (e) => {
    
    e.preventDefault()
    console.log(data);
      const api = axios.create({
          baseURL: 'https://highland-backend.herokuapp.com/'
      })
      api.post("/admission" , formData)
      .then((res)=> {
         Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Admission Successfully Sent',
         })
         .then(()=>{
          navigate("/admission")
         })
         
      })
      .catch((err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Admission not sent Check if all fields were filled',
         })
         .then(()=>{
          navigate("/admission")
         })
      })
  }
   
  return (
    <div className='registration-body'>
        <h1 className='registration-head'>Registration fees</h1>
        <p className='registration-para'>The registration fees are 10,000 Rwandan Francs ,and canbe payed either on bank or momo: 0786793552</p>
        <p className='registration-para'>You will get a call no more than today confirming the day of interviewing the child.</p>
        <h2>You should come with the following Documents:</h2>
        <li>Student's prrevious report card for a usual student</li><br/>
        <li>The birth certificate for baby beginners</li><br/>
        <li>The confirmation that the registration fees were paid</li><br/>
        <li>The student ready for the interview</li><br/>
        <div className="finsih-registration">
       <button onClick={handleData} className='registration-finish'>Finish Enrollment</button>
        </div>
    </div>

  )
}

export default Registration