class Maestro{
    constructor(materia,calificaciones){
        this.materia = materia,
        this.calificaciones = calificaciones
    }
    promedio(){
        var suma = 0;
        for(var i=1; i<=this.calificaciones.length;i++){
            suma = suma + this.calificaciones[i];
        }
        console.log(suma)
        var resultado = suma/this.calificaciones.length;
        console.log(`El promedio del salón de ${this.materia} es de ${resultado}`)
    }
}
class MaestroFisica extends Maestro{
    constructor(materia,calificaciones,antiguedad){
        super(materia,calificaciones),
        this.antiguedad = antiguedad
    }
}
class MaestroMusica extends Maestro{
    constructor(materia,calificaciones,edad){
        super(materia,calificaciones),
        this.edad = edad
    }
}

const salon1 = new MaestroFisica('Física',[10,8,7,8,10,6],'10 años')

// function promedio(){
//     for(let i=1; i<=(salon1.calificaciones).length;i++){
//         var suma = suma + salon1.calificaciones[i];
//     }
//     console.log(suma)
//     var resultado = suma/(salon1.calificaciones).length;
//     console.log(`El promedio del salón de ${salon1.materia} es de ${resultado}`)
// }

// function promedio(a){
//     var suma = 0
//     for(let i in a){
//          suma += a[i];
//     }
//     console.log(a)
//     var resultado = suma/a.length;
//     console.log(`El promedio del salón de ${salon1.materia} es de ${resultado}`)
// }
// promedio(salon1.calificaciones);