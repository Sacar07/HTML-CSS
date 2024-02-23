let tasks = [];

function addTasks(event){
  event.preventDefault();

  let input = document.getElementById("input-tasks").value;

  tasks.push(input);
  console.log(input);

  let output = "";
  tasks.forEach(
    (el, idx, arr) =>
      (output = output + `<li> ${el} <button onclick ="deleteTask(${idx})">delete<delete></li> `)
  );

  document.getElementById("task-list").innerHTML = output;

}

function deleteTask(index){
  
  tasks = tasks.filter((el,idx) => idx !== index );


  let output = "";
  tasks.forEach((el,idx) => {
   output = output + `<li> ${el} <button onclick="deleteTask(${idx})"> delete </button> </li>`
  });
  console.log(output);

  document.getElementById("task-list").innerHTML = output;

}



