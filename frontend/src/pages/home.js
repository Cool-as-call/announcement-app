import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Updateannouncement from "./updateAnnouncement";

 const Home=()=>{
    const [announcements, setAnnouncements] = useState([]);
    
  
    
  
    useEffect(() => {
      const fetchAnnouncements = async () => {
        try {
          const response = await axios.get("http://localhost:5000");
          setAnnouncements(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAnnouncements();
    }, []);
  

    
    const deleteAnnouncement = async (announcementName) => {
      try {
        await axios.delete(`http://localhost:5000/announcement/${announcementName}`);
        const newAnnouncements = announcements.filter((announcement) => announcement.announcementName !== announcementName);
        setAnnouncements(newAnnouncements);
      } catch (err) {
        console.log(err);
      }
    };
    
    
  
    return (
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>All Announcements</h1>
        
          {announcements.map((announcement) => (
            <div key={announcement.announcementName} style={{ flex: "0 0 25%" }}>
        
              
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        />
              <CardContent>
              <div>
                <h2>{announcement.announcementName}</h2>              
              </div>
             
              <img src={announcement.imageURL} alt={announcement.announcementName} />

              <Typography variant="body2" color="text.secondary">
              <div className="Descriptions">
                <h4>{announcement.descriptions}</h4>
              </div>
              </Typography>

              <p>Phone Number: {announcement.phoneNumber}</p>
              <button onClick={() => deleteAnnouncement(announcement.announcementName)}>&times;</button>
              <button onClick={() => deleteAnnouncement(announcement.announcementName)}>&times;</button>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
          ))}
          
        
      </div>
    );
}
export default Home;