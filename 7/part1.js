const input = require('./input');

const testData = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`

const ReduceSteps = (input) => {
    let output = [];
    input.forEach(line => {
        let l = line.split(' ');
        let i = l[1];
        let j = l[7];

        output.push({
            i: i,
            j: j
        })
    });

    return output;
}

const GetOrder = (input) => {
    const result = ReduceSteps(input.split('\n'));
    let iCollect = [];
    let jCollect = [];

    result.forEach(e => {
        iCollect.push(e.i);
        jCollect.push(e.j);
    });

    return {
        iCollect,
        jCollect
    };
}

const Compare = (input) => {
    const result = GetOrder(testData);
    let itemsNotIn = [];
    result.iCollect.forEach(i => {
        if (result.jCollect.filter(j => j == i).length == 0) {
            itemsNotIn.push(i);
        }
    });
    
    return itemsNotIn;
}

const Reduce = (input) => {
    const result 
    console.log(`${reduce} removed...`);
    
}


const answer = Reduce(testData);

console.log(`Result is ${answer}`);