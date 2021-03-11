var readline = require("readline-sync");

var saisie = parseInt(readline.question("Factorelle : "));
var resultat = factorielle(saisie);

console.log("Le résultat de la factorielle de " + saisie + " est " + resultat);


function factorielle(n){
    if(n > 1){
        return n * factorielle(n-1)
    } else {
        return 1;
    }
}

// for(var i = saisie ; i > 1; i--){
//     resultat *= i;
//     console.log("Etape "+ i + " : " + resultat);
// }
// console.log("Le résultat de la factorielle de " + saisie + " est " + resultat);