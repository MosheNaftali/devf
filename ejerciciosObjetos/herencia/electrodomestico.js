class Electrodomestico{
    constructor(precio, color, consumoEnergetico, capacidad){
        this.precio = precio,
        this.color = color,
        this.consumoEnergetico = 100,
        this.capacidad = capacidad
    }
}
class Lavadora extends Electrodomestico{
    constructor(precio, color, consumoEnergetico, capacidad, carga){
        super(precio, color, consumoEnergetico, capacidad),
        this.carga = carga;
    }
    precioFinal(){
        var total = this.consumoEnergetico * this.carga;
        console.log(total)
    }
}
const lavadora1 = new Lavadora("$500","Blanco",100,10,80)