/* 
Quick learning about typescript numbers:



*/

// typescript to hold floating point values:
export {};
let price: number;

price = 9.95;

//like JS typescript alos supports number literals for hex, dec, binary
// and octal numbers

let counter: number = 0;
let x: number = 100,
  y: number = 200;

//binary numbers are represented by 0b or 0B
let bin = 0b100;
let anotherBin: number = 0b010;

//OCtal numbers are represented by 0o(since ES2015)
let octal: number = 0o10;

//Hexadecimals are 0X or 0x
let hexadecimal: number = 0xa;

//Big integers are bigint type and numbers larger then 2^53 - 1

let big: bigint = 9007199254740991n;
