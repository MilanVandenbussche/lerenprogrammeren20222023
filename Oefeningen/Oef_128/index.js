let nummer = Number(prompt("Let's multiply by 2. Pick a number"));
let i = 1;
let resultaat = "";

for(i; i <= nummer; i *= 2){
    resultaat = resultaat + i + ", ";
}

console.log(resultaat);