const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const Model=require('../models/users')

const userRouter = express.Router();


userRouter.post('/register', async (req, res) => {
  const { username, password } = req.body;
  // Check if the username or password is empty
  if (!username || !password) {
      return res.json({message: "Please PROVIDE both Username and Password" });
  }
  try {
      const existingUser = await Model.findOne({ username });
      if (existingUser) {
          return res.json({message: "User already EXISTS" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
    const newUser =new Model({ username, password: hashedPassword });
      await newUser.save();
      res.json({message: "User registered SuCceSsfullY" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to register Username" });
  }
});


userRouter.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
      const user =await Model.findOne({ username });
      if (!user) {
          return res.json({ message: "Invalid credentials" }) }
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
            return res.json({ message: "Invalid Credentials" })}
      const token = jwt.sign({ id: user._id }, "Secret");
      res.json({ token, userID: user._id });
  }catch (err) {
      console.error(err);
      res.status(500).json({message: "Failed to Login" });
  }
});














module.exports=userRouter