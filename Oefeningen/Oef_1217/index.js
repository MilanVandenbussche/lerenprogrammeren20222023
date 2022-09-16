/**
 *
 * Schrijf een programma die ervoor zorgt dat je ieder 3de getal in een reeks 2x weergeeft en ieder reëel 10de getal weglaat maar wel een spatie schrijft.
 * De gebruiker geeft het eindgetal in.
 * Voorbeeld van de output:
 * 1,2,3,3,4,5,6,6,7,8,9,9, ,11,12,12,13,14,15,15,16,17,18,18,19, ,21,21,..,99
 *
 * **/

let n = Number(prompt("What should be the final number?"));
let tafel3 = 1;
let tafel10 = 1;
let i = 1;
let opvang = "";

while (i <= n) {
    if(i == tafel10*10){
        opvang = opvang + " ,";
        tafel10++;
    }else{
        opvang = opvang + i + ",";
    }
    while (tafel3 * 3 <= n) {
        if (tafel3 * 3 == i) {
            opvang = opvang + (tafel3*3) + ",";
        }
        tafel3++;
    }
    i++;
    tafel3 = 1;
}

console.log(opvang.substring(0,opvang.length-1));

