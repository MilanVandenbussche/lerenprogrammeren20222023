/** Oplossing Tom
 *
 * const aantalLijnen = Number(prompt("Geef een aantal lijnen in:"));//10
 * const helft = aantalLijnen/2;//5
 * let ster = "*";
 * //1<=5
 * for(let i=1;i<=helft;i++){
 *     console.log(ster);
 *     ster=ster + "*";
 * }
 * ster = ster.substring(0,ster.length-1);
 * for(let i=1; i<= helft;i++){
 *     console.log(ster);
 *     ster = ster.substring(0,ster.length-1);
 * }
 *
 * **/

let aantalSterren = Number(prompt("Hoeveel sterren wil je zien? Kies een even getal"));
let x = "";

for(i = 1; i <= aantalSterren; i++) {
    x = x + "*";
    console.log(x);
}

for(i; i >= 1; i--){
    console.log("*".repeat(i));
}