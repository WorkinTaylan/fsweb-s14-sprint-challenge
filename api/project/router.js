//  `/api/projects` router buraya
const router=require("express").Router();
const ProjectsModels=require("../project/model")

router.get("/", async(req,res,next)=>{
    try{
        let allProjects=await ProjectsModels.getAllProjects();
        if(allProjects){
            res.status(200).json(allProjects)
        }
        else{
            next()
        }
    }
    catch(error){
        next(error)
    }
});

module.exports=router;