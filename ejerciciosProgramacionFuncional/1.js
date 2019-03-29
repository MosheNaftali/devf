const animalitos = [
    {nombre:"carlitos", especie:"conejo"},
    {nombre:"esteban", especie:"perro"},
    {nombre:"fabiruchis", especie:"tortuga"},
    {nombre:"anita", especie:"gato"},
    {nombre:"miranda", especie:"conejo"},
    {nombre:"lucas", especie:"conejo"},
    {nombre:"Horacia", especie:"tortuga"}
]

var conejos = animalitos.filter((element)=>{
    return element.especie == "conejo"
})

console.log(conejos)