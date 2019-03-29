function autor(id){
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`
    axios.put(URL,{
        "name":"Moshe",
        "last_name":"Shabes",
        "nacionalidad":"MX",
        "biography":"Nacimiento en México, estudiante de ingeniería en sistemas computacionales en UNITEC",
        "gender":"M",
        "age":"21"
    })
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
}

autor(2184);