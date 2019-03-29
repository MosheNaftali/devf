class Bebida{
    constructor(cantidad){
        this.cantidad = cantidad
    }
}
class Cerveza extends Bebida{
    constructor(cantidad,alcohol){
        super(cantidad),
        this.alcohol = alcohol
    }
}
class Refresco extends Bebida{
    constructor(cantidad,azucar){
        super(cantidad),
        this.azucar = azucar
    }
}