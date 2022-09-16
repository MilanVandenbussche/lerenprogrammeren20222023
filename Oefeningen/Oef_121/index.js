/*let userAmount = Number(prompt("Hoeveel cijfers wenst u in te geven?"));
let teller = 1;
let getallen;

for(teller; teller <= userAmount; teller++){
    getallen = Number(prompt("Wat is het getal"));

    console.log(getallen + getallen);
}

let aantalGetallen = Number(prompt("Hoeveel getallen wenst u in te geven?"));
let i = 1;
let totaleSom = 0;

for(i; i <= aantalGetallen; i++){
    let ingaveGetal = Number(prompt("Geef getal " + i + " in"));
    totaleSom = totaleSom + ingaveGetal;
}

console.log("De totale som van", aantalGetallen, "getallen is", totaleSom);

 */

let input = Number(prompt("How many numbers do you want to put in?"));
let sum = 0;
let x = "";

for (let i = 1; i <= input; i++) {
    let number = Number(prompt("What is number " + i));
    sum = sum + number;

    x = x + number + " + ";
}

console.log(x.substring(0,x.length-2) + "=", sum);
