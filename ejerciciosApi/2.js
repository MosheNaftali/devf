var entrada = document.getElementById("entrada").value;
var boton = document.getElementById("boton");
var salida = document.getElementById("salida");

const URL = "http://openlibrary.org/search.json?q="
function getLibro(){
    axios.get(`${URL}${entrada}`)
    .then(function(response){
        for(let i=0; i<response.data.docs.length; i++){
            console.log(response.data.docs)
            if(response.data.docs[i].title_suggest == entrada){
                console.log(response.data.docs[i])
                salida.innerHTML = (`El autor/a del libro <b>${entrada}</b> es <b>${response.data.docs[i].author_name}</b>`)
                i=100000000000000000000;
            }
        }
    })
    .catch(function(error){
        console.log(error)
    })
}
getLibro()