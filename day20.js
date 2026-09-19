/* 
We will learn about reduce in Javascript and more tools about array methods and few destructuring

*/
const costPrice = [2, 14, 16, 18, 20, 22, 24];

const finalTotal = costPrice.reduce((total, currentCost) => {
  return total + currentCost;
}, 0);

console.log(finalTotal);

//Also really cool with strings to combine words

//ex

const words = ["Hello", " ", "World"];

const combineWords = words.reduce((totalWord, word) => {
  return totalWord + word;
}, "");

console.log(combineWords);

//can also do something complex using reduce method to make object

const fruitsBrought = [
  "apple",
  "pear",
  "apple",
  "banana",
  "apple",
  "banana",
  "pear",
  "pear",
  "apple",
  "pear",
  "orange",
];

const fruitsRepeat = fruitsBrought.reduce((totalFruits, fruit) => {
  totalFruits[fruit] = (totalFruits[fruit] || 0) + 1;
  return totalFruits;
}, {});

console.log(fruitsRepeat);

//final Capstone exercise using all 3 map, filter, reduce

//CAP where we need to get total bill of a user who buys product
// from his cart while also giving him some discount

const products = [
  {
    prodcutName: "HP",
    price: 600,
    color: "Magentic",
    inCart: true,
  },
  {
    prodcutName: "DELL",
    price: 750,
    color: "Aqua Blue",
    inCart: false,
  },
  {
    prodcutName: "Asus",
    price: 999,
    color: "Sapphire Grey",
    inCart: true,
  },
  {
    prodcutName: "ASUS-ROG",
    price: 1300,
    color: "Metallic Silver",
    inCart: true,
  },
];

const totalCartPrice = products
  .filter((p) => p.inCart)
  .map((p) => p.price * 0.1)
  .reduce((total, price) => {
    return total + price;
  }, 0);

console.log("Total Price here is: ");
console.log(totalCartPrice);
