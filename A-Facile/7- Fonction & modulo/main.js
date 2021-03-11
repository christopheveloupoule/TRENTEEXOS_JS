var c1 = 123;
var c2 = 20;

afficherResultatDivisionPar3(c1);
afficherResultatDivisionPar3(c2);

/*function afficherResultatDivisionPar3(chiffre) {
    if (chiffre % 3 === 0) {
        console.log("Le résultat de " + chiffre + " / 3 = " + (chiffre/3));
    } else {
        console.log("Le chiffre" + chiffre + " n'est pas divisible par 3");
    }
}*/

function afficherResultatDivisionPar3(chiffre) {
    if (verificationDivisiblePar3(chiffre)) {
        console.log("Le résultat de " + chiffre + " / 3 = " + (chiffre/3));
    } else {
        console.log("Le chiffre" + chiffre + " n'est pas divisible par 3");
    }
}

function verificationDivisiblePar3(chiffre){
    return chiffre % 3 === 0;
}