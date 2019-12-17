//Given an array of integers your solution should find the smallest integer.

let findSmallestInt = arr => {
  arr.sort((a, b) => a - b);
  console.log(arr[0]);
};

findSmallestInt([12, 18, 54, 2]);
