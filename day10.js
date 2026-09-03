/* 
Next 4 days learning about DOM techniques and building on it

*/

//day 1 document.createElement()

// let newElement = document.createElement("div");

let anotherNewElement = document.createElement("input");
console.log(anotherNewElement);
console.dir(anotherNewElement);

//adding to the sttaic page itself we do the append.child method

document.body.appendChild(anotherNewElement);
