let titulo = document.getElementById('titulo');
let porciones = document.getElementById('porciones')
let ingrediente = document.getElementById('ingredientes')

const receta = {
    titulo: "Mole",
    porciones: "2",
    ingredientes: ["Canela", "Comino", "Cocoa"]
}
// class recetas{
//     constructor(titulo, porciones, ingredientes){
//         this.titulo = titulo,
//         this.porciones = porciones,
//         this.ingredientes = ingredientes
//     }
// }
// const mole = new recetas("Mole","2",["Canela", "Comino", "Cocoa"])
titulo.innerHTML = mole.titulo;
porciones.innerHTML = mole.porciones;
ingrediente.innerHTML = mole.ingredientes;