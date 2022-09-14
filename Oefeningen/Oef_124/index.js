let nummer = Number(prompt("Van welk cijfer wil je de faculteit?"));
let i = nummer;
let opvang = i;

for(i -= 1; i >= 1; i--){
    opvang = opvang * i;
}

console.log("De faculteit van %i is %s", nummer, opvang);

