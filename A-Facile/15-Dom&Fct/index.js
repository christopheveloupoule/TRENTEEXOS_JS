const divResultat = document.querySelector("div");
const monButton = document.querySelector("button");

monButton.addEventListener("click", function(){
    divResultat.innerHTML = pileOuFace();
});

/* JQuery
$("button").on("click", function (){
    $("div").html(pileOuFace());
});*/


function pileOuFace(){
    var random = Math.floor(Math.random() * 2);
    return (random >= 1) ? "face" : "pile"; //Ternaire
}