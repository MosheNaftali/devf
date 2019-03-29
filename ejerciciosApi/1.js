var entrada = document.getElementById("entrada").value;
var boton = document.getElementById("boton");
var salida = document.getElementById("salida");

const traspaso = (dato) => {
    const URL = "https://pokeapi.co/api/v2/";
    axios.get(`${URL}pokemon/${dato}`)
    .then(function(response){
        salida.innerHTML = (response.data.types[0].type.name)
    })
    .catch(function(error){
        salida.innerHTML = (error)
    })
}
const ordenSuperior = (callback, dato) => {
    callback(dato)
}
boton.addEventListener('click',ordenSuperior(traspaso,entrada));