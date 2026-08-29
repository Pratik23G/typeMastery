/* 

Today is something light and simple type interface

//simple var declare


*/

let counter: number = 23;

//similarly incrementing typew for functions
function increment(val: number): number {
  return (val += 1);
}

console.log(increment(counter));

function printValue(arr: (number | null)[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// typescript common type algorithm
let items: (number | null)[] = [1, 2, 3, null];

printValue(items);

//another practice

let studentGrades: [number, string][] = [
  [100, "A"],
  [85, "B+"],
  [90, "A-"],
  [85, "B+"],
];

function getHighScore(arr: [number, string][]): [number, string] | string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= 85 && arr[i][1] === "A") {
      return [arr[i][0], arr[i][1]];
    }
  }
  return `This time your score did not meet the criteria`;
}

console.log(getHighScore(studentGrades));
