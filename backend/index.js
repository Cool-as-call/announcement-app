const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const userRouter=require("./src/routes/userRoutes")

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);

app.use(express.json());
mongoose.connect("mongodb+srv://nadab:beya@announcement.n9qoqty.mongodb.net/announcement")
app.listen(4000,() => console.log('server listening on 4000'));