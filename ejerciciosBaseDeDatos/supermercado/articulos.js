const mongoose = require('mongoose')
const URL = "mongodb+srv://moshab97:123456abc@supermercado-l1ohz.mongodb.net/supermercado?retryWrites=true"

mongoose.connect(URL,{useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa en Artículos');
});
const Schema = mongoose.Schema;
const articuloSchema = new Schema({
    articulo: mongoose.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    existencias:{
        type: Number,
        default: 10
    }
},{timestamps:true});
module.exports = mongoose.model('Articulo',articuloSchema);