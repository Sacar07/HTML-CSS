const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

for (i=0;i<nepaliNames.length;i++){
    console.log(nepaliNames[i]);
}


const showPopup = () =>{
    console.log("show popup");
    return undefined
}
/* callback function
- a function passed as an argument to another function */

setTimeout(showPopup,2000)

/* anonymous function */
setTimeout(()=>{
    console.log("second popup");
},3000)


