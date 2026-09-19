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

//We will learn now about array method sespecially 8 methods easy ones

// method 1:

// same as before the filter method

const items = [
  { sneakerName: "Nike", price: 140, color: "Blue" },
  { sneakerName: "Jordan", price: 220, color: "Varsity Red" },
  { sneakerName: "Ascis Gel Kayano", price: 175, color: "Grey" },
  { sneakerName: "Adidas", price: 180, color: "White" },
  { sneakerName: "Puma", price: 135, color: "Yellow" },
  { sneakerName: "A ma Miniere", price: 200, color: "White" },
];

const affordableHundredDollars = items.filter((shoes) => shoes.price < 150);

console.log(affordableHundredDollars);

//Method 2: Map as we did earlier very simple yet effective

const numbersEven = [2, 4, 6, 8];

const evenNumSquared = numbersEven.map((number) => {
  return number * number;
});

console.log(evenNumSquared);

//Method 3: find() method finding single object in an array

const books = [
  { title: "The Great Gatsby", pages: 180 },
  { title: "To Kill a Mockingbird", pages: 281 },
  { title: "1984", pages: 328 },
  { title: "The Hobbit", pages: 310 },
];

const specificBook = books.find((book) => {
  return book.title === "1984" && book.pages == 328;
});

console.log(specificBook);
