//  `/api/projects` router buraya
const router=require("express").Router();
const ProjectsModels=require("../project/model")
const {UniqueProjectName}=require("./middlew")

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

router.post("/", UniqueProjectName, async(req,res,next)=>{

    try{
        let postProject=await ProjectsModels.postProject(req.body);
        if(!postProject){
            res.status(400).json({message:"where is my buddy"})
        }
        else{
            res.json(postProject)
        }
    }
    catch(error){
        next(error)
    }
});

module.exports=router;