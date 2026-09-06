/* 
Quick refreshers for const vs let

*/

//const can't be reassigned once created
//however does have some flexibiltiy
// with objects and arrays but one catch
//cannot assign with new arrays or object but can
// change tehir values

const userBasePay = 20.5;

let hourlyTips = 8.21;

hourlyTips = 10;

console.log(hourlyTips);

//however this is valid
//when we declare a blocked scope const
// variable with the same name

if (userBasePay === 20.5) {
  const userBasePay = 22;
  console.log(userBasePay);
}

console.log(userBasePay);

//|||| The aboe code is obviously a bad practice but just for
//clarification it was made to undeerstand the scoping of block in
// const concepts

// however we can also block the changes in contents of objects
// and array using Object.freeze

//example

const obj = Object.freeze({ key: "value" });
obj.key = "change";
console.log(obj.key);

const obj2 = Object.freeze({ nested: { x: 1 } });

obj2.nested.x = 99;
// valid because the freeze doesnot freeze or block changes
// in nested objects
console.log(obj2.nested.x);

//also destructing is simple way of assign values by key name in
// one line

const result = /(a+)(b+)(c+)/.exec("aaabcc");

//instead of this
const a1 = result[1];
const b1 = result[2];
const c1 = result[3];

//you can do this
// reading left -> right, left side mirrors
// shape of the array
const [, a2, b2, c2] = result;

console.log(result);

const { name, age } = { name: "Pratik", age: 23 };

console.log(name);
