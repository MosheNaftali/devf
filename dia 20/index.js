const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path")

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/html/index.html'))
})

app.use("/static", express.static(__dirname+'/static'))
app.listen(8000,()=>{
    console.log("Servidor creado en puerto 8000")
})