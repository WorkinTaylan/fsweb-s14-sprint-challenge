// `Proje` modeli buraya
const db=require("../../data/dbConfig")


//bütün resourceları getir
//completed tablo kurulurken boolean versek de tamsayı olarak dönüyor.
//map ile o satırı manipüle ettik.

const getAllProjects=async function(){
        
let allProjects=await db("projects");

let changeCompletedRow=allProjects.map(item=>{
    return{
        ...item,
        project_completed:item.project_completed===1?true:false //fakat soru işareti ve sonrasını yazmasan da aynı sonuç...
    }
})
return changeCompletedRow;
};

//name, description, completed atacağız
//completed tamsayıdan true veya falsea çevrilip atılmalı
const postProject=async function(newProject){
    
// knex insert metodu project id dönüyor. 
    const [project_id]=await db("projects").insert(newProject)
    let insertedProj= await db("projects").where("project_id", project_id).first()

    return{
        ...insertedProj,
        project_completed:insertedProj.project_completed===1
    }

};

module.exports={
    getAllProjects,
    postProject
}