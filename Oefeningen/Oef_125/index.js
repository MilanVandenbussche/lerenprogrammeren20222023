let i = 0;
let opvangBak = "";

for(i; i <= 99; i++){
    if(i <= 9){
        opvangBak = opvangBak + 0 + i + ", ";
    }else{
        opvangBak = opvangBak + i + ", ";
    }
}

console.log(opvangBak.substring(0,opvangBak.length-2));