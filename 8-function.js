let todosApiData = {
  data: {
    todos: [
      { createdAT: "2000-08-20", title: "html", status: "completed" },
      { createdAT: "2002-02-11", title: "css", status: "completed" },
      { createdAT: "2000-09-21", title: "javascript", status: "completed" },
      { createdAT: "2000-09-30", title: "react", status: "pending" },
    ],
  },
};



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


function double(input){
    let output=input*2;
    return output; // after returned once,below nth works
    console.log(`${input*2}`);
}

let doubledValue = double(1000);
console.log(doubledValue); //undefined aucha kina vane function ma return gareko chaina so by default return undefined vaircha 
console.log(double(3));


// function doubletheArray([index]){
//      for(index=0;index<=doubletheArray.length-1;index++)
//      {
//      return [doubletheArray]
//      }
// }

// console.log(doubletheArray([1]));
