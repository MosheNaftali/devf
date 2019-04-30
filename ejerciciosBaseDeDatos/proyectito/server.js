
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose')
const PORT = 8001;
const URL = "mongodb+srv://moshab97:123456abc@proyectito-c4lqh.mongodb.net/formulario?retryWrites=true"
mongoose.connect(URL, {useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa a base de datos');
});
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const datosSchema = new Schema({
    clientName:{
        type: String,
        required: true
    },
    clientEmail:{
        type: String,
        required: true
    },
    clientNumber:{
        type: Number
    },
    subject: String
})
var Datos = mongoose.model('Index',datosSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/enviarDatos',(req,res)=>{
    var data = new Datos(req.body)
    data.save()
    .then(res.sendFile(__dirname + '/aceptado.html'))
    .catch(err => res.status(409).send(err))
})
app.get('/verDatos',(req,res)=>{
    Datos.find().exec()
    .then(datos => res.send(datos))
    .catch(err => res.status(409).send(err))
})
app.put('/modificarDatos',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`Conexión exitosa en puerto ${PORT}`)
})