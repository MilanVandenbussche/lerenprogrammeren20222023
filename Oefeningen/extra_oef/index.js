/**
 * Geef een te raden getal in: 67
 * Raad het getal: 5
 *
 * de pc zegt dan hoger of lager tot het getal geraden is
 * geef ook weer hoeveel pogingen de gebruiker nodig heeft
 *
 * for loop!
 */

let nummer = Math.round(Math.random() * 100);
let pogingen = 1;
let userInput = Number(prompt("Raad het getal."));

for (i = 0; userInput !== nummer; i++) {
    if (userInput !== nummer) {
        pogingen++;
        if (userInput > nummer) {
            userInput = Number(prompt("Lager"));
            console.log("Lager");
        } else {
            userInput = Number(prompt("Hoger"));
            console.log("Hoger")
        }
    }
}

if (userInput === nummer) {
    var reload = document.createElement("div");
    reload.classList.add("reload");
    var score = document.createElement("div");
    score.classList.add("score");
    document.body.appendChild(reload, score);
    switch (pogingen) {
        case 1:
            score.innerHTML = "Geraden in 1 poging!";
            console.log("Geraden in 1 poging!");
            break;
        default:
            score.innerHTML = "Geraden in " + pogingen + " pogingen!";
            console.log("Geraden in %i pogingen!", pogingen);
            break;
    }
}

reload.addEventListener("click", ()=>{
    document.location.reload();
})