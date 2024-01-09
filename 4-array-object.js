let course1 = {
  title: "mern",
  startTime: 4,
  endTime: 5,
  durationInMonths: 3,
  Status: true
}

let course2 = {
  title: "qa",
  StartTime: 5,
  EndTime: 6,
  DurationInMonths: 2,
  Status: false
};

let courses = [course1,course2]
console.log(courses);



//bad way
let room_1 = {
    title: "living room",
    color: "Black",
    size: "4 sq. ft."
}

let room_2 = {
    title: "kitchen",
    color: "yellow",
    size: "8 sq. ft."
}
room_1.title = "Mern stack"

let rooms = [room_1,room_2]
console.log(rooms)



//Good way cause less variables use
let rooms1 = [
  {
    title: "living room",
    color: "Black",
    size: "4 sq. ft."
  },
  {
    title: "kitchen",
    color: "yellow",
    size: "8 sq. ft."
  }
]

rooms1[0].title = "Dining"

console.log(rooms1);

//Function declaration

const helloWorld =  function(){
  return 3*3;
}
console.log(helloWorld());

// function expression
function rollNo(){
  return 3;
}
console.log(rollNo());

//arrow function

const checkVariable = () => {
  return "check";
} 

console.log(checkVariable());