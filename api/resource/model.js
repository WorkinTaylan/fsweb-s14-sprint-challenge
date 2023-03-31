// `Resource` modeli buraya
const db=require("../../data/dbConfig")


//bütün resourceları getir


const getAllResources=async function(){
        
    return await db("resources")
}



module.exports={
    getAllResources,
}