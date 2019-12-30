// ROT13 is a simple letter substitution cipher that replaces a letter
//  with the letter 13 letters after it in the alphabet. ROT13 is an
//  example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered
//  with Rot13. If there are numbers or special characters included in
//  the string, they should be returned as they are. Only letters from
//  the latin/english alphabet should be shifted, like in the original
//  Rot13 "implementation".

let rot13 = str => {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let splt = str.split("");
  let outPut = [];
  for (let i = 0; i < splt.length; i++) {
    if (splt[i].match("[^a-z A-Z0-9]")) {
      outPut.push(splt[i]);
    } else if (Number.isInteger(Number(splt[i]))) {
      outPut.push(splt[i]);
    } else if (splt[i] === splt[i].toUpperCase()) {
      for (let j = 0; j < alpha.length; j++) {
        if (splt[i].toLowerCase() === alpha[j]) {
          if (j > 12) {
            outPut.push(alpha[j - 13].toUpperCase());
          } else {
            outPut.push(alpha[j + 13].toUpperCase());
          }
        }
      }
    }
    for (let j = 0; j < alpha.length; j++) {
      if (splt[i] === alpha[j]) {
        if (j > 12) {
          outPut.push(alpha[j - 13]);
        } else {
          outPut.push(alpha[j + 13]);
        }
      }
    }
  }
  console.log(outPut.join(""));
};

rot13("Hyz22!");
