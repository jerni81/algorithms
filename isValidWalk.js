// You live in the city of Cartesia where all roads are laid out in a
// perfect grid. You arrived ten minutes too early to an appointment, so
// you decided to take the opportunity to go for a short walk. The city
// provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always
// walk only a single block in a direction and you know it takes you one
// minute to traverse one city block, so create a function that will
// return true if the walk the app gives you will take you exactly ten
// minutes (you don't want to be early or late!) and will, of course, return
// you to your starting point. Return false otherwise.

let isValidWalk = walk => {
  let valid = false;
  let direction = {
    ns: 0,
    ew: 0
  };
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      direction.ns += 1;
    } else if (walk[i] == "s") {
      direction.ns -= 1;
    } else if (walk[i] == "e") {
      direction.ew += 1;
    } else if (walk[i] == "w") {
      direction.ew -= 1;
    }
  }
  if (walk.length == 10 && direction.ns === 0 && direction.ew === 0) {
    valid = true;
  }
  console.log(valid);
};

isValidWalk(["n", "s", "e", "w", "e", "e", "s", "w", "w", "s"]);
