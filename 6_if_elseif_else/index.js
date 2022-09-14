/*let getal1 = Number(prompt("Wat is het eerste getal?")), getal2 = Number(prompt("Wat is het tweede getal?"));

if(getal1 > getal2){
    console.log("%c%i%c is groter dan %c%i", "color: yellow", getal1, "color:inital", "color: yellow", getal2);
}else if(getal1 === getal2){
    console.log("%c%i%c is gelijk aan %c%i", "color: yellow", getal1, "color:inital", "color: yellow", getal2);
}else{
    console.log("%c%i%c is kleiner dan %c%i", "color: yellow", getal1, "color:inital", "color: yellow", getal2);
}

 */
let naam = prompt("Wat is je naam?");
let beroep = prompt("Wat is je statuut? student, bediende, arbeider of werkzoekende")

if(beroep === "student"){
    console.log("%s is %cstudent", naam, "color:yellow");
}else if(beroep === "bediende"){
    console.log("%s is %cbediende", naam, "color:yellow");
}else if(beroep === "arbeider"){
    console.log("%s is %carbeider", naam, "color:yellow");
}else{
    console.log("%s is %cwerkzoekende", naam, "color:yellow");
}


/*
//VERKORTE NOTATIE IF STATEMENT//

let getal1 = 2;
let getal2 = 3;

getal1>getal2 ? console.log("getal1 is groter") : console.log("getal2 is groter");

//ORIGINELE VORM//

if(getal1>getal2){
    console.log("getal1 is groter");
}else{
    console.log("getal2 is groter");
}

 */