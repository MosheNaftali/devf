function fizzBuzz(){
    for(i=0; i<=100; i++){
        if(i % 5 == 0 && i % 3 == 0){
            console.log('El número ' + i + ' es Fizz Buzz');
        }else if(i % 3 == 0){
            console.log('El número ' + i + ' es Fizz');
        }else if(i % 5 == 0){
            console.log('El número ' + i + ' es Buzz');
        }
    }
}
fizzBuzz();