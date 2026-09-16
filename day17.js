/* 
Learn about Clean Code and its commands and some DOM stuffs

*/

// hard to comprehend example
const x = function (z) {
  const w = "Hello";
  return w;
};

//vs something simple yet easy to read

const generateUserGreet = function (name) {
  const greeting = "hello";
  return greeting + name;
};

generateUserGreet("Pratik");

// The most basic looping technique is the for loop

const catNames = ["Daisy", "Nina", "Stella", "Nemo"];

for (cat in catNames) {
  console.log(cat);
}

// Js has more specialized tools for looping called map and filter
// map() to do something to each item in a collection and create a new collection containing changed items

//example:

function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = catNames.map(toUpper);

console.log(upperCats);

// filter() on the other hand selects items that match and creates a new list of items

function lCat(cat) {
  return cat.startsWith("N");
}

const filterNameCats = catNames.filter(lCat);

console.log(filterNameCats);
