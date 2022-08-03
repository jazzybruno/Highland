import React from "react";
import { useState } from "react";
import "./form.css";
import tiltle from '../../images/About/title.svg'

const Form = ()=>{

    const[values,setValues] = useState({
        name:"",
        number:"",
        mail:"",
        subject:"",
        message:''
     });
     const handleFormSubmit = (event) => {
         event.preventDefault();
         setSubmitted(true);
     };
     const[submitted,setSubmitted] = useState(false);
     const handleChange = (event) => {
         setValues({
             ...values,
             [event.target.name] : event.target.value,
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

                <div className='form-container'>
                    <h3>Get in Touch</h3>
        <form className='register-form'>
            {submitted ? <div className='success-message'>Success! Thank you for registering</div>:null}
        {/* <img src={name} alt="call"  className='form-svg'/> */}
            
            {/* the first 2 inputs are for the name and number */}
                     
                     <div className="first-contact-inputs">
                     <input
            value={values.name}
            className='form-name'
            placeholder='Your name'
            name='name'
            onChange={handleChange}
            />
            {/* <img src={call} alt="call"  className='form-svg'/> */}
            <input
            value={values.number}
            className='form-number'
            placeholder='Telephone number'
            name='number'
            onChange={handleChange}
            />
                     </div>
            {/* the first 2 inputs are for the name and number */}
            

            {/* <img src={mail} alt="call"  className='form-svg'/> */}
            <input
            value={values.mail}
            className='form-field'
            placeholder='Email address'
            name='mail'
            onChange={handleChange}
            /><br/>
            {/* <img src={subject} alt="call"  className='form-svg'/> */}
            <input
            value={values.subject}
            className='form-field'
            placeholder='Subject'
            name='subject'
            onChange={handleChange}
            /><br/>
             {/* <img src={message} alt="call"  className='form-svgg'/> */}
            <textarea
            value={values.message}
            className='form-field-textarea'
            placeholder='Your message'
            name='message'
            onChange={handleChange}
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