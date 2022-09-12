import React from 'react'
import './forms.css'
import logo from "../../../images/About/logo.svg"
import { useState } from 'react'
import axios from 'axios'

const Forms = () => {
    const [email ,SetEmail ] = useState("")
    const [password , SetPassword] = useState("")
    const [error , SetError] = useState("")
    const [submitted , setSubmitted] = useState("Login")

    const api = axios.create({
        baseURL: "https://highland-backend.herokuapp.com/"
    })


    const loginHandle = (e) => {
        e.preventDefault();
        setSubmitted("Loading...")
        const values = {
            email : email,
            password : password
        }
        console.log(values);

        api.post("/user/login" , values)
           .then((res)=>{
            const user = JSON.stringify(res.data)
            localStorage.setItem('user' , user)
            
            window.location.href = "/home"
           })
           .catch((err)=> {
            console.log(err);
            const error =  JSON.stringify(err.response.data.msg)
            SetError(error)
            setSubmitted("Login")
           })

           SetEmail("")
           SetPassword("")

    }

    return ( <div>
        <div className="main-form-start">
            <div className="main-form-start-image">
                <img src={logo} alt="" />
            </div>

            <div className="main-form-start-forms">
                <p>Login Highland School </p>
                <span className='main-message-validation'>{error}</span>
                <form action="" onSubmit={loginHandle}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} onChange={(e) => {
                        SetEmail(e.target.value)
                    }}  placeholder="Enter the email"/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter the password" value={password} onChange={(e) => {
                        SetPassword(e.target.value)
                    }}/>
                    <input type="submit" value={submitted} className='submit-button-highland' />
                </form>
            </div>
        </div>
    </div>)
}

export default Forms