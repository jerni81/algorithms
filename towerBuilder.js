// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

let towerBuilder = nFloors => {
  let tower = [];
  let count = 1;
  let floor = nFloors - 1;
  while (count < nFloors + 1) {
    tower.push(
      " ".repeat(floor) +
        "*".repeat(count) +
        "*".repeat(count - 1) +
        " ".repeat(floor)
    );
    count++;
    floor--;
  }
  console.log(tower);
};

towerBuilder(6);
