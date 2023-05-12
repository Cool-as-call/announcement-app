import React, {  useState } from "react"
import axios from "axios"
import { useCookies } from 'react-cookie'
import{useNavigate} from "react-router-dom"


export const Authentication =()=>{
    return(
        <div className="auth">
           <Register />
           <Login />
        </div>
    )
};

// to evoide the repetion for  the form of login and register 
export const Form =({username,setUsername,password,setpassword ,label,onSubmit})=>{
    return(
        <div className="authentication">
            
            <form onSubmit={onSubmit}>
            <h1>{label}</h1>
                <div className="form" >
                    <label htmlFor="username">User Name</label>
                <input type="text"
                 className="username"
                 placeholder="Username"
                 value={username}
                  onChange={(event)=> setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                <input type="password"
                 className="password" 
                 value={password}
                 placeholder="password"
                  onChange={(event)=>setpassword(event.target.value)} />
                </div>
                <button type="submit">{label}</button>
            </form>
            
        </div>
    )
};






const Register=()=>{
   const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")

    const onSubmit= async (event)=>{
        event.preventDefault()
       try{
        await axios.post("http://localhost:4000/auth/register",{username,password});
        alert("Registration completed");

       }
       catch(err){
        console.log(err);
}    }
    return(
            
        <Form username={username} setUsername={setUsername} password={password} setpassword={setpassword}
         label={"Register"} onSubmit={onSubmit}/>
    )
};


const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const [,setCookies]=useCookies(["acces token"])
    const navigate=useNavigate()

    const onSubmit= async (event)=>{
          // refresh the page
        event.preventDefault();
        try{
            const response=  await axios.post("http://localhost:4000/auth/login",{username,password});
        // when we handel the registration request we goona send the object of username and password that we have passed ,
        // in case it's work we goona send alert
            console.log(response)

            setCookies("acces token",response.data.token)
            window.localStorage.setItem("userID",response.data.user)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    };

    return(
        <Form username={username} setUsername={setUsername} password={password} setpassword={setpassword } 
    label={"Login"} onSubmit={onSubmit}/>
    )};

