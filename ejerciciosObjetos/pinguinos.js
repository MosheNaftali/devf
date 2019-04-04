const myPenguin = {
    character:"Skinner",
    origin:"Madagascar",
    notes:"A crafty group of penguins who try to escape the zoo to go back to Antarctica. The penguins got their own TV series and also a movie."
}
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`);
myPenguin.puedeVolar = true;
myPenguin.graznar = function(){console.log("Kaww Kaww")}
myPenguin.saludar = function(){console.log(`Hola, soy un pingüino y mi nombre es ${this.character}`);}
myPenguin.character = "Señor Pingu";
myPenguin.saludar();
myPenguin.volar = function(){
    if(this.puedeVolar){
        console.log("Puede volar");
    }else{
        console.log("No puede volar");
    }
};
myPenguin.volar();
// class myPenguin{
//     constructor(character,origin,notes){
//         this.character = character,
//         this.origin = origin,
//         this.notes = notes
//     }
//     graznar(){
//         console.log("Kaww kaww");
//     }
// }
// const skinner = new myPenguin("Skinner","Madagascar","A crafty group of penguins who try to escape the zoo to go back to Antarctica. The penguins got their own TV series and also a movie.")
// console.log(`Hola, soy un pinguino y mi nombre es ${skinner.character}`);

