// left column is the opposition
// A = Rock
// B = Paper
// C = Scissors
// Right column is suggested move
// X = Rock
// Y = Paper
// Z = Scissors
//
// SCORES
// 1 for playing rock, 2 for playing paper, 3 for playing scissors.
// 3 for a draw, 6 for a win.

const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf8");
const lines = text.split("\n");

//wins and losses
scoreDictionary = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

console.log(lines.length);
var score = 0;
for (let line = 0; line < lines.length - 1; line++) {
  score += scoreDictionary[lines[line]];
}
console.log(score);

//PART 2
// second column
// X = lose
// Y = draw
// Z = win

scoreDictionaryTwo = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};

var scoreTwo = 0;
for (let line = 0; line < lines.length - 1; line++) {
  scoreTwo += scoreDictionaryTwo[lines[line]];
}
console.log(scoreTwo);
