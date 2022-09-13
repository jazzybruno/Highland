import React from "react";
import { useState } from "react";
import "./form.css";
import tiltle from '../../images/About/title.svg'
import axios from 'axios'

const Form = ()=>{

    const api = axios.create({
        baseURL: "https://highland-backend.herokuapp.com/"
    })

    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")
    const [email , setEmail] = useState("")
    const [subject , setSubject] = useState("")
    const [message , setMessage] = useState("")
    const [status , setStatus] = useState("")
    const [classname , setClassname] = useState("")
    const[submitted,setSubmitted] = useState(false);


     const handleFormSubmit = (event) => {
         event.preventDefault();
         const formData = {
        name,
        phone,
        email,
        subject,
        message
         }
         setSubmitted(true);

         api.post("/contact" , formData)
         .then((res)=>{
            setStatus("The message was sent successfull")
            setClassname("success-message")
         })
         .catch((err)=>{
            console.log(err);
            setStatus("The message was not sent successfull")
            setClassname("failure-message")
         })
     };
     
    
    return(
        <div className="contact-form">
            <div className="contact-form-header"> 
            <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text"> Contact Us  </div>
              </div>
             </div> 
        <div className="contact-form-details">
            
               <div className="contact-form-details-map">
                
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.008649386626!2d30.0864765142375!3d-2.1503754377843074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c355704e5b8747%3A0xf721562a915be8e9!2sHighland%20School!5e0!3m2!1sen!2srw!4v1659525960435!5m2!1sen!2srw" width="600" height="450" style={{border: "0"}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>   
               <div className="contact-form-details-form">
                
                {/* the start of the form  */}

                <div className='form-container-unique'>
                    <h3>Get in Touch</h3>
        <form className='register-form'>
            {submitted ? <div className={classname}>{status}</div>:null}
        {/* <img src={name} alt="call"  className='form-svg'/> */}
            
            {/* the first 2 inputs are for the name and number */}
                     
                     <div className="first-contact-inputs">
                     <input
            value={name}
            className='form-name'
            placeholder='Your name'
            name='name'
            onChange={
                (e)=>{
                setName(e.target.value)
                }
            }
            />
            {/* <img src={call} alt="call"  className='form-svg'/> */}
            <input
            value={phone}
            className='form-number'
            placeholder='Telephone number'
            name='number'
            onChange={
                (e)=>{
                setPhone(e.target.value)
                }
            }
            />
                     </div>
            {/* the first 2 inputs are for the name and number */}
            

            {/* <img src={mail} alt="call"  className='form-svg'/> */}
            <input
            value={email}
            className='form-field'
            placeholder='Email address'
            name='mail'
            onChange={
                (e)=>{
                setEmail(e.target.value)
                }
            }
            /><br/>
            {/* <img src={subject} alt="call"  className='form-svg'/> */}
            <input
            value={subject}
            className='form-field'
            placeholder='Subject'
            name='subject'
            onChange={
                (e)=>{
                setSubject(e.target.value)
                }
            }
            /><br/>
             {/* <img src={message} alt="call"  className='form-svgg'/> */}
            <textarea
            value={message}
            className='form-field-textarea'
            placeholder='Your message'
            name='message'
            onChange={
                (e)=>{
                setMessage(e.target.value)
                }
            }
            /><br/>
            <div className="form-button-submit-container">
                <button className='form-button-submit' onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
    </div>

                {/* the end of the form  */}
                
                </div>    

             </div>
        </div>
    )
}

export default Form;
