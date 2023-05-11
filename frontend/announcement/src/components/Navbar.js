import React from 'react'
import {Link}from 'react-router-dom'


export const Navbar=()=>{
    return(
        <dev className="navbar">

        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
        
        </dev>
    )
}