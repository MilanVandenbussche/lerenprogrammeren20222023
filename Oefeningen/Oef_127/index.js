/*let nummer = Number(prompt("Pick a number. Any number!"))
let i = 0;

for(i; i <= nummer; i+=2){
    console.log(i);
}
 */

let nummer = Number(prompt("Pick a number. Any number!"))
let i = 0;

for(i; i <= nummer; i++){
    if(i%2==0 && i != 0){
        console.log(i);
    }
}