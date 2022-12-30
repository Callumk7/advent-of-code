const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf8");

// start by logging the length of the text
console.log(text.length);

// we want to find the first character that does not appear in the previous three characters

for (let character = 3; character < text.length; character++) {
    // check to see if the character is in the previous three characters
    const previousThree = text.slice(character - 3, character);
    if (!previousThree.includes(text[character])) {
        console.log("found a potential character at index", character);
        // now we want to find out if previousThree contains any duplicates
        const previousThreeArray = previousThree.split("");
        const previousThreeSet = new Set(previousThreeArray);
        if (previousThreeArray.length !== previousThreeSet.size) {
            // then there are duplicates
            console.log("found a duplicate at index", character);
        } else {
            console.log("no duplicates found at index", character);
            console.log(text.charAt(character));
            console.log(previousThree);
            break;
        }
    }
}

// now we need to do the same thing as above, but we need to look for the first character that does not appear in the previous 14 characters

for (let character = 14; character < text.length; character++) {
    // check to see if the character is in the previous 14 characters
    const previousFourteen = text.slice(character - 14, character);
    if (!previousFourteen.includes(text[character])) {
        console.log("found a potential character at index", character);
        // now we want to find out if previousFourteen contains any duplicates
        const previousFourteenArray = previousFourteen.split("");
        const previousFourteenSet = new Set(previousFourteenArray);
        if (previousFourteenArray.length !== previousFourteenSet.size) {
            // then there are duplicates
            console.log("found a duplicate at index", character);
        } else {
            console.log("no duplicates found at index", character);
            console.log(text.charAt(character));
            console.log(previousFourteen);
            break;
        }
    }
}
