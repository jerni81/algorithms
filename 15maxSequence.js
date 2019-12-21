// Easy case is when the list is made up of only positive numbers and the
// maximum sum is the sum of the whole array. If the list is made up of only
// negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty
// list or array is also a valid sublist/subarray.

let maxSequence = arr => {
  let highest = 0;
  if (arr[0] > 0) {
    highest = arr[0];
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum = start += arr[j];
      if (sum > highest) {
        highest = sum;
      } else if (arr[arr.length - 1] > highest) {
        highest = arr[arr.length - 1];
      }
    }
  }
  console.log(highest);
};

maxSequence([1, -2, 9, 0, -8, -6, 39]);
