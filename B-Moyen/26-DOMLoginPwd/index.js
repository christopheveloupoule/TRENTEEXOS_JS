const login = document.querySelector("#login");
const password = document.querySelector("#password");
const resultatPassword = document.querySelector("#resultatPassword");

login.addEventListener("keyup",function(){ //appui et relachement touche du clavier
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/ //email
    if(!regex.test(login.value)){ //fonction test
        login.style.backgroundColor="red";
    } else {
        login.style.backgroundColor="green";
    }
});

password.addEventListener("blur", function(){ //perte de focus
    var carDecimal = /\d/
    var caracSpeciaux = /[$&@!]/
    var error = "";

    if(password.value.length < 6){
        error+="<li>trop court</li>";
    } else if(password.value.length > 12){
        error+="<li>est trop long</li>";
    }

    if(!password.value.match(carDecimal)){
        error +="<li>doit contenir un chiffre</li>";
    }
    if(!password.value.match(caracSpeciaux)){
        error +="<li>doit contenir un caractère spécial $,&,@ ou !</li>"
    }

    if(error !== ""){
        resultatPassword.innerHTML = "Le password est : <ul>" + error + "</ul>"
        resultatPassword.style.border = "2px solid red";
    } else {
        resultatPassword.innerHTML = "Le password est valide"
        resultatPassword.style.border = "2px solid green";
    }
});