/*
In this tutorial we will learn about array types

Typescript array types are very easy to comprehend
like Js
*/
// syntax for array typescript let arrayName: type[];
let skills = [];
skills = ["Elastico", "rabona", "body-fient"];
//just like Js you can also add more strings to the array
//2 techniques, technique 1 using [i], method
skills[3] = "Ballon-dor";
skills[4] = "Knuckle Ball";
//or using the push method
skills.push("Messi GOAT");
//note typecript is strict on what type of variables we define once
// we make one causing errors for any incompatible values
console.log(skills);
