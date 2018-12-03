const data = require('./input');

var globalTwo = [];
var globalThree = [];

data.forEach(item => {
    var list = [];
    var twocount = [];
    var threecount = [];
    item.split('').forEach(x => {
        var count = (item.split(x).length - 1);
        if (count > 1) {
            if (list.includes(x) == false) {
                list.push(x);
                if (count == 2) {
                    twocount.push(x);
                }
                else if (count == 3) {
                    threecount.push(x);
                }
            }
        }
    });

    if (twocount.length > 0) {
        globalTwo.push(item);
    }

    if (threecount.length > 0) {
        globalThree.push(item);
    }
});

console.log(globalTwo.length * globalThree.length);

//returns 8118