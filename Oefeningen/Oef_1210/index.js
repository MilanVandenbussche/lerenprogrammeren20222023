/**let tafel = Number(prompt("Kies een vermenigvuldigingstafel."));
 let eindGetal = Number(prompt("Kies een eindgetal."));

 for(let i = 0; i <= eindGetal; i ++){
    var res = (tafel * i);
    console.log("%i x %i = %i", tafel, i,  res);
}**/

/*let tafel = Number(prompt("Kies een vermenigvuldigingstafel."));
let eindGetal = Number(prompt("Kies een eindgetal."));
let bundel = "";

for (let x = 0; x <= 2; x++) {
    for (let i = 0; i <= eindGetal; i++) {
        let res = (tafel * i);
        bundel = bundel + tafel + " x " + i + " = " + res + ", ";

    }
}*/

/**let tafel = Number(prompt("Kies een vermenigvuldigingstafel."))
let eindGetal = Number(prompt("Kies een eindgetal."));
let opvang = "";
let count = 0;
let res = tafel * eindGetal;


for (i = 0; i <= eindGetal; i++) {
    if(count < 3){
        count++;
        opvang = opvang + tafel + " x " + i + " = " + res + ", ";
        console.log(opvang);
    }else{
        count = 0;
    }
}**/

/**for (i=0; i <= eindGetal; i++){
    var res = tafel * i;
    opvang = opvang + tafel + " x " + i + " = " + res + ", ";
    for(x = 0; x <= 2; x++){
        count++;
        console.log()
    }
}*/

let tafel = Number(prompt("Kies een vermenigvuldigingstafel."));
let eindGetal = Number(prompt("Kies een eindgetal."));
let res = "";
let y = 1;

for(let i=1;i <= eindGetal; i++){
    if(y<=eindGetal){
        for(let x=1; x<=3;x++){
            if(y<=eindGetal){
                res = res + tafel + " x " + y + " = " + tafel * y + ", ";
                y++;
            }
        }
        console.log("■ " + res.substring(0,res.length-2));
        res = "";
    }
}