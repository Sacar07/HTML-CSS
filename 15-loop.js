/* logical operators */

let student = {
    name:"ram",
    paidStatus: true,
    hasScholorship: false,
    fulfillAttendance: false,
}

let {name,paidStatus,hasScholorship,fulfillAttendance} = student;
if ((paidStatus || hasScholorship) && fulfillAttendance){
    console.log(`${name} can give exam`);
}  else{
    console.log(`${name} can not give exam`);
}



const findSum = (...rest) => {

    let count = 0;
    for(index = 0; index<rest.length ; index++){
        count += rest[index];
    }
    return count;
}

console.log(findSum(1,1,11,14,14));



const countOccurences = (target,...num) => {
    let count = 0;
    for (index=0;index<num.length;index++){
        if(num[index]==target){
            count += 1;
        }
    }
    return count;
}

console.log(countOccurences(2,21,2,2,1,1,2));


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
    password: "12345678",
  },
];

/* signIn("shyam","12345678") //login success
signIn("shyam","1234567") //invalid credentials  */

function signIn(usernameLogin, passwordLogin) {
    let found = false;
  for (index = 0; index < users.length; index++) {
    let { username, password } = users[index];

    if (usernameLogin == username && passwordLogin == password) {
      console.log( `login success`);
      found = true;
      break;
    }
}
if(!found){
    console.log(`invalid credentials`);
}
}

signIn("shyam", "1234567");
signIn("ram", "password");
signIn("shyam", "1234567");
signIn("hari", "12345678");
