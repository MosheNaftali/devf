const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const baseArticulos = require('./articulos');
const baseTickets = require('./tickets')
const PORT = 8000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send({message:"Servidor funcionando"});
})

// ARTICULOS

app.post('/create/articulos',(req,res)=>{
    const {articulo,nombre,precio,existencias} = req.body;
    const newArticulo = baseArticulos({
        articulo,
        nombre,
        precio,
        existencias
    });
    newArticulo.save((err,articulo)=>{
        err
        ? res.setMaxListeners(409).send(err)
        : res.status(201).send(articulo)
    })
});
app.get('/all/articulos', (req, res)=>{
    baseArticulos.find().exec()
        .then(articulo => res.send(articulo))
        .catch(err => res.status(409).send(err))
})
// app.get('/articulos/:id', (req,res)=>{
//     const id = req.params.id
//     baseArticulos.findById(id).exec()
//         .then(articulo => res.send(articulo))
//         .catch(res.status(409).send({message: "Producto no encontrado"}))
// })

app.put('/articulos/:id',(req,res)=>{
    const id = req.params.id
    baseArticulos.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
        .then(ticket => res.send(ticket))
        .catch(err => res.status(409).send(err))
})
app.get('/articulos/:nombre', (req,res)=>{
    const nombre = req.params.nombre
    baseArticulos.findOne({nombre: String(nombre)},function(err,obj){
        console.log(req.body)
    }).exec()
    .then(articulo => res.send(articulo))
    .catch(res.status(409).send({message: 'Producto no encontrado'}))
})
app.put('/articulos/:id',(req,res)=>{
    const id = req.params.id
    baseArticulos.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
        .then(res.send({message: "Articulo modificado"}))
        .catch(err => res.status(409).send(err))
})

// TICKET

app.post('/create/ticket',(req,res)=>{
    const json = req.body;
    const newTicket = baseTickets({
        json
    })
    newTicket.save((err,ticket)=>{
        err
        ? res.status(409).send(err)
        : res.send(ticket)
    })
})

// app.get('/ticket/:id',(req,res)=>{
//     const id = req.params.id
//     baseTickets.findById(id,function(err,ticket){
//         baseArticulos.populate(ticket,{path:"articulos"},function(err,ticket){
//             res.status(200).send(ticket)
//         })
//     })
// })

app.get('/ticket/:id',(req,res)=>{
    const id = req.params.id
    baseTickets.findById(id,function(err,ticket){
        baseArticulos.populate(ticket,{path: 'articulos'},function(err,ticket){
            var json = JSON.parse(ticket)
            res.send(json)
            console.log(json.articulos.precio)
        })
    })
})
// app.put('/ticket/:id',(req,res)=>{
//     const id = req.params.id
//     baseTickets.findById(id,{$setOnInsert:req.body}).exec()
//         .then(ticket => res.send(ticket))
//         .catch(err => res.status(409).send(err))
// })
app.get('/all/ticket', (req,res)=>{
    ventaSuper.find().exec()
        .then(ticket => res.send(ticket))
        .catch(err => err.status(409).send(err));
})
// app.get('/ticket/:id',(req,res)=>{
//     const {id} = req.params;
//     ventaSuper.findById(id).exec()
//         .then(ticket => ticket ? res.send(ticket) : res.status(404).send({message:"Ticket no existente"}))
//         .catch(err => res.status(409).send(err));
// })
// app.put('/ticket/:id',(req,res)=>{
//     const {id} = req.params;
//     ventaSuper.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
//         .then(ticket => res.send(ticket))
//         .catch(err => res.status(409).send(err))
// })
// app.delete('/ticket/:id',(req,res)=>{
//     const {id} = req.params;
//     ventaSuper.findByIdAndDelete(id).exec()
//         .then(ticket => res.send({message:"Dato borrado"}))
//         .catch(err => res.status(409).send(err))
// })
// app.get("/total/ticket/:id", (req,res)=>{
//     const {id} = req.params
//     var datos = ventaSuper.findById(id).exec()
//     var resultado = datos.ticket.subtotal + datos.ticket.iva
//     console.log(resultado)
//         .then(ticket => res.send(ticket))
//         .catch(err => res.status(409).send(err))
// })
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})