// // let numbers = [1, 2, 3];

// // numbers.splice(1, 1);
// // const totalSum = numbers.reduce((acc, current) => acc + current);

// console.log(totalSum);
// console.log(numbers);

let todos = [];

function addTodo(event) {
  event.preventDefault();

  let input = document.getElementById("input-title").value;
  console.log("add", input);
  todos.push(input);
  convertTodosToList();
}

function deleteTodo(index) {
  // todos.splice(index, 1);

  todos = todos.filter( (el,idx)=> idx != index)

  convertTodosToList();
}


function convertTodosToList(){
   let outputList = "";
   // outputList = outputList + "react"
   todos.forEach((el, idx) => {
     outputList += `<li>${el} <button onclick="deleteTodo(${idx})">delete</button></li>`;
   });
   console.log(outputList);

   document.getElementById("todos-list").innerHTML = outputList;
}