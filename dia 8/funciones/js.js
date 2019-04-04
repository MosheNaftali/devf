// function saludarAlMundo(){
//     console.log("Hola Mundo");
// }
// saludarAlMundo();

// function suma(a,b){
//     c = a + b;
//     return c;
// }
// console.log(suma(5,2))

function minian(edad, genero){
    if(edad>=13 && genero == 'hombre'){
        var cuenta = true;
    }else{
        var cuenta = false;
    }
    if(cuenta == true){
        var respuesta = 'Felicedades campeon, cuentas para minian, Jazaj U Baruj';
    }else{
        var respuesta = 'Lo siento mi chavo'
    }
    return respuesta
}

var Joe = [13 , 'hombre']
console.log('Joe: ' + minian(Joe)); //En este caso va a regresar undefined porque estamos imprimiendo en consola otra impresión de consola
var Moshe = minian(13, "hombre");
console.log(Moshe);
var Jaim = minian(12, "hombre");
var David = minian(22, "hombre")
var Miriam = minian(15, "mujer")
