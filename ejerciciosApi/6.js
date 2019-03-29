const URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-03-13&end_date=2019-03-18&api_key=FKk4DW2L8uCJ2G1yDm0NEGoTiz35tW1fdOLudHHk"
function getPokemon(){
    axios.get(`${URL}`)
    .then(function(response){
            console.log(response.data.near_earth_objects["2019-03-13"][0].name)
    })
    .catch(function(error){
        console.log(error)
    })
}
getPokemon()
