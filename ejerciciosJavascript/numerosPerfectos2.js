function numero(){
    var almacenado = 0;
    var number = document.getElementById('number').value;
    for(var i = 1; i<number; i++){
        if(number % i == 0 && number!= i){
            almacenado += i;
        }
        if(almacenado == number){
            document.getElementById("text").value = 'Si es un número perfecto';
        }else{
            document.getElementById("text").value = 'No es un número perfecto';
        }
    }
}  