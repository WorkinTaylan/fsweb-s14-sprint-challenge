const ProjectModel=require("./model")

//İlk, önceki projeleri al
//içindeki project_name'leri filterlayıp yeni atacağın name'e eşitse postlama
const UniqueProjectName=async function(req,res,next){

const BringAllProjects=await ProjectModel.getAllProjects();
const ProjectName= BringAllProjects.map(item=>item.project_name)

const isExistName= ProjectName.filter(item=>item ===req.body.project_name)
    try{
        if(isExistName.length>0){
            res.status(404).json({message:"Benzer veya aynı isim sistemde mevcut"})
        }else{
            next()
        }

    }
    catch(error){
        next(error)
    }
}

module.exports={

UniqueProjectName

}