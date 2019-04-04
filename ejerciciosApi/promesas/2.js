
function autor(id){
    const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"
    axios.get(`${URL}${id}`)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
}

autor(423);