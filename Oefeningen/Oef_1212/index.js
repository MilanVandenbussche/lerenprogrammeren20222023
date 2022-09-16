/**
 * Code van programiz.com
 *
 * let aantal = Number(prompt("Hoeveel Fibonacci cijfers wenst u te zien?"));
 let opvang = "";

 function fibonacci(num){
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

 if(aantal <= 0){
    console.log("Kies een positief getal.");
    aantal = Number(prompt("Hoeveel Fibonacci cijfers wenst u te zien?"));
}else{
    for(let i = 0; i < aantal; i++){
        opvang = opvang + fibonacci(i) + " ";
    }
}

 console.log(opvang);


 * Mijn interpratie
 *
 * let aantal = Number(prompt("Hoeveel fibonacci cijfers wenst u te zien?"));
 let opvang = "";

 for(i=0;i<aantal;i++){
    if(i < 2){
        opvang = opvang + i + ", ";
    }else{
        let calc = (i - 1) + (i - 2);
        opvang = opvang + calc + ", ";
    }
}

 console.log(opvang);

 let aantal = Number(prompt("Hoeveel fibonacci cijfers wens je te zien?"));
 let y=0;
 let i=1;
 let calc = y + i;
 let x = calc;
 let opvang = "";

 for(let t = 1; t <= aantal; t++){
    opvang = opvang + y + " " + i + " " + x + ", ";
    if(y < 2){
        y = i;
        i = 2;
    }else{

    }
}

 console.log(opvang);


let input = Number(prompt("How many fibonacci numbers do you want?"));
let collector;
let opvang = "";

for (var i = 0; i < input; i++) {
    var x=i;
    if (i <= 2) {
        x = i;
        opvang = opvang + x + ", ";

    } else {
        x = collector;
        var y = x;
        var z = x;
        y = (y - 1);
        z = (z - 2);
        x = y + z;
        opvang = opvang + x + (", ");
    }
    console.log("Dit is x nu:", x);
    collector = x;
    console.log(collector);
    // console.log(opvang, i, "(i),", x, "(x),", y, "(y),", z, "(z)");
    // console.log("");

}

let input = Number(prompt("How many Fibonacci numbers do you want in your sequence."));
let x=0;
let y=1;
let z;

let fib = x + ", " + y + ", ";

for(let i = 2;i<=input;i++){
    fib = fib + (x+y) + ", ";
    x = y;
    z = y;
}

console.log(fib);
 **/

let input = Number(prompt("How many fibonacci numbers do you wanne see?"));
let x=0;
let y=1;
let som;
let opvang = "";

for(let i = 0; i < input; i++){
    if(i<2){
        opvang = opvang + i + ", ";
    }else{
        som=x+y;
        x=y;
        y=som;

        opvang = opvang + y + ", ";
    }
}

console.log(opvang);
