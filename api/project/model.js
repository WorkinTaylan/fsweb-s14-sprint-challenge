// `Proje` modeli buraya
const db=require("../../data/dbConfig")


//bütün resourceları getir


const getAllProjects=async function(){
        
    return await db("projects")
}

const postProject=async function(newPost){
    
    return await db("projects").insert(newPost)
}

module.exports={
    getAllProjects,
}