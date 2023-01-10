

function palindroma(parola){

    return parola.split("").reverse().join("");
}

let stringa = prompt('Inserisci una parola');

if(stringa == palindroma(stringa)){
    alert("La parola è palindroma");
}
else if(isNaN(stringa)){
    alert("Hai inserito una parola non valida");
}
else{
    alert("La parola non è plaindroma");
}
