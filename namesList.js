// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except
// for the last two names, which should be separated by an ampersand.

//Loop through

let namesList = names => {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(names[i].name);
    if (i < names.length - 2) {
      arr.push(", ");
    } else if (i < names.length - 1) {
      arr.push(" & ");
    }
  }
  console.log(arr.join(""));
};

namesList([{ name: "Bill" }, { name: "Bob" }]);
