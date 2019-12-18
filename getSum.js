//Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

let getSum = (a, b) => {
  let outPut = 0;
  if (Math.sign(b) == -1 && a < b) {
    for (let i = a; i <= b; i++) {
      outPut += i;
    }
    console.log(outPut);
  }
  if (Math.sign(b) == -1) {
    for (let i = a; i >= b; i--) {
      outPut += i;
    }
    console.log(outPut);
  }
  if (a > b) {
    for (let i = a; i >= b; i--) {
      outPut += i;
    }
    console.log(outPut);
  } else {
    for (let i = a; i <= b; i++) {
      outPut += i;
    }
    console.log(outPut);
  }
};

getSum(-442, -433);
