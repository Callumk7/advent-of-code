const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf8');
const lines = text.split('\n');

// we are looking for a line where one range is entirely within another range

// lets start by converting these strings into a useful format
// I will create an object for each pair, containing 2 elf objects, with a start and end property
// we can iterate through each line and add each letter to the right property
// and then we can convert those to a number

let elfPairs = [];
for (let line = 0; line < lines.length; line++) {
	let elfPair = {
		firstElf: {
			startString: '',
			endString: '',
			start: 0,
			end: 0,
		},
		secondElf: {
			startString: '',
			endString: '',
			start: 0,
			end: 0,
		},
	};

	//looping throough each character of each line
	// we are going to find the location of the important characters
	let dashPosition = [];
	let commaPosition = 0;

	for (let character = 0; character < lines[line].length; character++) {
		characterInQuestion = lines[line].charAt(character);
		if (characterInQuestion == '-') {
			dashPosition.push(character);
		} else if (characterInQuestion == ',') {
			commaPosition = character;
		}
	}

	// now thats done, we can find our properties
	for (let character = 0; character < lines[line].length; character++) {
		characterInQuestion = lines[line].charAt(character);

		// if the current character is before the first dash
		if (character < dashPosition[0]) {
			// ... then it is the first elf's starting point
			elfPair.firstElf.startString += characterInQuestion;

			// if the character is between the first dash and the comma..
		} else if (character > dashPosition[0] && character < commaPosition) {
			// .. then it is the end point for the first elf
			elfPair.firstElf.endString += characterInQuestion;
		} else if (character > commaPosition && character < dashPosition[1]) {
			elfPair.secondElf.startString += characterInQuestion;
		} else if (character > dashPosition[1]) {
			elfPair.secondElf.endString += characterInQuestion;
		}
	}
	// now thats done, lets add it to our main array
	elfPairs.push(elfPair);
}

// now lets convert to a number
for (let elfPair = 0; elfPair < elfPairs.length; elfPair++) {
	elfPairs[elfPair].firstElf.start = Number(elfPairs[elfPair].firstElf.startString);
	elfPairs[elfPair].firstElf.end = Number(elfPairs[elfPair].firstElf.endString);
	elfPairs[elfPair].secondElf.start = Number(elfPairs[elfPair].secondElf.startString);
	elfPairs[elfPair].secondElf.end = Number(elfPairs[elfPair].secondElf.endString);
}

// console.log(elfPairs);

// logic: the start of elf 1 must be more than or equal to the start of second elf AND
// the end of elf 1 must be less than or equal to the end of elf 2.
// (or vice versa)

let elfCount = 0;
for (let elfPair = 0; elfPair < elfPairs.length; elfPair++) {
	let elfPairInQuestion = elfPairs[elfPair];
	if (
		elfPairInQuestion.firstElf.start >= elfPairInQuestion.secondElf.start &&
		elfPairInQuestion.firstElf.end <= elfPairInQuestion.secondElf.end
	) {
		elfCount++;
	} else if (
		elfPairInQuestion.secondElf.start >= elfPairInQuestion.firstElf.start &&
		elfPairInQuestion.secondElf.end <= elfPairInQuestion.firstElf.end
	) {
		elfCount++;
	}
}
console.log(elfCount);

// part two logic: if elf one's end is greater than or equal to elf two's start..
// OR elf one's start is less than or equal to elf two's end
// OR vice versa

// |------|
//    |-------|

let elfCountOverlap = 0;
for (let elfPair = 0; elfPair < elfPairs.length; elfPair++) {
	let elfPairInQuestion = elfPairs[elfPair];
	if (
		(elfPairInQuestion.firstElf.end >= elfPairInQuestion.secondElf.start &&
			elfPairInQuestion.firstElf.end <= elfPairInQuestion.secondElf.end) ||
		(elfPairInQuestion.firstElf.start >= elfPairInQuestion.secondElf.start &&
			elfPairInQuestion.firstElf.start <= elfPairInQuestion.secondElf.end)
	) {
		elfCountOverlap++;
	} else if (
		(elfPairInQuestion.secondElf.end >= elfPairInQuestion.firstElf.start &&
			elfPairInQuestion.secondElf.end <= elfPairInQuestion.firstElf.end) ||
		(elfPairInQuestion.secondElf.start >= elfPairInQuestion.firstElf.start &&
			elfPairInQuestion.secondElf.start <= elfPairInQuestion.firstElf.end)
	) {
		elfCountOverlap++;
	}
}

console.log(elfCountOverlap);
