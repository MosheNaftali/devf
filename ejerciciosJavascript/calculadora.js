let botonSuma = document.getElementById('botonSuma');
let botonResta = document.getElementById('botonResta');
let botonMultiplicar = document.getElementById('botonMultiplicar');
let botonDividir = document.getElementById('botonDividir');
let botonExponencial = document.getElementById('botonExponencial');
let resultado = document.getElementById('resultado');

let a = document.getElementById('number1');
let b = document.getElementById('number2');
function suma(){
    resultado.innerHTML = Number(a.value) + Number(b.value);
}
function resta(){
    resultado.innerHTML = Number(a.value) - Number(b.value);
}
function multiplicacion(){
    resultado.innerHTML = Number(a.value) * Number(b.value);
}
function division(){
    resultado.innerHTML = Number(a.value) / Number(b.value);
}
function exponencial(){
    resultado.innerHTML = Number(a.value) ** Number(b.value);
}

botonSuma.addEventListener('click', suma);
botonResta.addEventListener('click', resta);
botonMultiplicar.addEventListener('click', multiplicacion);
botonDividir.addEventListener('click', division);
botonExponencial.addEventListener('click', exponencial);



// function suma(){
//     var a = parseFloat(document.getElementById('number1').value);
//     var b = parseFloat(document.getElementById('number2').value);
//     document.getElementById('resultado').value = a+b;
// }
// function resta(){
//     var a = parseFloat(document.getElementById('number1').value);
//     var b = parseFloat(document.getElementById('number2').value);
//     document.getElementById('resultado').value = a-b;
// }
// function multiplicacion(){
//     var a = parseFloat(document.getElementById('number1').value);
//     var b = parseFloat(document.getElementById('number2').value);
//     document.getElementById('resultado').value = a*b;
// }
// function division(){
//     var a = parseFloat(document.getElementById('number1').value);
//     var b = parseFloat(document.getElementById('number2').value);
//     document.getElementById('resultado').value = a/b;
// }
// function exponencial(){
//     var a = parseFloat(document.getElementById('number1').value);
//     var b = parseFloat(document.getElementById('number2').value);
//     document.getElementById('resultado').value = a**b;
// }
// function suma(){
//     var res = a+b;
//     return res;
// }
// function resta(){
//     var res = a-b;
//     return res;
// }
// function multiplicacion(){
//     var res = a*b;
//     return res;
// } 
// function division() {
//     var res = a/b;
//     return res;
// }
// function exponencial() {
//     var res = a**b;
//     return res;
// }

// var a = parseInt(prompt('Cual es el primer número'),10);
// var b = parseInt(prompt('Cual es el segundo número'),10);
// var opcion = prompt('Que deseas hacer con los número anteriores: 1: Suma. 2: Resta. 3: Multiplicación. 4: División. 5: Exponencial');
// switch(opcion){
//     case '1': console.log('La suma de ' + a + ' y ' + b + ' es ' + suma(a,b));
//             break;
//     case '2': console.log('La resta de ' + a + ' y ' + b + ' es ' + resta(a,b));
//             break;
//     case '3': console.log('La multiplicación de ' + a + ' y ' + b + ' es ' + multiplicacion(a,b));
//             break;
//     case '4': console.log('La división de ' + a + ' y ' + b + ' es ' + division(a,b));
//             break;
//     case '5': console.log('La exponencial de ' + a + ' y ' + b + ' es ' + exponencial(a,b));
//             break;
// }