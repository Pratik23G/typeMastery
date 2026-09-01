/* 

We will learn about strings in today's lesson


*/

//Like javascript Typescript also uses " " double quotes or single quotes ''

let firstName: string = "John";
let title: string = "Web Developer";

console.log(`Hi ${firstName} your role is ${title}`);

//making multiple line string using backtick

let decsription = `This is a Typescript
span lines example
in multiple
lines
`;

console.log(decsription);

// we can use string interpolations too here is an example

let userName: string = "Pratik23G";
let age: string = "23";
let profile: string = `Hi ${userName}.
Welcome. I'm ${age} years old`;

console.log(profile);
