class Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas,
        this.numVentanas = numVentanas,
        this.numPisos = numPisos,
        this.direccion = direccion,
        this.altura = altura,
        this.ancho = ancho,
        this.largo = largo
    }
    metrosCuadrados(){
        let metros = this.ancho*this.largo;
        console.log(metros);
    }
    regresarDireccion(){
        console.log(this.direccion);
    }
    cambiarDireccion(){
        this.direccion = prompt("¿Cual es la nueva direccion?")
    }
}
class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, patio){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho),
        this.patio = patio;
    }
}
class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, elevador){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho),
        this.elevador = elevador;
    }
}

const miCasa = new Edificio(3,8,2,"Av. Lomas de Sotelo",2.5,8,10,false)
