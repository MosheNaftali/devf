
var personas = [
    David = {
        nombre: 'David', genero: 'hombre', edad: 23
    },
    Moshe = {
        nombre: 'Moshe', genero: 'hombre', edad: 12
    }
]
if(personas[1].edad < 13 && personas[1].genero == 'hombre'){
    console.log(personas[1].nombre, ', tu género es', personas[1].genero, 'y tu edad', personas[1].edad,'así que no cuentas para minian');

}
var jaim = {
    nombre: 'jaim', genero: 'hombre', edad: 18
}
console.log(jaim.nombre, jaim.genero, jaim.edad);