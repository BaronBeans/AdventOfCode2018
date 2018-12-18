const input = require('./input');
const data = input.split('\n');

const regex = /\[(\d+)\-(\d+)\-(\d+)\ (\d+)\:(\d+)\] (d+)/;

const rawTestData = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`
const testData = rawTestData.split('\n');

const extracted = MapTimes(testData)
console.log(extracted);

class TimeMap {
    constructor(m, d, g, z) {
        this.month = m;
        this.day = d;
        this.guard = g;
        this.state = z;
    }
}

function MapTimes(input) {
    return input.map(line => {
        const extracted = regex.exec(line);

        return new TimeMap(
            (extracted[1]),
            (extracted[2]),

        )
        return {
            id: parseInt(extracted[1]),
            x: parseInt(extracted[2]),
            y: parseInt(extracted[3]),
            width: parseInt(extracted[4]),
            height: parseInt(extracted[5])
        };
    });
}