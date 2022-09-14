/*
declareer de volgende variabelen
getal1, getal2, quotient, verschil, som, product
Druk af in console wat het resultaat is van de 2 getallen
 */

let getal1 = Number(prompt("Wat is het eerste getal?")), getal2 = Number(prompt("Wat is getal 2?"));
let quotient, verschil, som, product;

quotient = getal1 / getal2;
verschil = getal1 - getal2;
som = getal1 + getal2;
product = getal1 * getal2;

console.log("Het quotient is: %c %i", "color:yellow", quotient);
console.log("Het verschil is: %c %i", "color:yellow", verschil);
console.log("De som is: %c %i", "color:yellow", som);
console.log("Het product is: %c %i", "color:yellow", product);