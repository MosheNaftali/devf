const mascotas = [
    {nombre: "Bimbo", especie: "Hamster", comidasFavoritas:["Semillas","Nueves"]},
    {nombre: "Ludovico", especie: "Perro", comidasFavoritas:["Huesos","Jamón"]},
    {nombre: "Pavlov", especie: "Perro", comidasFavoritas:["Croquetas","Pollo"]},
    {nombre: "Chancla", especie: "Gato", comidasFavoritas:["Atún","Pescado"]},
    {nombre: "Don Pepe", especie: "Períco", comidasFavoritas:["Semillas"]},
]

var nombres = mascotas.map((dato)=>{
    return dato.nombre
});

var perros = mascotas.filter((dato)=>{
    if(dato.especie == "Perro"){
        return dato.nombre
    }
})

console.log(nombres)
console.log(perros)