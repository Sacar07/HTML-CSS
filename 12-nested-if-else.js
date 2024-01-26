let willRain = false;
let hasProbability = true;

if(willRain){
    console.log("Carry umbrella");
} 
else if(hasProbability){
            console.log("has 80% chance better carry umbrella");
}
else{
            console.log("no need");
    }



let student = {
    name:"ram",
    paidStatus:false,
    hasScholarship:false
};

let {name} = student //obj destructuring

if(student.paidStatus){
    console.log(`${name} can give exam`);
}else if(student.hasScholarship){
        console.log(`${name} can give exam`);
    } else{
        console.log(`${name} can not give exam`);
    }



function getMonth (month){

    if(month == 1){
        return "jan"
    }
    else if(month == 2){
        return "feb"
    }
    else if(month == 3){
        return "mar"
    }
    else if(month == 4){
        return "apr"
    }
    else if(month == 5){
        return "may"
    }
    else if(month == 6){
        return "jun"
    }
    else if(month == 7){
        return "july"
    }
    else if(month == 8){
        return "aug"
    }
    else if(month == 9){
        return "sept"
    }
    else if(month == 10){
        return "oct"
    }
    else if(month == 11){
        return "nov"
    }
    else if(month == 12){
        return "dec"
    }
    else if(typeof(month) == typeof("other-data") || typeof(month) == typeof(null)) {
        return "invalid type:number"
    }
    else if(month<=0 || month >=13) {
        return "invalid, input between 1-12"
    }
    else{
        return "invalid"
    }
}

console.log(getMonth(0));


function switchGetMonth(switchMonth){
    switch (switchMonth) {
        case 1:
            return "jan";
        case 2:
            return "feb";
        case 3:
            return "mar";
        case 4:
            return "apr";
        case 5:
            return "may";
        case 6:
            return "jun";
        case 7:
            return "jul";
        case 8:
            return "aug";
        case 9:
            return "sep";
        case 10:
            return "oct";
        case 11:
            return "nov";
        case 12:
            return "dec";
        default:
        switch(true){
         case typeof(switchMonth) == typeof("other-data") || typeof(switchMonth) == typeof(null):
                    return "invalid type:number";
        default:
        return "Invalid, input between 1-12"
            }
        }
    }


console.log(switchGetMonth(null));