const mongoose=require('mongoose')
const announcementSchema = new mongoose.Schema({
announcementName:{type : String,
          require:true
    },
    descriptions:{type:String,
        require:false
    },
imageURL:{type : String,
        require:false
    },
phoneNumber:{type : Number,
            require:false
    }
})
const announcement=mongoose.model('Announcement',announcementSchema)

module.exports = announcement;
