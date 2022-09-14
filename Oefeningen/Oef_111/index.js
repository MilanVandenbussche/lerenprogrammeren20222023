let age = Number(prompt("Wat is uw leeftijd?"));

if(age <= 18){
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.");
}else{
    console.log("Je bent %i jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.", age);
}