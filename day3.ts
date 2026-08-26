export {};

console.log("Hello World again Day3!");

async function hello() {
  return "Hello again";
}

//implicitly, type autmoatically inferred
let lucky = 23;
//can be inferred as any type if not implicitly typed

//creating custom types
type Style = "Bold" | "Italic" | 23;

let font: Style = "Bold";

interface Person {
  first: string;
  last: string;
}

//strong typing objects
// this is redundant but can be fixed with type interface have a alook at the code above it
const person1: Person = {
  first: "Dean",
  last: "Johns",
};

const person2: Person = {
  first: "Pratik",
  last: "Gurung",
};
