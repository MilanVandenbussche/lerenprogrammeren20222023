let tafel = Number(prompt("Kies een vermenigvuldigingstafel."));
let eindGetal = Number(prompt("Kies een eindgetal."));

for(i = 0; i <= eindGetal; i += tafel){
    console.log("%i x %i = %i", tafel, i, tafel*i);
}