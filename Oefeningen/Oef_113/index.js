let birthYear = Number(prompt("Wat is uw geboortejaar?"));
let year = Number(prompt("Wat is het huidige jaar?"));

console.log(year - birthYear);

if(year - birthYear >= 18){
    alert("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
}else if(year - birthYear <= 0){
    alert("De waarden die u ingaf zorgen voor een negatief getal.")
}else{
    alert("Gelukkig heb ik m'n ouders die alles voor me regelen.");

}