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
	console.log(length);

	let halfLength = length / 2 - 1;
	console.log(halfLength);

	for (let letter = 0; letter < length; letter++) {
		if (letter < halfLength) {
			left += lines[line].charAt(letter);
			console.log(left);
		} else if ((letter = halfLength)) {
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
console.log(bags);
