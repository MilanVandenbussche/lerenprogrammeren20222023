let userSelectionButtons = document.querySelectorAll(".button");
let code = "";
let userInput = "";

for (i = 0; i <= 3; i++) {
    let codePicker = Math.round(Math.random() * 5);
    code = code + codePicker + " ";
}

//console.log(code.split(" ").splice(0, 4))

code = code.split(" ").splice(0, 4);
let codeColors = ""

code.forEach((color) => {
    switch (color) {
        case "0":
            codeColors = codeColors + "red" + " ";
            break;
        case "1":
            codeColors = codeColors + "orange" + " ";
            break;
        case "2":
            codeColors = codeColors + "yellow" + " ";
            break;
        case "3":
            codeColors = codeColors + "green" + " ";
            break;
        case "4":
            codeColors = codeColors + "blue" + " ";
            break;
        case "5":
            codeColors = codeColors + "purple" + " ";
            break;
    }
})

console.log(codeColors);

userSelectionButtons.forEach((button) => {
    let buttonColor = button.id;
    button.addEventListener("click", () => {
        if(userInput.split(" ").length === 5){
            checkCode();
        }else{
            userInput = userInput + buttonColor + " ";
            console.log(userInput.split(" "));
        }
    })
})

function checkCode() {
    /**Check if any color from the input is in the code**/
    console.log("Checkin for match");
    arr1 = codeColors.split(" ");
    arr2 = userInput.split(" ").splice(0,4);

    let checkInput = arr1.filter((val, index) => {
        console.log("index", index)
        return arr2.includes(val);
    })

    console.log(checkInput);
}