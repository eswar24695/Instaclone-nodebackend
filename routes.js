const router=require("express").Router()
const InstaPost=require("./models")
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.post("/form",async(req,res)=>{
    console.log(req.body)
    try{
        const data=await InstaPost.insertMany(req.body);
        console.log(data)
        return res.json({
            status:"success",
            result:data
        })
    }
    catch(e){
        return res.json({
            status:"404",
            message:e.message
        })
    }
})
module.exports=router