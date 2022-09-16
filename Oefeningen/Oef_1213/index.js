/**
 * Het berekenen van de LCM is:
 *
 * lcm(num1, num2) = (num1*num2) / (gcf(num1, num2)
 *
 * gcf = grootste gemene deler
 *
 * voorbeeld:
 *
 * lcm(15,  27) = (15*27) / ((gcf(15, 17) = 3)
 *
 * **/

let input1 = Number(prompt("What is the first number you want to find the LCM of?"));
let input2 = Number(prompt("What is the second number you want to find the LCM of?"));
let num1;
let num2;

if(input1 < input2){
    num1 = input1;
    num2 = input2;
}else{
    num1 = input2;
    num2 = input1;
}

let res;


for(let i = 0; i <= num1; i++){
    if(num1%i == 0 && num2%i == 0){
        res = i;
    }
}

res = (num1 * num2) / res;

console.log("Het kleinste gemene veelvoud van %i en %i is: %c%i", num1, num2, "color:yellow", res);