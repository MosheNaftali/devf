var entrada = document.getElementById("entrada").value;
var boton = document.getElementById("boton");
var salida = document.getElementById("salida");

const URL = "http://www.theaudiodb.com/api/v1/json/1/search.php?s="
function getGenero(){
    axios.get(`${URL}${entrada}`)
    .then(function(response){
        salida.innerHTML = (response.data.artists[0].strStyle)
    })
    .catch(function(error){
        console.log(error)
    })
}
getGenero()