let blogs = [
  {
    title: "Exploring Tomorrow",
    created_at: "24-01-19T13:01:03.486205+05:45",
  },
  {
    title: "Career in Web ",
    created_at: "24-01-18T15:02:21.353832+05:45",
  },
  {
    title: "Degrees Dying",
    created_at: "24-01-17T14:06:24.457394+05:45",
  },
  {
    title: "Career in Digital Marketing",
    created_at: "24-01-17T11:02:40.936608+05:45",
  },
];

("Exploring Tomorrow :2024-01-19 ");
("Career in Web : 2024-01-18 ");
("...");
("...");
function formatDate(date){
    /* split .. */
    return date.substring(0,8)
}

console.log("SimplifiedDate", formatDate("24-01-17T11:02:40.936608+05:45"));
console.log("SimplifiedDate", formatDate("24-02-17T11:02:40.936608+05:45"));

function createdAt(index) {
  // console.log(`${blogs[index].title}: ${formatDate("24-02-17T11:02:40.936608+05:45")}`); 
  let blog = blogs[index];
  let {title,created_at} = blog; //object destructuring => no need to do blog.title, blog.created_at if destructured

  console.log(`${title}: ${formatDate(created_at)}`);
}
createdAt(0);
createdAt(1);
createdAt(2);
createdAt(3);


let members = [
  {
    name: "Ram",
    joined_at: "24-01-19T13:01:03.486205+05:45",
  },
  {
    name: "Ghansyam ",
    joined_at: "24-01-18T15:02:21.353832+05:45",
  },
  {
    name: "Hari",
    joined_at: "24-01-17T14:06:24.457394+05:45",
  },
  {
    name: "Sita",
    joined_at: "24-01-17T11:02:40.936608+05:45",
  },
];

function membersFunc(index){
    console.log(`${members[index].name} joined at ${formatDate(members[index].joined_at)}`);
}

membersFunc(0);
membersFunc(1);
membersFunc(2);
membersFunc(3);

function sum(input1,input2){
    console.log(`${input1} + ${input2} : ${input1+input2}`);
    // return undefined by default
    return input1+input2
}
sum(1,2)
console.log("result",sum(30,40)); // yesle undefined return garcha kina ki by default function ma kei kura return gareko chaina vane // aba chai 70 console ma print huncha cause return ma i1+i2 deko cha


function makeFullUrl(suffix){
  return `https://www.mindrisers.com.np${suffix}`
} //helper function to access url for backend picture 




