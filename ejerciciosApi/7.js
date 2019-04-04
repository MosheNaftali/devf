const URL = "https://pokeapi.co/api/v2/"
function getPokemon(id){
    axios.get(`${URL}pokemon/${id}`)
    .then(function(response){
        const POKEMON = {
            nombre: response.data.name,
            moves: response.data.moves,
            tipos: response.data.types,
            altura: response.data.height,
            peso: response.data.weight
        }
        console.log(POKEMON)
    })
    .catch(function(error){
        console.log(error)
    })
}
for(var i=1; i<=151; i++){
    getPokemon(i)
}