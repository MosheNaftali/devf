let numero = document.getElementById('number');
let respuesta = document.getElementById('answer');
let boton = document.getElementById('button');
function calcular(){
    if(numero.value % 2 == 0){
        respuesta.innerHTML = 'El número es par'
    }else{
        respuesta.innerHTML = 'El número es impar'
    }
}
boton.addEventListener('click', calcular);