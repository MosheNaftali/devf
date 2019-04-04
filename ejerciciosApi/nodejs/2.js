const request = require('request');

const URL = "http://openlibrary.org/search.json?q=i+robot"
request.get(URL,(error, response, body) =>{
    const json = JSON.parse(body);
    console.log(json.docs[0].author_name)
})