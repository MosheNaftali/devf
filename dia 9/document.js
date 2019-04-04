// // var: Puede ser utilizada en todo el código; es una variable global
// var x = 18;
// x = 21;
// // let: Es una variable local; si la utilizó dentro de una función, if, ciclos, etc. solo lo va a servir
// // solo dentro de donde esté
// if(true){
//     let x = 2;
//     console.log(x);
// }
// // const: Dato que siempre va a ser igual y no se puede cambiar, se suele poner en mayusculas
// const MAYORIA_DE_EDAD = 18;
// MAYORIA_DE_EDAD = 21; // Aquí veremos que no va a servir porque no podemos cambiar el valor de una constante

// function completeName(){
//     let nombre = document.getElementById('name').value;
//     let apellido = document.getElementById('lastName').value;
//     document.getElementById('mostrarNombre').innerHTML = nombre + ' ' + apellido;
// }

let nombre = document.getElementById('name');
let email = document.getElementById('email');
let pizza = document.getElementById('edad');
let tarjeta = document.getElementById('tarjeta');
let boton = document.getElementById('button');
let mostrarNombre = document.getElementById('mostrarNombre');
let mostrarEmail = document.getElementById('mostrarEmail');
let mostrarEdad = document.getElementById('mostrarEdad');
function mostrar(){
    // Quitar clase invisible
    tarjeta.classList.remove('invisible');
    // Mostrar datos
    mostrarNombre.innerHTML = nombre.value.toUpperCase();
    mostrarEmail.innerHTML = email.value;
    mostrarEdad.innerHTML = 'Tu edad es ' + edad.value;
}
boton.addEventListener('click', mostrar);

