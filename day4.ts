/* 

typescript is great to fix the dynamic types problem

That means referencing a property that does not exist
on an object

Typescript adds an optional type system catching any errors
before we even compile the code

*/

//created an interface so that the object Product has a "shape"
interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Gadget ${id}`,
    price: 150.5,
  };
}

const product = getProduct(1);
console.log(`The product is ${product.name} and its price is ${product.price}`);

//Type-annottations in TS

/* 

Typescript uses type annotations to specify types for identifiers such as
variables, functions, objects, etc.

*/

//Type annotations format

let varExample: number;

let var2Example: number = 2;

const valueNumber: number = 34;

//bugs for error can't do number -> string type has to be
//specifically same typed format

// varExample = 'Hello';

//Boolean type example:

let isActiveUser: boolean = true;

//with arrays

let arrayNameOfUsers: string[] = ["Pratik", "Pamu", "Suraj", "Prerana"];

// with objects

let personalInfo: {
  name: string;
  age: number;
};

personalInfo = {
  name: "Pratik",
  age: 24,
};

// with some arrow functions
let greeting: (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

console.log(greeting("Pratik"));
