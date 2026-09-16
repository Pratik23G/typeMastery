const myList = document.getElementById("myList");

const cherryItems = document.getElementById("cherryItems");

const orangeItems = document.createElement("li");

orangeItems.textContent = "orange";
myList.insertBefore(orangeItems, cherryItems);

//we can also add the child node in the begining
// unlike append node which adds the child node at
// the end insertBefore of this technique can push
// child node upfront.

function addToFirst(parentNode, toInsertNode) {
  const firstElementChild = parentNode.firstElementChild;

  parentNode.insertBefore(toInsertNode, firstElementChild);
}

const mangoItems = document.createElement("li");

mangoItems.textContent = "Mango";

addToFirst(myList, mangoItems);

//now we will learn about Js important core for React and Ts which is map, filter and reduce

const priceOfFruits = [4, 3, 5, 6, 2];
const discountPrice = [];
priceOfFruits.forEach((priceOfFruits, i, arr) => {
  discountPrice.push(priceOfFruits * 0.5);
});

//make a new array to manage the discount but its manual and hard
console.log(discountPrice);

//enter the map method creates a new array itself by transforming each element by function

const newDiscountPrice = priceOfFruits.map((priceOfFruits) => {
  return priceOfFruits * 0.6;
});

console.log(newDiscountPrice);

//trying at a complex Object style

const products = [
  {
    prodcutName: "HP",
    price: 600,
    color: "Magentic",
  },
  {
    prodcutName: "DELL",
    price: 750,
    color: "Aqua Blue",
  },
  {
    prodcutName: "Asus",
    price: 999,
    color: "Sapphire Grey",
  },
  {
    prodcutName: "ASUS-ROG",
    price: 1300,
    color: "Metallic Silver",
  },
];

const discountProducts = products.map((product) => {
  return { ...product, price: product.price * 0.2 };
});

//simple yet effective way to use map on objects
console.log(discountProducts);
