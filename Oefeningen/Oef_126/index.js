let input = prompt("What would you like to say?");
let inputLower = input.toLowerCase();
let letter = prompt("Which letter do you want counted in you text?");
let letterLower = letter.toLowerCase();
let count = 0;

// console.log(input, input.length, "Letter die geteld moet worden:", letter);

for (let i = 0; i < input.length; i++) {
    let arr = inputLower.split("");
    if (arr[i] == letterLower) {
        count++;
    }
}

console.log(`"` + input + `" bevat`, count, "keer", letter);

