/**
 *
 * De gebruiker geeft een eindgetal in. Bijv. 100
 * Het programma kiest daarvan zelf een getal tussen 0 en 100 die de gebruiker niet kent.
 * Vervolgens dient de gebruiker het getal te raden.
 * Het programma antwoord telkens als volgt:
 * Het getal is kleiner of het getal is groter.
 * Het resultaat: Proficiat, u hebt het getal in x aantal keer geraden.
 * Tip: built-in functie
 *
 * **/

let getalInput = Number(prompt("The number should be between 0 and..."));
let getal = Math.round(Math.random()*getalInput);

let input = Number(prompt("Take a guess!"));
let pogingen = 1;

while(input != getal){
    if(input < getal){
        input = Number(prompt("Het getal is groter"))
    }else{
        input = Number(prompt("Het getal is kleiner"))
    }

    pogingen++;
}

if(pogingen == 1){
    console.log("Proficiat, u hebt het getal in %c%i %ckeer geraden!", "color:yellow", pogingen, "color:default");
}else{
    console.log("Proficiat, u hebt het getal in %c%i %ckeren geraden!", "color:yellow", pogingen, "color:default");
}
