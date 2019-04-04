function autor(id){
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`
    axios.delete(URL)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
}

autor(423);