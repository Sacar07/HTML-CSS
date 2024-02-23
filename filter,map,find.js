const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha","sacar"];

const fakeDb = nepaliNames.map((el, index) => ({
  name: el,
  email: `${el.toLowerCase()}@gmail.com`,
  password: `${el.toLowerCase()}${index}`,
}));

console.log(fakeDb);

// fakeDb.forEach((el)=> delete el.password)

// console.log(fakeDb);

const onlyEmailandNames = fakeDb.map(({name,email})=>( {name,email}
));

console.log(onlyEmailandNames);

const startWithA = fakeDb.filter((el)=>el.name.charAt(0)==="A")
console.log(startWithA);


// fakeDb.forEach((el)=>el.email=`${el.name}@example.com`)
// console.log(fakeDb);

const updateEmails = fakeDb.map((el)=>({
    name:el.name,
    email: `${el.name.toLowerCase()}@example.com`,
    password: el.password
}))

console.log(updateEmails);


const numbers = [1,23,4,13,3,8];

const oddNumbers = numbers.filter(el => el%2 !== 0 )
console.log(oddNumbers);

const findOdd = numbers.find(el => el%2 == 0)
console.log(findOdd);

