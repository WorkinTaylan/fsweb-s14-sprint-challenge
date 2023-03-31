// `/api/resources` router buraya
const router =require("express").Router();
const ResourceModel=require("../resource/model")


router.get("/", async (req,res,next)=>{
    try{
        let allResources=await ResourceModel.getAllResources();
        if(allResources){
            res.status(200).json(allResources)
        }
        else{
            next()
        }
    }
    catch(error){
        next(error)
    }
});

router.post("/resources", (req,res,next)=>{
    
})

module.exports=router;