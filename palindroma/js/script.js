

function palindroma(parola){

    return parola.split("").reverse().join("");
}

var answer;

do{

    let stringa = prompt('Inserisci una parola');

    if(stringa == palindroma(stringa)){
        alert("La parola è palindroma");
    }
    else{
        alert("La parola non è palindroma");
    }

    answer = prompt("Vuoi inserire un altra parola : y or n");
}

while(answer == "y");

