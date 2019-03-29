const numeroMenorQueCInco = new Promise((resolve,reject) => {
    const RANDOM_NUMBER = Math.floor(Math.random()*10)
    setTimeout(
        function(){
            if(RANDOM_NUMBER >5){
                resolve(RANDOM_NUMBER)
            }else if(RANDOM_NUMBER == 5){
                reject(new Error(`El numero es igual a 5`))
            }else if(RANDOM_NUMBER < 5){
                reject(new Error(`Es menor que 5, el numero que salio fue ${RANDOM_NUMBER}`))
            }
        }
    ), 1000
})

numeroMenorQueCInco
    .then(resolve => console.log(resolve))
    .catch(error => console.warn(error))