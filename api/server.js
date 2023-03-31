// serverı buraya yazın ve index.js require yazın
const express=require("express");

const server =express();
const projectRouter=("./project/router");
const resourceRouter=("./resource/router");
const taskRouter=("./task/router");

server.use(express.json());
// server.use("/api", projectRouter); // mw eklemeden hata veriyor

module.exports=server;