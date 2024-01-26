let user1 = {
  firstName: "ram",
  middleName: "bdr",
  lastName: "Sharma",
  address: {
    street: "kumari-galli",
    ward: 10,
    province: "3",
  },
  phones: [
    {
      brand: "huawei",
      phoneNo: "984XX",
      activatedDate: 2073,
    },
    {
      brand: "Apple",
      phoneNo: "980XX",
      activatedDate: 2079,
    },
  ],
};

user1.middleName = "Bahadur";
user1.province = "Bagmati";

user1.phones[0].phoneNo = 984210292;
user1.phones[1].phoneNo = 980812122;

console.log(user1);

let todosApiData = {
  data: {
    todos: [
      { createdAT: "2000-08-20" , title: "html", status: "completed" },
      { createdAT: "2002-02-11" , title: "css", status: "completed" },
      { createdAT: "2000-09-21" , title: "javascript", status: "completed" },
    ],
  },
};

// console.log(todosApiData.data.todos[0].title, "is" , todosApiData.data.todos[0].status);

// console.log(todosApiData.data.todos[1].title, "is" , todosApiData.data.todos[1].status);

todosApiData.data.todos[2].status = "pending";
console.log(todosApiData);

function myFunc() {
  for (i = 0; i <= todosApiData.data.todos.length - 1; i++) {
    console.log(
      todosApiData.data.todos[i].title,
      "is",
      todosApiData.data.todos[i].status
    );
  }
}
myFunc();
// let todos1 = todos[0];
// console.log(`${todos1}`);

let fishSpecies = {
  fishDetails: [
    {
      title: "Goldfish",
      color: "Gold",
      price: 150,
    },
    {
      title: "Ranchu",
      color: "White and gold",
      price: 5000,
    },
    {
      title: "Tetra",
      color: "white and black",
      price: 50,
    },
  ],
};

console.log(fishSpecies);
fishSpecies.fishDetails[1].title = "Flowerhorn";

let aquariumFunc = function () {
  for (i = 0; i <= fishSpecies.fishDetails.length-1; i++) {
    console.log(
      `${fishSpecies.fishDetails[i].title} is an aquarium fish and it costs around Rs.${fishSpecies.fishDetails[i].price}`
    );
  }
};

aquariumFunc();


/* string literal or template literal */

let firstName = "hari";
let lastName = "bdr";
let fullName = `${firstName} ${lastName}`
console.log(fullName);

/* function  */

let firstNum = 3;
let lastNum = 10;
let sum = firstNum + lastNum;
console.log(`${sum}`);


/* group - function */

function calculateSum(x,y){
    console.log(`${x} + ${y} = ${x + y}`);
}

calculateSum(1,2)  //1,2
calculateSum(2,2) // 2,2


function calculateSum(input1,input2){
    console.log(`${input1} - ${input2} = ${input1 - input2}`);
}

calculateSum(1,2)  //1,2
calculateSum(2,2) // 2,2