let buttons = document.querySelectorAll(".button");
let sendButton = document.querySelector(".send_button");
let clear = document.querySelector(".clear_button");
let dogAge = "";
let dogToHuman;
let result = document.querySelector(".result")
let collector = "";

let inputWindow = document.getElementById("input");

buttons.forEach(checkButtons);

/*function checkButtons(button) {
    button.addEventListener("click", function () {
        console.log("klik");
        if(collector = 0){
            collector += button.value;
        }else if(collector <= 20){
            collector += button.value;
            console.log(parseInt(collector));
        }else{
            console.log("gebt er al 2 staan");console.log(collector);
        }
        inputWindow.innerHTML = collector;
    })
}*/

function checkButtons(button){
    button.addEventListener("click", function(){
        collector += button.value;
        inputWindow.innerHTML = collector;
        dogAge = collector;
        console.log(dogAge);
    })
}

sendButton.addEventListener("click", function(){
    dogToHuman = Math.floor(Math.log(16) * dogAge + 31);
    result.innerHTML = "Your dog would be " + dogToHuman + " in human years! 🤯";

    console.log(dogToHuman);
})

clear.addEventListener("click", function(){
    result.innerHTML = "";
    inputWindow.innerHTML = "";
    collector = "";
})

//console.log("Your dog would be %i in human years! 🤯", dogToHuman);