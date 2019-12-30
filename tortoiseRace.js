//ths is a tortoise race where one tortoise gets a head start
//v1 and v2 are the speeds of the tortoises in ft per hour, and
//g is the distance ahead v1 will start, in feet, find out how
//long it will take in [hours, minutes, second] for the second
//tortoise to be at the same distance as the first

let race = (v1, v2, g) => {
  // from algebra
  let arr = [];
  let time = -g / (v1 - v2); //hours
  let distance = v1 * time;
  let hours = Math.floor(time);
  arr.push(hours);
  let mins = (time - hours) * 60;
  arr.push(Math.floor(mins));
  let secs = (mins % 1) * 60;
  arr.push(Math.floor(secs));

  console.log(arr);
};

race(720, 850, 70);
