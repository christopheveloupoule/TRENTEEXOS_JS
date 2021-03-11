var readline = require("readline-sync");

var personnage = {};

personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = parseInt(readline.question("Quel age ? "));

personnage.carac = {}
personnage.carac.force = 7;
personnage.carac.agi = 5;
personnage.carac.intel = 3;

console.log(personnage);