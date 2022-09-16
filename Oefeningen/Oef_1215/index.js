/**
 *
 * Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen ze willen ingeven.
 * Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm;
 *
 * **/

let amount = Number(prompt("How many numbers would you like to add up?"));
let i = 1;
let input = 0;
let sum = 0;

while(i <= amount){
    input=Number(prompt("What will be number "+i));
    sum = sum + input;
    i++;
}

console.log(sum);