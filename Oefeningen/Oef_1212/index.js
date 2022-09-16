/**
let input1 = Number(prompt("What is the first number you want to find the GCF of?"));
let input2 = Number(prompt("What is the second number you want to find the GCF of?"));
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

console.log(res);**/

let input = Number(prompt("How many numbers do you want to enter?"));
let num;
let opvang = "";
let res;

for(let i= 1; i <= input; i++){
    num = Number(prompt("What is number "+i));
    opvang = opvang + num + " ";
}

function toNumber(value){
    return Number(value);

}

opvang = opvang.substring(0, opvang.length-1).split(" ");
let nums = opvang.map(toNumber);

for(let x = 0; x <= Math.min(...nums); x++){
    for(let y = 1; y <= input; y++){
        if(nums[y]%x == 0){
            res = x;
        }
    }
}

console.log(res);
