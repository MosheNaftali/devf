// class libros{
//     constructor(titulo,autor,leido){
//         this.titulo = titulo;
//         this.autor = autor;
//         this.leido = leido;
//     }
// }
// const elPsicoanalista = new libros("El Psicoanalista", "John Katzenbach", true);
let libros = [
    {titulo:"El Psicoanalista", autor:"John Katzenbach", leido:true},
    {titulo:"El Sobre", autor:"Jaim Eliav", leido:false}
]
for(let i = 0;i < libros.length; i++){
    let libro = libros[i];
    let imprime = `${libro.titulo} escrito por ${libro.autor}`;
    if(libro.leido){
        console.log("Ya has leido el libro", imprime);
    }else{
        console.log("No has leído el libro", imprime);
    }
}