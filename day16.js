const myDiv = document.getElementById("myDiv");
const lasso = document.querySelector(".lasso");
if (myDiv) {
  console.log(myDiv.dataset);

  myDiv.dataset.name = "Bob";
  myDiv.dataset.startedCodingAt = 10;

  //removing actual value

  myDiv.dataset.name = "";

  myDiv.removeAttribute("data-name");
}
//gets a spacing in HTML format b/c it reads the raw text inside the code editor
console.log(lasso.textContent);

// is aware of rendered format
console.log(lasso.innerText);

//some function testPractice Odin Project

function add7(numberVal) {
  return numberVal + 7;
}

console.log(add7(10));

function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

console.log(multiply(3, 2));

function capitalize(userString) {
  return userString[0].toUpperCase() + userString.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastletter(userString) {
  return userString[userString.length - 1];
}

console.log(lastletter("abcd"));
