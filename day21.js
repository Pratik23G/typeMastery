/* 
Today we will learn more about promises on Javascript and hoiw they work

Promises has 2 results: either promise is fulfiled or rejected

syntax of promise

let someVariable = new Promise((resolve, reject) => {
  // rest of the code
})
*/

const { truncate } = require("lodash");

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

/* 
Now one may say why do we need promises instead of callback function

avoiding callback hell in Js

Callback hell happens when many dependent asynchronous functions 
get nested inside each other creating a spindle triangle pyramid of doom

*/

//callback code example

const userId = 1;

// ==========================================================
// 1. HOW TO SHAPE THE CALLBACK FUNCTIONS
// ==========================================================
// Notice the second parameter 'callback'. We invoke it using 'callback(...)'
const fetchUserCb = (id, callback) => {
  callback({ id: id, userName: "Alice" });
};

const fetchOrdersCb = (userId, callback) => {
  callback([{ id: 101, item: "Laptop " }]);
};

const fetchProductDetailsCb = (orderId, callback) => {
  callback({ id: 202, price: 99 });
};

const processPaymentCb = (price, callback) => {
  callback({ success: true, transactionId: "ADB23FG4" });
};

// NOW this will run and print to the console!
fetchUserCb(userId, (user) => {
  fetchOrdersCb(user.id, (orders) => {
    fetchProductDetailsCb(orders[0].id, (product) => {
      processPaymentCb(product.price, (receipt) => {
        console.log("Callback Success:", receipt);
      });
    });
  });
});

//promises fixed it

const fetchUser = (id) => {
  return Promise.resolve({ id: id, userName: "Alice" });
};

const fetchOrders = (userId) => {
  return Promise.resolve([{ id: 101, item: "Laptop " }]);
};

const fetchProductDetails = (orderId) => {
  return Promise.resolve({ id: 202, price: 99 });
};

const processPayment = (price) => {
  return Promise.resolve({ success: true, transactionId: "ADB23FG4" });
};

fetchUser(userId)
  .then((user) => fetchOrders(user.id))
  .then((orders) => fetchProductDetails(orders[0].id))
  .then((product) => processPayment(product.price))
  .then((receipt) => console.log("Success", receipt))
  .catch((error) => console.error("Error:", error));
