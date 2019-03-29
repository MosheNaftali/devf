const request = require('request')

const URL = 'https://pokeapi.co/api/v2/pokemon/1'
request.get(URL,(error,response,body)=>{
    const json = JSON.parse(body);
    for(let i=0; i<json.types.length; i++){
        console.log(json.types[i].type.name)
    }
})