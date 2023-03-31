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

router.post("/", async(req,res,next)=>{

    const {project_name}=req.body;

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