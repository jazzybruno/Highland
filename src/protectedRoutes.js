import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const useAuth = () => {
    const user = { loggedin: true}
    const userObject = JSON.parse(localStorage.getItem("user")) 

    if(!userObject){
        return user.loggedin = false
    }

    const token = userObject.token
    if(!token){
        return user.loggedin = false
    }
     
    return user && user.loggedin
}



const ProtectedRoutes = ( )  => {

    useEffect(()=>{
        useAuth()
        } , [])

     const isAuth = useAuth();
     return isAuth
}

export default ProtectedRoutes