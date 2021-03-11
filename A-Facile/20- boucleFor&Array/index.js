var tab = [2,6,10,3,8,7,20];

var resultat = 0;

for(var cpt = 0; cpt < tab.length; cpt++){
    if(tab[cpt] % 2 === 0){
        resultat += tab[cpt];
        console.log("itération : " + cpt + " : " +resultat );
    } else {
        console.log("itération : " + cpt + " : n'est pas paire" );
    }
}

console.log("Le total est de : " + resultat);