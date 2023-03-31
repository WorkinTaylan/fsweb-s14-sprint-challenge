// bu`Task` modeli buraya
const db=require("../../data/dbConfig");


//tasks'deki project_id ile project_name çağır
// delete metodu ile project_id'yi YOKET!!
//completed değerini boolean yap

const getTasks=async function(){

    const tasks=await db("tasks as t")
                    .leftJoin("projects as p", "p.project_id","t.project_id")
                    .select("t.*","p.project_name","p.project_description")
                
    const selectedFormatTasks=tasks.map(item=>{
        delete item.project_id; //project_id'yi görmek istemedil delete metodunu araştır
        return {
            ...item,
            task_completed:item.task_completed===1

        }
    })
    return selectedFormatTasks;
}

//task_notes göndermediğin takdirde null

const AddTask=async function(task){
    const [newTaskId]=await db("tasks").insert(task);

    const newRecord=await db("tasks").where("task_id",newTaskId).first()

    return {
        ...newRecord,
        task_completed:newRecord.task_completed===1
    }
}


module.exports={
getTasks,
AddTask
}