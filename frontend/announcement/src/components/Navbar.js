import React from 'react'
import {Link}from 'react-router-dom'


export const Navbar=()=>{
    return(
        <dev className="navbar">

        <Link to="/auth">Register/Login</Link>
        <Link to="/">Home</Link>
        
        </dev>
    )
}