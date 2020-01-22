let maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

let mazeRunner = (maze, directions) => {
  let arr = 0;
  let index = 0;
  for (i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) {
      arr = i;
      index = maze[i].indexOf(2);
    }
  }
  for (j = 0; j < directions.length; j++) {
    switch (directions[j]) {
      case "N":
        arr -= 1;
        break;
      case "S":
        arr += 1;
        break;
      case "E":
        index += 1;
        break;
      case "W":
        index -= 1;
        break;
      default:
    }
    let curArr = maze[arr];
    if (curArr[index] === 1) {
      console.log("dead");
      console.log(arr, index);
      // return Dead
    } else if (curArr[index] == 3) {
      console.log("finished");
      // return Finish
    } else if (
      (j = directions.length - 1 && (curArr[index] == 0 || curArr[index] == 2))
    ) {
      console.log("lost");
    }
  }
};
mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]);
