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

router.post("/", async (req,res,next)=>{
    try {

    if(!req.body){
        res.status(400).json({message:"resource_name nerede?"})
    }else{
        const newProj= await ResourceModel.postNewResource(req.body)
        res.status(201).json(newProj)
    }

    } catch (error) {
        next(error)
    }
})

module.exports=router;