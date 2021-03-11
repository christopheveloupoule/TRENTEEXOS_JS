var readline = require("readline-sync"); //Module que l'on veut récupérer

var c = 2;
var puissance = parseInt(readline.question("Puissance voulue ? ")); //Fonction question pr une saisie
//parseInt pour un entier
console.log(c + " à la puissance " + puissance + " = " + Math.pow(c,puissance));