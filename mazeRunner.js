// Welcome Adventurer. Your aim is to navigate the maze and reach the finish
// point without touching any walls. Doing so will kill you instantly!
//
// Maze Runner
// Task
// You will be given a 2D array of the maze and an array of directions.
// Your task is to follow the directions given. If you reach the end point
// before all your moves have gone, you should return Finish. If you hit any
// walls or go outside the maze border, you should return Dead. If you find
// yourself still in the maze after using all the moves, you should return Lost.
//
// The Maze array will look like
//
// maze = [[1,1,1,1,1,1,1],
//       [1,0,0,0,0,0,3],
//       [1,0,1,0,1,0,1],
//       [0,0,1,0,0,0,1],
//       [1,0,1,0,1,0,1],
//       [1,0,0,0,0,0,1],
//       [1,2,1,0,1,0,1]]
// ..with the following key
//
// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
//
// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content
// will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the
// format of N = North, E = East, W = West and S = South.
// </td>




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
    } else if (curArr[index] == 3) {
      console.log("finished");
    } else if (j = directions.length - 1 && (curArr[index] == 0 || curArr[index] == 2)){
      console.log("lost");
    }
  }
};
mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]);
