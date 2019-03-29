const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

app.get('/api',(request,response)=>{
    response.status(200).send({
        mensaje:'Hola Mundo'
    })
})

app.get('/api/suma',(req,res)=>{
    const {num1,num2} = req.query;
    const resultado = (parseInt(num1) + parseInt(num2))
    res.status(200).send({resultado})
})

app.get('/api/usuario/:uid',(req,res)=>{
    console.log(req.params)
    const uid = req.params.uid
    res.status(200).send({
        usuario:`${uid}`
    })

})

app.get('/api/swapi/:uid',(req,res)=>{
    const uid = req.params.uid
    const URL = `https://swapi.co/api/people/${uid}`
    request.get(URL,(error,response,body)=>{
        const json = JSON.parse(body)
        var personaje = json.name
        res.status(200).send({
            name: personaje
        })
    })
})
app.get('/api/pokemon/:uid',(req,res)=>{
    const POKEMON = new Promise((resolve,reject)=>{
        const uid = req.params.uid
        const URL = `https://pokeapi.co/api/v2/pokemon/${uid}`
        request.get(URL,(error,response,body)=>{
            if(response.statusCode=200){
                const json = JSON.parse(body)
            const nombre = json.name
                resolve(res.send({
                    name: nombre
            }))}else if(error.statusCode=400){
                reject(res.send("Error"))
            }
        })
    })
    POKEMON
        .then(resolve => console.log(resolve))
        .catch(error => console.log(error))
})
app.listen(8000,()=>{
    console.log("Servidor iniciado en puerto 8000")
})