// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

let deleteNth = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i] && ++counter > n) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
};

deleteNth([1, 2, 4, 1, 1, 3, 2, 2, 1, 2, 2, 2], 3);
