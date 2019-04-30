const axios = require('axios')
const express = require('express')
const request = require('request')
const app = express();
const URL = 'http://www.omdbapi.com/?apikey=f3feb2fc&t=Avengers&y=2018'

app.get('/',(req,res)=>{
    request.get(URL,(error,response,body)=>{
        const json = JSON.parse(body)
        res.send(json)
    })
})
app.listen(8000,()=>{
    console.log('Puerto iniciado en puerto 8000')
})