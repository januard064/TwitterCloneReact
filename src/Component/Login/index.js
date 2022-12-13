import React, {useState, useEffect} from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router";
import './Login.css';

function Login(){
    const akun = {
        email:"akun",
        password: "akun",
        username: "Dummy User",
        imgSource: "/assets/images/profile.jpg"
    }

    const [user, setUser] = useState();
    const [error, setError] = useState("");


    const Login = details => {
        console.log('data before cek',details);
        if(details.email == akun.email && details.password == akun.password && akun.username){
            console.log("login")
            setUser({
                email: details.email,
            })
            localStorage.setItem('DataUser',JSON.stringify(akun))
        } else{
            console.log("data not match")
            setError("Email and Password doesn't match")
        }
    }

 
    return(
        <div className="container">

            <div className="image">
                <img src="./assets/images/twitter.jpg" alt="logo" />
            </div>
            <div className="formlogin">
                {(user != null) ? (
                    <Redirect to="/home" />
                ) : (
                    <LoginForm Login={Login} error={error} />
                )}
            </div>
        </div>
    )
}

export default Login