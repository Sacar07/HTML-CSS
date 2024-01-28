const findSum = (...rest) => {
  let count = 0;
  for (index = 0; index < rest.length; index++) {
    count += rest[index];
  }
  return count;
};

console.log(findSum(1, 1, 11, 14, 14));
