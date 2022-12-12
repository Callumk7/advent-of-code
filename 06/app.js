const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf8');

// find the character number for part where there are four unrepeated characters
// iterate along the string to start with.
// Lets also check what the text sting actually is.

console.log(text.length); // 4095

// we can start at 03 and work across.

for (let letter = 3; letter < text.length; letter++) {
	// we want to make a string to test
	let string = '';
	for (let i = 0; i <= 3; i++) {
		string += text.charAt(letter - i);
	}

	// test string for itself
	for (let i = 0; i < 3; i++) {
		if (string.includes(string.charAt(i))) {
		}
	}
}
