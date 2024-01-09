/* const firstName = "Sacar"
const lastName = "Shrestha"
const address = "Kdb"
const job = "MERN stack developer"

console.log(`I am ${firstName} ${lastName}. I live in ${address} and my job is ${job}.`); */

greetingPrefix = "namaste";
greetingPrefix = "hi";

console.log(greetingPrefix, "bhupesh");
console.log(greetingPrefix, "Ram");
console.log(greetingPrefix, "Hari");

greetingPrefix = "hello";
count = 15;
activeStatus = true;

console.log(greetingPrefix, "sacar");

var title = "mern"; // ignore var keyword
var title = "mernStack"; //overridden
let duration = "3 months";
// let duration = 3 can not be overridden using let

let userName; //declaration
userName = "abc"; //initialization
userName = "xyz"; //re-initialization

const PI = 3.145;
// PI=3 //cannot change constant variable

const EARTH_DIRECTION = "E-W"; // snake case for const

console.log(title);
console.log(userName);
console.log(duration);
console.log(PI);

let course1 = "AI";
let course2 = "Data science";
let course3 = "ML";
let courses = ["MERN", "QA", "Python"];

console.log(courses);

let upcommingCourses = [course1, course2, course3];

console.log(upcommingCourses);

let oddNumbers = [1, 3, 5, 7];

let evenNumbers = [2, 4, "six", "eight"]; //correct but wrong way!!! cause different data types
/* index in array */

evenNumbers[2] = 6;
evenNumbers[3] = 8;
evenNumbers[4] = 10;

console.log(evenNumbers);

/* Object */

const student = {
  firstName: "Sacar",
  lastName: "Shrestha",
  idNo: 15165,
  phoneNo: 9842323136,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student);
console.log(student.idNo);
console.log(student["lastName"]);
console.log(student["idNo"]);
console.log(student.fullName());

let friends = ["abc", "ijk", "xyz"];

console.log(friends);

let job = ["QA", "Developer", "Doctor"];

job[2] = "Tester";
job[3] = "Designer";
console.log("jobs", job);

let fruits = ["apple", null, "orange"];

fruits[1] = "kiwi";
console.log("Fruits", fruits);
console.log("before - ", fruits[3]);
fruits[3] = "banana";
console.log("after - ", fruits);

/* object */
let courses1 = "mern"
let course1StartTime = 4
let course1EndTime = 5
let course1DurationInMonths = 3;
let course1Status = true;

let courses2 = "qa"
let course2StartTime = 4
let course2EndTime = 5
let course2DurationInMonths = 2;
let course2Status = false;


let allCourses = {
  course1: "mern",
  course2: "qa", 
  course1StartTime : 4,
  course2StartTime : 5,
  course1EndTime: 5,
  course2EndTime: 6,
  course1DurationInMonths: 3,
  course2DurationInMonths: 2,
  course1Status : true,
  course2Status : false
}

console.log(allCourses);
