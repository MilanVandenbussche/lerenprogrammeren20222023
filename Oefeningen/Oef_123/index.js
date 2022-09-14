let aantalSterren = Number(prompt("Hoeveel sterren wil je zien? Kies een even getal"));
let x = "";

for(i = 1; i <= aantalSterren; i++) {
    x = x + "*";
    console.log(x);
}

for(i; i >= 1; i--){
    console.log("*".repeat(i));
}