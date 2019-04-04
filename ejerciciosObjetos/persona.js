class persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura
    }
    calcularIMC(){
        let peso = this.peso;
        let altura = this.altura;
        console.log((peso)/(altura**2))
    }
    esMayorDeEdad(){
        if(this.edad < "18"){
            console.log("Lo siento, eres menor de edad");
        }else{
            console.log("Eres mayor de edad")
        }
    }
}
const juan = new persona("Juan","21","Hombre",93,1.75)