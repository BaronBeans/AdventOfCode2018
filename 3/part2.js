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
            points[`${i}x${j}`] = (points[`${i}x${j}`] || 0) + 1;
        }
    }
});

var result = Object.values(points);

var valid = [];
var invalid = [];

claims.forEach(c => {
    for (i = c.x; i < c.x + c.width; i++) {
        for (j = c.y; j < c.y + c.height; j++) {
            let count = points[`${i}x${j}`];
            if (count > 1) {
                invalid.push(c.id);
            } else {
                valid.push(c.id);
            }
        }
    }
});

var onlyvalidid = valid.filter(function(x) {
    return invalid.indexOf(x) < 0;
})

console.log(onlyvalidid[0]);

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

//returns an array of length 384 - with every value equalling 1260
//n.b. this doesn't perform a check that there is only one, it just assumes there will be and finds it.