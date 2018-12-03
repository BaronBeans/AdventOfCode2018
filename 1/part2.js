const data = require('./input');

var result = 0
var resultsList = []
var firstDuplicate = null;

function crunch(lastResult) {
    result = lastResult;

    data.forEach(x => {
        result = result + x;
        if(resultsList.includes(result)) {
            firstDuplicate = result;
            console.log(firstDuplicate);
        }
        resultsList.push(result);
    });
}

while (firstDuplicate == null) {
    crunch(result)
}

//result = 232