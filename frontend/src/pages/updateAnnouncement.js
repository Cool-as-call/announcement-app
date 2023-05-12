import React, { useState } from "react";
import axios from "axios";

var Updateannouncement = (props) => {

const [show,handleShow]=useState(false)

const [announcementNameup,setannouncementNameup]=useState(props.e.announcementName)
const [descriptionup,setdescriptionup]=useState(props.e.description)
const [imageURLup,setimageURLup]=useState(props.e.imageURL)
const[phoneNumberup,setphoneNumberup]=useState(props.e.phoneNumberup)

// console.log(announcementNameup,descriptionsup,imageURLup,quantiteup)

axios.put(`http://localhost:5000/announcement/${announcementName}`, {
  announcementName: announcementNameup,
  description: descriptionup,
  imageURL: imageURLup,
  phoneNumber: phoneNumberup,
})
    .then((res) => {
        console.log(res)
      })
    .catch(err => {
        console.log(err)
      })
      props.setre(!props.re)
  }
  return (
    <div className="updatemobile">
        <button onClick={()=>handleShow(!show)} >Update</button>
        {show ? (
  <div>
    <input type="text" placeholder="announcementName" onChange={(e) => setannouncementNameup(e.target.value)} />
    <input type="text" placeholder="description" onChange={(e) => setdescriptionup(e.target.value)} />
    <input type="text" placeholder="imageURL" onChange={(e) => setimageURLup(e.target.value)} />
    <input type="number" placeholder="phoneNumber" onChange={(e) => setphoneNumberup(e.target.value)} />
    <button onClick={() => up(props.e.announcementName)}>submit</button>
  </div>
) : <div></div>}
    

    </div>


  )




export default Updateannouncement;