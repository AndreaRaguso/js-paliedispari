let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

submit.onclick = function(){
    
    let nameUser = document.getElementById("nameUser").value;
    let num = document.getElementById("number").value;
    let choose = document.getElementById("choose").value;

    if (nameUser==null || nameUser==="" || num==null || num===""|| choose==null || choose===""){
        alert("non hai inserito i dati giusti!")
    }

    else{


        let numrandom = Math.floor(Math.random() * 5) + 1;

        let num1 = parseInt(numrandom);
        let num2 = parseInt(num);

        let sumnum = num1 + num2;
        let flag = 0

        console.log(num1);
        console.log(num2);
        console.log(sumnum);

        if(choose == "Pari" && sumnum % 2 == 0){
            alert("La somma è Pari " + nameUser + " ha vinto!");
        }
        else if (choose == "Dispari" && sumnum % 2 != 0){
            alert("La somma è Dispari " + nameUser + " ha vinto!");
        }
        else if(sumnum % 2 == 0){
            alert("La somma è Pari " + nameUser + " ha perso!");
        }
        else if(sumnum % 2 != 0){
            alert("La somma è Dispari " + nameUser + " ha perso!");
        }

    }
}