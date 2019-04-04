const mongoose = require('mongoose');
const URL_MONGO = "mongodb+srv://moshab97:123456abc@devf1-yxgmz.mongodb.net/test?retryWrites=true";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(err)=>{
    if (!err) console.log('Conexión exitosa');
});

const Schema = mongoose.Schema;

const peliSchema = new Schema({
    titulo:String,
    anio:String,
    sinopsis:{
        type:String
    },
    duracion:{
        type:Number,
        default: 90
    },
    genero:{
        type:String,
        enum:['CO','DA','TE'],
        required: true
    },
    portadas_url:[String],
    directores:{
        type:[{
            name:String,
            edad:{
                type: Number,
                default: 18
            },
            nacionalidad:{
                type: String,
                enum:['MX','US'],
                require:true
            }
        }]
    }
},{timestamps:true}); //Pone al final del Json Createon y Updateon

const Pelicula = mongoose.model('Pelicula',peliSchema);

module.exports = {Pelicula}