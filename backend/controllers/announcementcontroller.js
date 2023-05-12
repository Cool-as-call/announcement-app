const mongoose = require('mongoose');
const express = require('express')
const announ =require('../models/announcementModel')

module.exports.getAnnouncement = async (req, res) => {
    try{
        const data = await announ.find()
        res.status(201).json(data);
    }catch(err){
        res.status(500).json({message:"error"})
    console.log(err)}
}

module.exports.saveAnnouncement = async (req, res) => {
  const data = await announ.find();
  const { announcementName, descriptions, imageURL, phoneNumber } = req.body;

  try {
    await announ.create({
      announcementName: announcementName,
      descriptions: descriptions,
      imageURL: imageURL,
      phoneNumber:phoneNumber,
    });
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};


module.exports.updateAnnouncement = async (req, res) => {
  try {
    const { descriptions } = req.body;
    const announcementName = req.params.announcementName;
    const result = await announ.updateOne({ announcementName }, { descriptions });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
  };


  module.exports.deletAnnouncement = async (req, res) => {
    
    try {
      const announcementName= req.params.announcementName;
      const result = await announ.findOneAndDelete({ announcementName });
      console.log(result);
      res.status(201).send("Deleted successfully...");
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
};



