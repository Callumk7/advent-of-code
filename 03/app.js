const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf8');
const lines = text.split('\n');

// for each line, seprate into two parts
// check letters in each part to find a match
// strings are variable in length
let bags = [];
for (let line = 0; line < lines.length; line++) {
	let bag = {};
	let left = '';
	let right = '';

	let length = lines[line].length;
	// console.log(length);

	let halfLength = length / 2 - 1;
	// console.log(halfLength);

	for (let letter = 0; letter < length; letter++) {
		if (letter < halfLength) {
			left += lines[line].charAt(letter);
		} else if (letter == halfLength) {
			left += lines[line].charAt(letter);
			bag.left = left;
		} else if (letter > halfLength && letter != length - 1) {
			right += lines[line].charAt(letter);
		} else if ((letter = length - 1)) {
			right += lines[line].charAt(letter);
			bag.right = right;
		}
	}
	bags.push(bag);
}

console.log(bags[254]);

// now we want to iterate through the array of bag objects and compare left and right
prioritySum = 0;

// set prioritys
itemArray = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

for (let bag = 0; bag < bags.length; bag++) {
	let bagCompartment = bags[bag].left;
	console.log(bagCompartment);

	let checkBagCompartment = bags[bag].right;
	console.log(checkBagCompartment);
	let problemItem = '';
	for (let item = 0; item < bagCompartment.length; item++) {
		for (let checkItem = 0; checkItem < bagCompartment.length; checkItem++) {
			if (
				bagCompartment.charAt(item) === checkBagCompartment.charAt(checkItem) &&
				bagCompartment.charAt(item) != problemItem &&
				checkBagCompartment.charAt(checkItem) != problemItem
			) {
				// priority is from the array +1.
				problemItem = bagCompartment.charAt(item);
				console.log(problemItem);

				let priority = itemArray.indexOf(problemItem) + 1;
				console.log(priority);

				prioritySum += priority;
				console.log(prioritySum);
			} else {
				// console.log(`item ${item} in bag ${bag} is fine.`);
			}
		}
	}
	problemItem = '';
}
