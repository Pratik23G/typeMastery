/*

Today is something light and simple type interface

//simple var declare


*/
let counter = 23;
//similarly incrementing typew for functions
function increment(val) {
    return (val += 1);
}
console.log(increment(counter));
function printValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// typescript common type algorithm
let items = [1, 2, 3, null];
printValue(items);
//another practice
let studentGrades = [
    [100, "A"],
    [85, "B+"],
    [90, "A-"],
    [85, "B+"],
];
function getHighScore(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] >= 85 && arr[i][1] === "A") {
            return [arr[i][0], arr[i][1]];
        }
    }
    return `This time your score did not meet the criteria`;
}
console.log(getHighScore(studentGrades));
