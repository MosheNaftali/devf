// console.log("1")
// console.log("2")
// console.log("3")

// Ejercicio 1
// asincrono = ()=>{
//     console.log("hola, soy un callback")
// }
// llamando = (asincrono)=>{
//     console.log("Soy una función que llama a un callback")
//     asincrono()
// }

// Ejercicio 2
// const log = (dato) => {
//     console.log(dato)
// }
// const warn = (dato) => {
//     console.warn(dato)
// }
// const llamando = (callback, mensaje) => {
//     mensaje = mensaje
//     callback(mensaje)
// }
// llamando(warn,"Hola")
// llamando(log,"Hola")

// Ejercicio 3
// const suma = (x,y) => {
//     console.log(x+y)
// }
// const resta = (x,y) => {
//     console.log(x-y)
// }
// const multipricar = (x,y) => {
//     console.log(x*Y)
// }
// const llamando = (callback, x, y) => {
//     callback(x,y);
// }
// llamando(suma,3,2)

// Ejercicio 4
// const mayus = (palabra) => {
//     palabra = palabra.toUpperCase()
//     console.log(palabra)
// }
// const minus = (palabra) => {
//     palabra = palabra.toLowerCase()
//     console.log(palabra)
// }
// const ordenSuperior = (callback, mensaje) => {
//     callback(mensaje)
// }
// ordenSuperior(mayus,"PejeLagarto")
// ordenSuperior(minus, "PejeLagarto")

// Ejercicio 5
const horas = (tiempo) => {
    for(let i in tiempo){
        if(tiempo[i]>=120){
            console.log(`El tiempo ${i} que se saco es ${tiempo[i]}`)
        }
    }
}
const ordenSuperior = (callback, tiempo) => {
    callback(tiempo)
}
ordenSuperior(horas,[120,80,200,100])