//You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

let expandedForm = num => {
  let n = num;
  let arr = [];
  let x = 10;
  console.log(num);
  while (n > 0) {
    if (n % x !== 0) {
      arr.push(n % x);
      n = n - (n % x);
      if (n > 1) {
        arr.push(" + ");
      }
    }
    x = x * 10;
  }
  console.log(arr.reverse().join(""));
};

expandedForm(59043);
