const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf8');
const lines = text.split('\n');

const instructions = lines.slice(10, lines.length + 1);
console.log(instructions);
console.log(instructions[instructions.length - 1]);

// each stack should have its own array so that we can add and remove crates easily.
// we can get the contents of each stack from the input

const stackLines = lines.slice(0, 8);
console.log(stackLines);

let stackOne = [];
let stackTwo = [];
let stackThree = [];
let stackFour = [];
let stackFive = [];
let stackSix = [];
let stackSeven = [];
let stackEight = [];
let stackNine = [];

// crate letters are at positions 1, 1+4=5, 5+4=9 ... 33

for (let line = 0; line < stackLines.length; line++) {
	for (let position = 1; position < stackLines[line].length; position += 4) {
		let character = stackLines[line].charAt(position);
		if (character === ' ') {
		} else {
			switch (position) {
				case 1:
					stackOne.push(character);
					break;

				case 5:
					stackTwo.push(character);
					break;

				case 9:
					stackThree.push(character);
					break;

				case 13:
					stackFour.push(character);
					break;

				case 17:
					stackFive.push(character);
					break;

				case 21:
					stackSix.push(character);
					break;

				case 25:
					stackSeven.push(character);
					break;

				case 29:
					stackEight.push(character);
					break;

				case 33:
					stackNine.push(character);
					break;

				default:
					break;
			}
		}
	}
}
console.log(stackOne);
console.log(stackTwo);
console.log(stackThree);
console.log(stackFour);
console.log(stackFive);
console.log(stackSix);
console.log(stackSeven);
console.log(stackEight);
console.log(stackNine);

// Ok we have the stacks setup, now it is just a case of following the instructions..
// lets make an instruction object and array with a moves, from and to property..

let instructionObjects = [];

for (let line = 0; line < instructions.length; line++) {
	let instructionObject = {
		movesString: '',
		moves: 0,
		from: 0,
		to: 0,
	};
	if (instructions[line].length == 18) {
		instructionObject.moves = Number(instructions[line].charAt(5));
		instructionObject.from = Number(instructions[line].charAt(12));
		instructionObject.to = Number(instructions[line].charAt(17));
		instructionObjects.push(instructionObject);
	} else if (instructions[line].length == 19) {
		instructionObject.movesString += instructions[line].charAt(5);
		instructionObject.movesString += instructions[line].charAt(6);
		instructionObject.moves = Number(instructionObject.movesString);
		instructionObject.from = Number(instructions[line].charAt(13));
		instructionObject.to = Number(instructions[line].charAt(18));
		instructionObjects.push(instructionObject);
	}
}

console.log(instructionObjects);

// ok I need to make an array of stacks for this to work nicely..
let stacks = [stackOne, stackTwo, stackThree, stackFour, stackFive, stackSix, stackSeven, stackEight, stackNine];

// now lets do the instructions
// This is going to be commented out for part 2

/* for (let instruction = 0; instruction < instructionObjects.length; instruction++) {
	let instructionObject = instructionObjects[instruction];
	for (let moves = 1; moves <= instructionObject.moves; moves++) {
		let crate = stacks[instructionObject.from - 1].shift();
		stacks[instructionObject.to - 1].unshift(crate);
	}
} */

/* console.log(stacks);

for (let stack = 0; stack < stacks.length; stack++) {
	console.log(stacks[stack].shift());
} */

// PART 2
// USE ORIGINAL STACKS

for (let instruction = 0; instruction < instructionObjects.length; instruction++) {
	let instructionObject = instructionObjects[instruction];
	let movedStack = [];
	for (let moves = 1; moves <= instructionObject.moves; moves++) {
		let crate = stacks[instructionObject.from - 1].shift();
		// console.log(crate);
		movedStack.push(crate);
	}
	console.log(movedStack);
	stacks[instructionObject.to - 1].unshift(...movedStack);
}
console.log(stacks);
for (let stack = 0; stack < stacks.length; stack++) {
	console.log(stacks[stack].shift());
}
