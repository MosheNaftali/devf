var personas = [
    {"nombre": "David", "edad": 13},
    {"nombre": "Salo", "edad": 11},
    {"nombre": "Moy", "edad": 15},
    {"nombre": "Abby", "edad": 18},
    {"nombre": "Jorge", "edad": 9}
]
let barMitzva = personas.filter((persona)=>{
    return persona.edad >= 13
})
console.log(personas);
console.log("Personas que cumplen para minian", barMitzva);