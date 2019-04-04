y// let ayudante_de_santa = {
//     nombre:"Ayudante de santa",
//     raza:"Galgo",
//     color: "Cafe",
//     genero: "Macho",
//     programa:"Los Simpson"
// }

// let snoopy = {
//     nombre: "Snoopy",
//     raza:"Beagle",
//     color:"Blanco y negro",
//     genero:"Macho",
//     programa: "Charlie Brown"
// }

class Perro{
    constructor(nombre = "Sin nombre", raza = "Sin raza", color = "Sin color", genero = "Sin género", programa = "Sin programa"){
        this.nombre = nombre,
        this.raza = raza,
        this.color = color,
        this.genero = genero,
        this.programa = programa
    }
    ladrar(){
        console.log(`Waf waf, mi nombre es ${this.nombre}`)
    }
    pishar(){
        console.log("Pshhhhhh")
    }
};
const snoopy = new perro("Snoopy", "Beagle", "Blanco y negro", "Macho", "Charlie Brown");
const scooby_doo = new perro("Scooby", "Gran Danes", "Café", "Macho", "Scooby Doo");
const ayudante_de_santa = new perro("Ayudante de Santa", "Galgo", "Café", "Macho", "Los Simpson")
const sinDatos = new perro();