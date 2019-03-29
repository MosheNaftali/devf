datos = {
    "name": "Moshe",
    "last_name": "Naftali",
    "nacionalidad": "MX",
    "biography": "Nacimiento en México, estudiante de ingeniería en sistemas computacionales en UNITEC",
    "gender": "M",
    "age": 21
}
datosCambiado = {
    "name": "Moises",
    "last_name":"Shabes"
}
var id;
const crearAutor = new Promise((resolve,reject) => {
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
    $.post(URL,datos)
        .done(function(){
            resolve(console.log(arguments))
            id = arguments[0].id
        })
        .fail(function(){
            reject(new Error("Error al escribir datos"))
        })
    const modificarAutor = new Promise((resolve,reject) => {
        function prueba(){
        axios.post(`${URL}${id}/${datosCambiado}`)
            .then(function(response){
                resolve(console.log(response.data))
            })
            .catch(function(error){
                reject(error)
            })
        }
        prueba()
    })
})
crearAutor
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
modificarAutor
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))