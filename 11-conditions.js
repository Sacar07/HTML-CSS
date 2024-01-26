let isCold = true;
if (isCold){
    console.log(`take jacket`);
}
else{
    console.log(`no need`);
}


let number1 = 1;
let number2 = 2;
if (number1<number2){
    console.log("num1 is less");
}
else{
    console.log("num1 is not less");
}

let employee1 = {
    name:"ram",
    role:"reception"
}
let employee2 = {
    name: "hari",
    role: "reception"
}
let employee3 = {
    name: "sita",
    role: "manager"
}

let allowedRole = "manager"



function canAccess(roleDetail){
    if (roleDetail.role == allowedRole) {
      return `${roleDetail.name} can access vault`;
    } 
    else {
    return `${roleDetail.name} can not access vault`;
    }
}
console.log(canAccess(employee1));
console.log(canAccess(employee2));
console.log(canAccess(employee3));



