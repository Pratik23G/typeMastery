/* 

We are learning about promises today where 
we will deal with a classic problem called
callback hell which essentially deals with
nested loop of calling functions

*/

//bad example:
/* 

doSomething(function anotherFunc(result) {
    doSomething(function anotherFunc2(result2) {
        doSomething(function anotherFunc3(result3){
            console.log(`This code is leading to result as: ${result3}`);
        }, failureCallback);
    
    }, failureCallback);
}, failureCallback);

*/

// proimises fixes all of these issues by creating promise chain
// because callbacks get attached to returned promise object, instead
// of inside a function, we use promise technique called then() function
// to return a new promise

// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);

//promise function template format

function amazingSum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Do Something");

      resolve("https://test.com");
    }, 200);
  });
}

async function main() {
  const result = await amazingSum();
  console.log(result);
}

main();

// core idea is always to return inside the then() whenever
// we use promise because the value inside then() becomes
// next then()'s value

//BAD example:
doSomething()
  .then((url) => {
    fetch(url);
  })
  .then((result) => {
    console.log(result); // we missed fecth for result here.
  });

//GOOD example

doBetter()
  .then((url) => {
    return fetch(url);
  })
  .then((results) => {
    console.log(results);
  });

//race condition is a real thing and a problem
// if you don't have a return ready for then

//bad example

const GrocerylistWebsites = ["Amazon", "Walmart", "Safeway"];

async function groceryMarts().then((url) => {
    fetch(url).then(res => res.join()).then(data => {
        GrocerylistWebsites.push(data);
    });
}).then(() => {
    console.log(GrocerylistWebsites);
});

// here for the first then we do not return so the second
// then wouldn't have a value to run the promise

//Good method is to return the whole inner chain

async function goodList().then((url)=> {
    return fetch(url).then(res => res.join()).then(data => {
        GrocerylistWebsites.push(data);
    });
}).then(() => {
    console.log(GrocerylistWebsites);
});
