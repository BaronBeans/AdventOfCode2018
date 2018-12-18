const input = require('./input');

const allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const testData = `dabAcCaCBAcCcaDA`;

DoPartOne(input);

function DoPartOne(input) {
    console.log(input.length);
    const result = CancelOutPolymers(input);
    console.error(result.length)
}

function CancelOutPolymers(input) {
    let result = input;
    let changed = true;

    while (changed == true) {
        let length = result.length;

        for (const letter of allLetters) {
            let reg = MakeRegExp(letter);
            result = result.replace(reg, "");
        }

        if (result.length < length) {
            changed = true;
        } else {
            changed = false;
        }
    }

    return result;
}

function MakeRegExp(letter) {
    let lower = letter;
    let upper = letter.toUpperCase();

    return new RegExp(`(${lower}${upper})|(${upper}${lower})`, 'g');
}

//result = 9348