const mongoose = require('mongoose')
const URL = "mongodb+srv://moshab97:123456abc@supermercado-l1ohz.mongodb.net/supermercado?retryWrites=true"

mongoose.connect(URL,{useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa en Tickets');
});
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket: mongoose.Schema.ObjectId,
    subtotal:{
        type: Number,
        default: 0
    },
    iva:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        default: 0
    },
    articulos:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Articulos',
        required: true
    }]
},{timestamps:true})

module.exports = mongoose.model('Ticket', ticketSchema)