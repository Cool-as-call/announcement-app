const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://Ahmed:ahmed123@cluster0.5njzls3.mongodb.net/Cluster0")
  .then(() => console.log('Connected to mongoDB'))
.catch(err =>console.error('Failed to connect with mongoDB', err))

module.exports = mongoose.connection;