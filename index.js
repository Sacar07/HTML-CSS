/* synchronous */
console.log(1);
console.log(2);
console.log(3);

const sum = (input1, input2) => input1 + input2;

/* asynchronous
    -do not block other codes
    -runs in background
 */
setTimeout(() => {
    console.log("api data...");
},2000)

/* error/exception handling try catch */
try{
    let a = b + c;
}catch(err){
    console.log(err);
}

/* promise */

let promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      // resolve({name:"ram",token:"SDAD!##R@F",email:"r@gmail.com"},500);
      reject("server error")},500);
})
    
console.log(promise1);
promise1.then((response) => {
    console.log("response",response);
}).catch(err => {
    console.log("err", err);
})

console.log(sum(2,4))




