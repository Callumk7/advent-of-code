const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf8");
const lines = text.split("\n");

let numbers = [];
lines.forEach((line) => {
  numbers.push(Number(line));
});

let elfArray = [];
let elf = 0;

numbers.forEach((number) => {
  if (number === 0) {
    elfArray.push(elf);
    elf = 0;
  } else {
    elf += number;
    console.log(elf);
  }
});

console.log(elfArray);

// part 1
let biggest = 0;
for (let elf = 0; elf < elfArray.length; elf++) {
  if (elfArray[elf] > biggest) {
    biggest = elfArray[elf];
    console.log(biggest);
  }
}

// part 2
elfArray.sort((a, b) => b - a);
console.log(elfArray);
const topThree = elfArray[0] + elfArray[1] + elfArray[2];
console.log(topThree);
