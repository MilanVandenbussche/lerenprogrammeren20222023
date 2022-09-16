/**
 *
 * Schrijf een programma die de faculteit van een getal weergeeft.
 * De faculteit van 5 is bijvoorbeeld:
 * 5x4x3x2x1 = 120
 * Vraag dit getal aan de gebruiker
 *
 * **/

let n = Number(prompt("Which number do you want the faculty of?"));
let i = 1;
let product = i;

if(n == 0){
    console.log(1);
}else{
    while(i <= n){
        product = product * i;
        console.log(product);
        i++;
    }
}

