import React, { useState } from "react";
import axios from "axios";

const UpdateAnnouncement = ({ announcement, handleClose }) => {
  const [announcementName, setAnnouncementName] = useState(announcement.announcementName);
  const [imageURL, setImageURL] = useState(announcement.imageURL);
  const [descriptions, setDescriptions] = useState(announcement.descriptions);
  const [phoneNumber, setPhoneNumber] = useState(announcement.phoneNumber);

  const handleUpdateAnnouncement = async (e) => {
    e.preventDefault();
    const updatedAnnouncement = { announcementName, imageURL, descriptions, phoneNumber };
    try {
      const response = await axios.put(`http://localhost:5000/announcement/${announcement.announcementName}`, updatedAnnouncement);
      console.log(response.data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleUpdateAnnouncement}>
          <label>
            Announcement Name:
            <input type="text" value={announcementName} onChange={(e) => setAnnouncementName(e.target.value)} />
          </label>
          <br />
          <label>
            Image URL:
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
          </label>
          <br />
          <label>
            Descriptions:
            <input type="text" value={descriptions} onChange={(e) => setDescriptions(e.target.value)} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <br />
          <button type="submit">Update Announcement</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAnnouncement;
