const input = require('./input');
const data = input.split("\n");

const rawTestData = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`
const testData = rawTestData.split("\n");

const regex = /\#(\d+) \@ (\d+)\,(\d+)\: (\d+)\x(\d+)/;

var claims = GetClaims(data);
var points = [];
claims.forEach(c => {
    for (i = c.x; i < c.x + c.width; i++) {
        for (j = c.y; j < c.y + c.height; j++) {
            points.push(`${i}x${j}`)
        }
    }
});

var duplicatedPoints = [];
points.reduce((acc, cur) => {
    if (cur in acc) {
        acc[cur]++;
        if (duplicatedPoints.indexOf(cur) == -1) {
            duplicatedPoints.push(cur);
        }
    }
    else {
        acc[cur] = 1;
    }
    return acc;
}, []);

console.log(duplicatedPoints.length);


function GetClaims(input) {
    return input.map(line => {
        const extracted = regex.exec(line);

        return {
            id: parseInt(extracted[1]),
            x: parseInt(extracted[2]),
            y: parseInt(extracted[3]),
            width: parseInt(extracted[4]),
            height: parseInt(extracted[5])
        };
    });
}

//returns 116489