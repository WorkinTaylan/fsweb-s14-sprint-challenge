// `/api/tasks` router buraya
const router =require("express").Router();
const TaskModel=require("../task/model")


router.get("/", async (req,res,next)=>{
    try{
        let allTasks=await TaskModel.getTasks();
        if(allTasks){
            res.status(200).json(allTasks)
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

    let insertedOne=await TaskModel.AddTask(req.body)
    res.json(insertedOne)
    } catch (error) {
        next(error)
    }
})

module.exports=router;