const mongoose = require("mongoose");
const instaSchema = new mongoose.Schema(
    {},{ strict: false }
    
);

const InstaPost = mongoose.model("InstaPost", instaSchema);
module.exports=InstaPost;