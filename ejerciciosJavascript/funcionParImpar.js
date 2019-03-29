function parImpar(){
    var x = prompt('¿Elige un numero?');
    var resultado = x%2;
    if(resultado == 0){
        alert('Es un número par');
    }else{
        alert('Es un número impar');
    }
}
parImpar();