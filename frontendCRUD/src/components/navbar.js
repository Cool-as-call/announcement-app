/*
import React from "react";
import { Link } from "react-router-dom";

 const Navbar=function(){
    return <div className="navbar"> 
    <Link to="/">Home</Link> 
    <Link to="/CreateAnnonuncement">CreateAnnouncement</Link>
    </div>

}
export default Navbar ;
*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Announcement App
          </Typography>

     <div className="content">
          <Button color="inherit"><Link to="/createAnnouncement">Create Announcement</Link></Button>
      </div>

          </Toolbar>
      </AppBar>
    </Box>
  );
}



<IconButton
size="large"
edge="start"
color="inherit"
aria-label="menu"
sx={{ mr: 2 }}
>
<MenuIcon />
</IconButton>
