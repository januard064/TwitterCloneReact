import React,{useState} from "react";
import './Login.css';

function LoginForm({ Login, error }){
    const [details, setDetails] = useState({email:"", password:""})
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <div className="formlogins"> 
          <h1>Happening now</h1>
                <form onSubmit={submitHandler}>
                    <div className="form">
                        
                        <div className="emails">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}></input>
                        </div>
                        <div className="passwords">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}></input>
                        </div>
                        {(error != "") ? ( 
                            <div className="danger">{error}</div>
                        ): ""}
                        <input className="login" type="submit" value="Login" />
                    </div>
                </form>
                
        </div>
    )
}

export default LoginForm;