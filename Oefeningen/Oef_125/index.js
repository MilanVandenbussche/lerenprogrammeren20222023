let i = 0;
let opvangBak = "";

for(i; i <= 99; i++){
    if(i <= 9){
        opvangBak = opvangBak + 0 + i + ", ";
    }else if(i === 99){
        opvangBak = opvangBak + i;
    }else{
        opvangBak = opvangBak + i + ", ";
    }
}

console.log(opvangBak);