const { Router } = require("express");
const {getAnnouncement,saveAnnouncement,updateAnnouncement,deletAnnouncement}=require('../controllers/announcementcontroller')

const router = Router();


router.get("/",getAnnouncement)
router.post("/saved",saveAnnouncement);
router.put("/update/:announcementName",updateAnnouncement)
router.delete('/announcement/:announcementName',deletAnnouncement);

module.exports=router
