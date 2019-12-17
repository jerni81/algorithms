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
