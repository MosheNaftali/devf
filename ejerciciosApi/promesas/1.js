//AXIOS

/// <reference path="typings/globals/jquery/index.d.ts" />

// function autor(){
//     const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"
//     axios.post(URL,{
//         "name":"Moshe",
//         "last_name":"Shabes",
//         "nacionalidad":"MX",
//         "biography":"Nacimiento en México, estudiante de ingeniería en sistemas computacionales en UNITEC",
//         "gender":"M",
//         "age":21
//     })
//     .then(function(response){
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// autor()

//JQUERY
datos = {
    "name":"Moshe",
    "last_name":"Shabes",
    "nacionalidad":"sssdsd",
    "biography":"Nacimiento en México, estudiante de ingeniería en sistemas computacionales en UNITEC",
    "gender":"M",
    "age":21
}
function autor(){
    const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"
    $.post(URL,datos,function(){
        console.log("Success")
    })
        .done(function(){
            console.log(arguments)
        })
        .fail(function(){
            console.log(error)
        })
}
autor()