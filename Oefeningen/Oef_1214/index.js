/**
 *
 * Schrijf een programma die een aantal getallen inleest en eindigt wanneer de gebruiker een negatief getal ingeeft
 *
 * **/
let input = 0;
let sum = 0;

while (input >= 0) {
    input = Number(prompt("Enter any number, if you want the sum of all the numbers entered. Enter a negative number"));
    if (input >= 0) {
        sum = sum + input;
    }
}

console.log(sum);