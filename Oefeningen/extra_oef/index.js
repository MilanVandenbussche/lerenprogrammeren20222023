/**
 * Geef een te raden getal in: 67
 * Raad het getal: 5
 *
 * de pc zegt dan hoger of lager tot het getal geraden is
 * geef ook weer hoeveel pogingen de gebruiker nodig heeft
 *
 * for loop!
 */

//let nummer = Math.round(Math.random() * 100);
let nummer = 27;
let pogingen = 1;
let userInput = Number(prompt("Raad het getal."));

for (i = 0; userInput !== nummer; i++) {
    if (userInput !== nummer) {
        pogingen++;
        if (userInput > nummer) {
            console.log("Lager");
        } else {
            console.log("Hoger")
        }
        userInput = Number(prompt("Raad het getal."));
    }
}

if (userInput === nummer) {
    var reload = document.createElement("div");
    reload.classList.add("reload");
    document.body.appendChild(reload);
    switch (pogingen) {
        case 1:
            console.log("Geraden in 1 poging!");
            break;
        default:
            console.log("Geraden in %i pogingen!", pogingen);
            break;
    }
}

reload.addEventListener("mouseover", () =>{

})