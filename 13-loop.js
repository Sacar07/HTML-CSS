function getMonthName(monthNumber) {
  let output = null;

  if (typeof monthNumber == "number") {
    if (monthNumber <= 0 || monthNumber >= 13) {
      output = "invalid, input between 1-12";
    } else {
      if (monthNumber == 1) {
        output = "jan";
      } else if (monthNumber == 2) {
        output = "feb";
      } else if (monthNumber == 3) {
        output = "mar";
      }
    }
  } else if (typeof monthNumber == "string" || typeof monthNumber == null) {
    return "input type: number";
  } else {
    output = "invalid data-type, type number only";
  }
  return output;
}
console.log(getMonthName(1));
console.log(getMonthName(0));
console.log(getMonthName(null));
console.log(getMonthName());
console.log(getMonthName([]));
console.log(getMonthName(18));
console.log(getMonthName("sacar"));

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
];

function funcTodos() {
  for (index = 0; index < todos.length; index++) {
    let {title,status} = todos; //destructure
    status
      ? console.log(`${title} is completed`)
      : console.log(`${title} is pending`);
  }
  return "todos list completed";
}

funcTodos();

/* ternery operator */

let isCold = true;

let recommend = isCold ? "carry jacket" : "no need";

console.log(recommend);



