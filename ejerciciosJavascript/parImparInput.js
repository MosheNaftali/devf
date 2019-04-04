let number = document.getElementById('number');
let button = document.getElementById('button');
let resultado = document.getElementById('resultado')
var palabra = "hola"
function respuesta(){
    if(number.value % 2 == 0){
        resultado.innerHTML = 'El número es par'
    }else{
        resultado.innerHTML = 'El número es impar'
    }
}
button.addEventListener('click', respuesta)
console.log(`El número es par ${palabra}`)