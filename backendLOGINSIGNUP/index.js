const express = require('express');
const cors=require('cors');
const db = require('./db');
const userRouter=require("./src/routes/userRoutes")

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);

db.once('open', function() {
  console.log('Database connection established');
  app.listen(4000, () => console.log('Server listening on port 4000'));
});