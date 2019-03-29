class cuenta{
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }
    ingresar(){
        var dinero = Number(prompt("Ingrese la cantidad a ingresar"))
        dinero += this.cantidad;
        if(dinero>900 || dinero < 10){
            console.log("Lo siento, no se puede realizar el ingreso")
            console.log(`El dinero en caja es ${this.cantidad}`);
        }else{
            console.log(`Ingreso aprobado, el dinero en caja es de ${dinero}`)
        }
    }
    retirar(){
        var dinero = Number(prompt("Ingrese la cantidad a retirar"))
        dinero = this.cantidad - dinero;
        if(dinero>900 || dinero < 10){
            console.log("Lo siento, no se puede realizar el retiro")
            console.log(`El dinero en caja es ${this.cantidad}`);
        }else{
            console.log(`Retiro aprobado, el dinero en caja es de ${dinero}`)
        }
    }
}
const cuenta1 = new cuenta("Moshe Shabes",850)