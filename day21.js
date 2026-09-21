/* 
Today we will learn more about promises on Javascript and hoiw they work

Promises has 2 results: either promise is fulfiled or rejected

syntax of promise

let someVariable = new Promise((resolve, reject) => {
  // rest of the code
})
*/

let p = new Promise((resolve, reject) => {
  let a = 2;
  if (a == 1 + 1) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This message is then " + message);
}).catch((message) => {
  console.log("This message is then " + message);
});
