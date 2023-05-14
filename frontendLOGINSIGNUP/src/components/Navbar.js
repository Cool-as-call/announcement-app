import React from 'react'
import {Link}from 'react-router-dom'


export const Navbar=()=>{
    return(
        <dev className="navbar">
<div>
    <h3>
        This website is an announcement website if you want entry you can complete the necessary information
    </h3>
    </div>
        <Link to="/auth">Register/Login</Link>
        
        
        </dev>
    )
}