const input = require('./input');

const allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const testData = `dabAcCaCBAcCcaDA`;

DoPartTwo(input);

function DoPartTwo(input) {
    const result = CountPolymers(input);
    let answer = GetLowest(result);
}

function GetLowest(input) {
    let lowest=100000;

    input.map(l => {
        if (l.count < lowest) {
            lowest = l.count;
        }
    })

    console.log(lowest);

    return input.filter(i => i.count == lowest);
}

function CountPolymers(input) {
    let output = [];
    for (const letter of allLetters) {
        let reg = MakeRegExp1(letter);
        let removed = input.replace(reg, "");
        reg = MakeRegExp2(letter);
        let result = CancelOutPolymers(removed);

        output.push({
            letter: letter,
            count: result.length
        })
    }
    return output;
}

function CancelOutPolymers(input) {
    let result = input;
    let changed = true;

    while (changed == true) {
        let length = result.length;

        for (const letter of allLetters) {
            let reg = MakeRegExp2(letter);
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

function MakeRegExp1(letter) {
    let lower = letter;
    let upper = letter.toUpperCase();

    return new RegExp(`${lower}|${upper}`, 'g');
}

function MakeRegExp2(letter) {
    let lower = letter;
    let upper = letter.toUpperCase();

    return new RegExp(`(${lower}${upper})|(${upper}${lower})`, 'g');
}

//result = 4996