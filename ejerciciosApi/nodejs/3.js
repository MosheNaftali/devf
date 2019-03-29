const request = require("request")

const URL = "http://openlibrary.org/search.json?author=asimov"
request.get(URL,(error, response, body)=>{
    const json = (body);
    console.log(json)
})