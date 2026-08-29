/*

typescript is great to fix the dynamic types problem

That means referencing a property that does not exist
on an object

Typescript adds an optional type system catching any errors
before we even compile the code

*/
function getProduct(id) {
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
let varExample;
let var2Example = 2;
const valueNumber = 34;
//bugs for error can't do number -> string type has to be
//specifically same typed format
// varExample = 'Hello';
//Boolean type example:
let isActiveUser = true;
//with arrays
let arrayNameOfUsers = ["Pratik", "Pamu", "Suraj", "Prerana"];
// with objects
let personalInfo;
personalInfo = {
    name: "Pratik",
    age: 24,
};
// with some arrow functions
let greeting;
greeting = function (name) {
    return `Hi ${name}`;
};
console.log(greeting("Pratik"));
const sayNamaste = (name) => {
    return `Hi namaste K cha hajur ma chai ${name}`;
};
console.log(sayNamaste("Pratik"));
