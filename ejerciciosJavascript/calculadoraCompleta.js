let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');
let punto = document.getElementById('punto');
let igual = document.getElementById('igual');
let clear = document.getElementById('clear');
let mas = document.getElementById('mas');
let menos = document.getElementById('menos');
let por = document.getElementById('por');
let division = document.getElementById('division');
let exponencial = document.getElementById('exponencial');
let pantalla = document.getElementById('pantalla');
var dato = 0;

function limpiar(){
    pantalla.textContent = '';
}

uno.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '1'})
dos.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '2'})
tres.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '3'})
cuatro.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '4'})
cinco.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '5'})
seis.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '6'})
siete.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '7'})
ocho.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '8'})
nueve.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '9'})
cero.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '0'})
punto.addEventListener('click', function(){pantalla.textContent = pantalla.textContent + '.'})
mas.addEventListener('click', function(){dato = dato + (Number(pantalla.textContent)); limpiar();})
menos.addEventListener('click', function(){dato = dato - (Number(pantalla.textContent)); limpiar();})
por.addEventListener('click', function(){dato = dato * (Number(pantalla.textContent)); limpiar();})
division.addEventListener('click', function(){dato = dato / (Number(pantalla.textContent)); limpiar();})
exponencial.addEventListener('click', function(){dato = dato ** (Number(pantalla.textContent)); limpiar();})
igual.addEventListener('click', function(){pantalla.textContent = dato});
clear.addEventListener('click', function(){pantalla.textContent = ''; dato = 0});