// `Resource` modeli buraya
const db=require("../../data/dbConfig")


//bütün resourceları getir


const getAllResources=async function(){
        
    const resources= await db("resources")

    return resources;
}

const postNewResource=async function(newResource){

    const [newResource_id]=await db("resources").insert(newResource)

    const PostResource=await db("resources").where("resource_id",newResource_id).first()

    return PostResource;
}



module.exports={
    getAllResources,
    postNewResource
}