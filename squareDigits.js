//square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

let squareDigits = num => {
  let arr = String(num).split("");
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(Math.pow(parseInt(arr[i]), 2));
  }
  let outPut = arr2.join("");
  console.log(parseInt(outPut));
};

squareDigits(18394);
