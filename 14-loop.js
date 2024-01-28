let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "js",
    status: false,
  },
  {
    title: "react",
    status: false,
  },
  {
    title: "mongodb",
    status: false,
  },
  {
    title: "express",
    status: false,
  }
];

function funcTodos() {
  for (index = 0; index < todos.length; index++) {
    let { title, status } = todos[index]; //destructure
    status
      ? console.log(`${title} is completed`)
      : console.log(`${title} is pending`);
  }
  return "todos list completed";
}

funcTodos();

// function printNum(){
//     for (i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// printNum();



// function findMultiplication(num,startFrom,endAt){
//     for(let i=startFrom;i<=endAt;i++){
//         console.log(`${num} * ${i}=${num*i}`); 
//     }
//     return "table completed"
// }
// findMultiplication(5,5,5);


function findMultiplication(num, start, end) {
  for (i = start; i <= end; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

findMultiplication(2, 5, 6);
findMultiplication(19,2,4);

let users = [
  {
    username: "ram",
    password: "password",
  },
  {
    username: "hari",
    password: "12345678",
  },
  {
  username: "shyam",
  password: "12345678"
  }
];

/* signIn("shyam","12345678") //login success
signIn("shyam","1234567") //invalid credentials  */

function signIn(usernameLogin,passwordLogin){

  for(index=0;index < users.length ;index++ ){
    
    let { username, password } = users[index];

  if(usernameLogin == username && passwordLogin == password){
    return `login success`;
  }
}
return `invalid credentials`;
}

console.log(signIn("shyam", "12345678"));
console.log(signIn("ram", "password"));
console.log(signIn("shyam", "1234567"));
console.log(signIn("hari","12345678"));



function calcAverage(numbers){

  if (numbers.length == 0){
    return "array is empty"
  } else{
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}
}
console.log(calcAverage([]));
console.log(calcAverage([1, 23, 43, 13, 3, 4, 6]));



function findMax(num){
  if(num.length == 0){
    return `array is empty`
  }
  else{
  let max = num[0];
  for(let index=1;index<num.length;index++){
    if(max<num[index]){
      max=num[index];
    }
  }
  return max
}
}
console.log(findMax([3,22,3,434,55,313131]));
console.log(findMax([]));



function FindMin(array){
  if(array.length == 0){
    return "array is empty" 
  }
  else{
  let min = array[0];
  
  for(let i=1; i<array.length ; i++){
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min
}
}

console.log(FindMin([212,32,3]));
console.log(FindMin([]));




function countOccurences(nums,target){

  let count=0;
  for(i=0;i<nums.length;i++){
  if(nums[i]==target){
    count += 1;
  }
}
return count;
}

console.log(countOccurences([1,2,3,1,1,1,1],1));

