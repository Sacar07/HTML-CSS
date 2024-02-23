// const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];


// // function print(element,index){
// //     console.log(element,index);
// // }
// // nepaliNames.forEach(print)

// nepaliNames.forEach((el,idx)=>{
//     console.log("element:",el,"index:",idx);
// })

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
];

todos.forEach((el)=>{
    if(el.status){
        console.log(`${el.title} is completed`);
    }
    else{
        console.log(`${el.title} is pending`);
    }
})

todos.forEach((el) => {
  console.log(el.title.toUpperCase());
});


const numbers = [2,1,32,7,6];

const doubledNumbers = numbers.map((el) => el*2
)

console.log(doubledNumbers);



let sum1 = 0;
numbers.forEach((el) => {
  sum1 += el;
})
console.log(sum1);

//using reduce
const sum = numbers.reduce((acc,current) => acc+current)
console.log(sum);

//using foreach
const EVEN_NUM = []
numbers.forEach((el)=>{
  if (el % 2 == 0){
    EVEN_NUM.push(el)
  }
})


//using filter
console.log(EVEN_NUM);

const evenNumbers = numbers.filter((el)=>el % 2=== 0)
console.log(evenNumbers);


let users = [
  {
    name:"hira",
    age: 18
  },
  {
    name:"sacar",
    age:23
  },
  {
    name:"gante",
    age:23
  },
]

users.forEach((el)=>{
  console.log(`${el.name} is ${el.age} years old`);
})


const firstEvenNumber = numbers.find((el)=>el%2==0)
console.log(firstEvenNumber);





const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 192,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    pages: 328,
    genre: "Dystopian",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 224,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    genre: "Classic",
  },
];



books.forEach((el)=>{
  console.log(el);
});

const onlyTitles = books.map((el)=>el.title)
console.log("Only titles", onlyTitles);

const onlyFiction = books.filter((el)=>el.genre === "Fiction")
console.log("Only fiction", onlyFiction);

const AveragetotalPages =
  books.map((el) => el.pages).reduce((acc, current) => acc + current) /
  books.length;

console.log("average no. of pages:",AveragetotalPages);

const findBook1984 = books.find((el)=>el.title === "1984")

console.log(findBook1984);