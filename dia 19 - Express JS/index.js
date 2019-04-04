var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
app.use(bodyParser.json())

app.get("/", (request,response)=>{
    response.send({
        mensaje:"hola"
    })
});

app.get("/personaje/:uid",(require,response)=>{
    console.log(require.params);
    const uid = require.params.uid
    response.send({message: `Personaje buscado: ${uid}`})
});

app.post("/create/user",(require,response)=>{
    const{name,last_name,age,is_active} = require.body;
    response.status(200).send({
        id:19,
        name,
        last_name,
        age,
        is_active
    })
});
app.listen(8000,()=>{
    console.log("Server on port 8000")
});