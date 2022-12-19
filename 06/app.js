const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf8");

// find the character number for part where there are four unrepeated characters
// iterate along the string to start with.
// Lets also check what the text sting actually is.

console.log(text.length); // 4095

// we can start at 03 and work across.
for (let letter = 3; letter < text.length; letter++) {
    // we want to check for characters that are in the previous 3 spots
    // This should be easy enough because we can get the position where this
    // first happened.
    let string = text.slice(letter - 3, letter);
    let char = text.charAt(letter);
    if (!string.includes(char)) {
        console.log(letter);
        console.log(`${char} is not in ${string}`);
        // great! now we need to check this string
        let stringArray = [];
        for (let i = 0; i < string.length; i++) {
            stringArray.push(string.charAt(i));
        }
        for (let i = 0; i < string.length; i++) {
            let letterFromString = stringArray.shift(i);
            if (!stringArray.includes(letterFromString)) {
            }
        }
    }
}
