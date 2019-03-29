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
let dato = 0;
let dato2;
let signo;

function limpiar(){
    pantalla.textContent = ''
}
uno.addEventListener('click', function(){pantalla.textContent += '1'});
dos.addEventListener('click', function(){pantalla.textContent += '2'});
tres.addEventListener('click', function(){pantalla.textContent += '3'});
cuatro.addEventListener('click', function(){pantalla.textContent += '4'});
cinco.addEventListener('click', function(){pantalla.textContent += '5'});
seis.addEventListener('click', function(){pantalla.textContent += '6'});
siete.addEventListener('click', function(){pantalla.textContent += '7'});
ocho.addEventListener('click', function(){pantalla.textContent += '8'});
nueve.addEventListener('click', function(){pantalla.textContent += '9'});
cero.addEventListener('click', function(){pantalla.textContent += '0'});
punto.addEventListener('click', function(){pantalla.textContent += '.'});
clear.addEventListener('click', function(){pantalla.textContent = ''; dato = 0; dato2 = 0; res = 0;})
mas.addEventListener('click', function() {
    dato = Number(pantalla.textContent) + dato;
    signo = '+' 
    limpiar();
})
menos.addEventListener('click', function() {
    dato = Number(pantalla.textContent) - dato;
    signo = '-' 
    limpiar();
})
por.addEventListener('click', function() {
    if(dato == 0){
        dato = 1;
        dato = Number(pantalla.textContent) * dato;
    }else{
        dato = Number(pantalla.textContent) * dato;
    }
    signo = '*' 
    limpiar();
})
division.addEventListener('click', function() {
    if(dato == 0){
        dato = 1;
        dato = Number(pantalla.textContent) / dato ;
    }else{
        dato = dato / Number(pantalla.textContent);
    }
    signo = '/' 
    limpiar();
})
exponencial.addEventListener('click', function() {
    if(dato == 0){
        dato = 1;
        dato = Number(pantalla.textContent) ** dato ;
    }else{
        dato = Number(pantalla.textContent) ** dato;
    }
    signo = '**' 
    limpiar();
})
igual.addEventListener('click', function(){
    dato2 = pantalla.textContent;
    let res = 0;
    switch(signo){
        case '+': res = Number(dato) + Number(dato2);
                break;
        case '-': res = Number(dato) - Number(dato2);
                break;
        case '*': res = Number(dato) * Number(dato2);
                break;
        case '/': res = Number(dato) / Number(dato2);
                break;
        case '**': res = Number(dato) ** Number(dato2);
                break;
    }
    pantalla.textContent = res;
})