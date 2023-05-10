const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const Model=require('../models/users')

const userRouter = express.Router();





userRouter.post('/register',async (req, res)=>{
    const {username,password} = req.body;
    const user= await Model.findOne({username: username})

    if (user){
        return res.json({message:"user already registered !"})
    }
    const hashedPassword= await bcrypt.hash(password,10)
    const newUser = new Model({username,password :hashedPassword})
          await newUser.save()
          res.json({message:"user saved!"})
    res.json({message:"user rejected!"});
    

    })

userRouter.post('/login', async (req,res) => {
    
    const {username,password} = req.body;
    const user= await Model.findOne({username: username})
    

      if (!user){
        //if the user is not authenticated  retern message
        return res.json({message:"user not registered!"})
      } 
      const ispasswordmatched= await bcrypt.compare(password, user.password)
      if (!ispasswordmatched){
        
        return res.json({message:"passworld not registered!"})
      } 
      const token= jwt.sing({id:user._id},"secret")
      res.json({token,userID:user._id})
})













module.exports=userRouter