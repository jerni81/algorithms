// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

let incrementString = strng => {
  let splt = strng.split("");
  let arr = [];
  let nums = [];
  for (let i = 0; i < splt.length; i++) {
    if (splt[i] == "0") {
      arr.push("0");
    } else if (Number.isInteger(parseInt(splt[i]))) {
      nums.push(parseInt(splt[i]));
    } else {
      arr.push(splt[i]);
    }
  }
  if (nums.length == 0 && arr[arr.length - 1] === "0") {
    arr.pop();
    arr.push("1");
  } else if (nums.length == 0) {
    arr.push("1");
  } else {
    let stg = parseInt(nums.join("")) + 1;
    if (stg % 10 === 0 && arr[arr.length - 1] === "0") {
      arr.pop();
    }
    arr.push(stg.toString());
  }
  console.log(arr.join(""));
};

incrementString("this99");
