const findSum = (...rest) => {
  let count = 0;
  for (index = 0; index < rest.length; index++) {
    let number = rest[index];; 
    count += number;
  }
  return count;
};

console.log("sum:", findSum(1, 1, 11, 14, 14));
