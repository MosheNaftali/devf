var entrada = document.getElementById("entrada").value;
var boton = document.getElementById("boton");
var salida = document.getElementById("salida");

const URL = "http://openlibrary.org/search.json?author="
function getAutor(){
    axios.get(`${URL}${entrada}`)
    .then(function(response){
        console.log(response.data)
        for(let i=0; i<response.data.docs.length; i++){
            salida.innerHTML += i+1 + '. ' + (response.data.docs[i].title) + '<br>';
        }
    })
    .catch(function(error){
        console.log(error)
    })
}
boton.addEventListener("click", getAutor)