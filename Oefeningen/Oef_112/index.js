/* Code met if else if else
let age = Number(prompt("Wat is uw leeftijd?"));

if(age >= 18){
    console.log("Je bent %i jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.", age);
    let price = Number(prompt("Hoeveel vakken wilt u op uw bulletin? 2, 4, 6, 8, 10 of 12"));
    if(price === 2) {
        console.log("De prijs voor uw bulletin zal €4 zijn.");
    }else if(price === 4){
        console.log("De prijs voor uw bulletin zal €8 zijn.");
    }else if(price === 6){
        console.log("De prijs voor uw bulletin zal €12 zijn.");
    }else if(price === 8){
        console.log("De prijs voor uw bulletin zal €16 zijn.");
    }else if(price === 10){
        console.log("De prijs voor uw bulletin zal €18 zijn.");
    }else if(price === 12){
        console.log("De prijs voor uw bulletin zal €20 zijn.");
    }else{
        console.log("Het gekozen aantal is geen beschikbare optie");
    }
}else{
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.");
}

 */

// Code met switch

let age = Number(prompt("Wat is uw leeftijd?"));

if (age >= 18) {
    console.log("Je bent %i jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.", age);
    let bulletin = price();
    if(bulletin > 0){
        console.log("De prijs voor uw bulletin zal %s zijn", bulletin);
    }else{
        console.log("Gelieve 2, 4, 6, 8, 10 of 12 vakken te kiezen.");
    }
    function price(){
        price = Number(prompt("Hoeveel vakken wilt u op uw bulletin? 2, 4, 6, 8, 10 of 12"));
        switch (price){
            case 2:
                return 4;
            case 4:
                return 8;
            case 6:
                return 12;
            case 8:
                return 16;
            case 10:
                return 18;
            case 12:
                return 20;
            default:
                return 0;
        }
    }
}else{
console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum %c18 %cjaar oud zijn.", "color:red", "color:default");
}