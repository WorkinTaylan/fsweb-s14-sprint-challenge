// Server'ı buradan başlatın
const server=require("./api/server");

const port = process.env.PORT || 3001;

server.listen(port, ()=>{
    console.log(`---Server running on ${port}---`)
})