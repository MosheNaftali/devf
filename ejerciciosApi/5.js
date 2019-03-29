var entrada = document.getElementById("entrada").value;
var boton = document.getElementById("boton");
var salida = document.getElementById("salida");

const URL = "https://swapi.co/api/"
function getPersonaje(id){
    axios.get(`${URL}people/${id}`)
    .then(function(response){
        salida.innerHTML = `El personaje ${(response.data.name)} tiene las siguientes películas: <br>`
        for(let i=0; i<response.data.films.length; i++){
            axios.get(`${response.data.films[i]}`)
            .then(function(response){
                salida.innerHTML += (response.data.title) + "<br>"
            })
        }
    })
    .catch(function(error){
        console.log(error)
    })
}
getPersonaje(1)
// getPersonaje(2)
// getPersonaje(3)
// getPersonaje(4)
// getPersonaje(5)
// getPersonaje(6)
// getPersonaje(7)