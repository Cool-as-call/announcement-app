import React from "react";
import { useState } from "react";
import axios from "axios";


 const CreateAnnouncement=()=>{
    const[announcement,setAnnouncement]=useState({
        announcementName:"",
        descriptions:"",
        imageUrl:"",
        phoneNumber:""
    })


     const handleChange=(event)=>{
const {name,value}=event.target
setAnnouncement({...announcement,[name]:value})
     }


     

/*
     const handeleDescriptionsChange=(event,index)=>{
        const {value}=event.target
        const ing=announcement.descriptions
        ing[index]=value
        setAnnouncement({...announcement,descriptions:ing})
        console.log(announcement)
             }
     
     

     const addDescription=()=>{
        setAnnouncement({...announcement,descriptions:[...announcement.descriptions,""]})
     }
*/

     const onSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:5000/saved", announcement);
          alert("Announcement Created");
        } catch (err) {
          console.log(err);
        }
      };


    return (
    <div className="createAnnouncement" >
      <div className="login-box">
        
            <form onSubmit={onSubmit}>
            <h2>
            Create Announcement  </h2>
              <div className="user-box">
                <label htmlFor="announcementName"></label>
                <input 
                type="text"  
                id="announcementName" 
                name="announcementName" 
                onChange={handleChange} 
                placeholder="Announcement Name"/>
              </div>

              <div className="user-box">
                <label htmlFor="descriptons"></label>
                <input 
                type="text" 
                name="descriptions" 
                id="descriptions"  
                onChange={handleChange} 
                placeholder="Desciptions" />
              </div>

              <div className="user-box">
                <label htmlFor="imageUrl"></label>
                <input 
                type="url" 
                name="imageURL" 
                id="imageURL"  
                onChange={handleChange} 
                placeholder="Image URL" />
              </div>
              
              <div className="user-box">
                <label htmlFor="phoneNumber"></label>
                <input 
                type="number" 
                name="phoneNumber" 
                id="phoneNumber"  
                onChange={handleChange} 
                placeholder="Phone Number"/>
              </div>

                <button onClick={onSubmit} type="submit">Create Announcement</button>
              
            </form>
     
      </div>
     </div>
    )
}

export default CreateAnnouncement;