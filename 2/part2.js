const data = require('./input');

function CompareTwoStrings(string1, string2) {
    let array1 = string1.split('');
    let array2 = string2.split('');

    let newString = '';

    let count = 0;

    array1.forEach((a1, i) => {
        let a2 = array2[i];
        if (a1 != a2) {
            count++;
        }
        else {
            newString = newString + a1
        }
    });

    return new ResultObject(newString, count);
}

const finalResult = []

class ResultObject {
    constructor(a, b){
        this.newString = a;
        this.count = b;
    }
}

function ProcessAllStrings(input) {
    input.forEach(x => {
        let array = input.filter(j => j != x)

        array.forEach(y => {
            let result = CompareTwoStrings(x, y);

            if (result.count == 1) {
                finalResult.push(`${result.newString} - ${result.count}`);
            }
        });
    });

    return finalResult;
}

const sampleData = [];
for (i = 0; i < 100; i++) {
    sampleData.push(data[i]);
}

result = ProcessAllStrings(data);

result.forEach(line => {
    console.log(line)
});

//this solution is very ugly... but returns:
//      jbbenqtlaxhivmwyscjukztdp - 1
//      jbbenqtlaxhivmwyscjukztdp - 1