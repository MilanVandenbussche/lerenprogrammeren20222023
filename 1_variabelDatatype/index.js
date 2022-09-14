var voorNaam = "Milan";
var familieNaam = "Vandenbussche";
var geboorteJaar = 1999;
var gehuwd = false;
var niets;
var x = Number("Full stack dev");

console.log(voorNaam, "is geboren in", geboorteJaar+". Is", voorNaam, "gehuwd?", gehuwd);
console.log("voorNaam is een:", typeof(voorNaam));
console.log("geboorteJaar is een:", typeof(geboorteJaar));
console.log("gehuwd is een:", typeof(gehuwd));

console.log(niets);
console.log(typeof(niets));
niets = 88;
console.log(niets);
console.log(typeof(niets));
console.log(x);
console.log(typeof(x));

console.log(voorNaam, "zijn volledige naam is:", voorNaam, familieNaam); //komma tussen 2 vars zorgt voor spatie in console
console.log(voorNaam+familieNaam); //plusteken tussen 2 vars zorgt ervoor dat ze aan elkaar hangen in console
console.log(voorNaam + " " + familieNaam);

window.confirm("Ben je zeker dat je wesnt te verwijderen?");
window.alert("Hallo, welkom bij javascript");