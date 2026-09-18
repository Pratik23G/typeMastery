/* 

Learning more about map and filter today

we can add new items in an object


*/

const productConfig = [
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

const newItems = productConfig.map((product) => {
  if (product.price < 700) {
    return { ...product, category: "Starters" };
  } else if (product.price < 1000) {
    return { ...product, category: "MidTier" };
  } else if (product.price < 1500) {
    return { ...product, category: "Premium" };
  } else {
    return { ...product, category: "Not found yet in inventory" };
  }
});

console.log(newItems);

//now filter concept in Js

// allows to write simple algorithm to filter items based on condition similar to map method and returns
// those that pass the condition.

const sneakerCompanies = [
  { sneakerName: "Nike", price: 140, color: "Blue" },
  { sneakerName: "Jordan", price: 220, color: "Varsity Red" },
  { sneakerName: "Ascis Gel Kayano", price: 175, color: "Grey" },
  { sneakerName: "Adidas", price: 180, color: "White" },
  { sneakerName: "Puma", price: 135, color: "Yellow" },
  { sneakerName: "A ma Miniere", price: 200, color: "White" },
];

const affordableSneaker = sneakerCompanies.filter(
  (product) => product.price < 180,
);
console.log(affordableSneaker);

//can also filter by specific needs like filtering by color and letter

const colorAndWordMatchSneaker = sneakerCompanies.filter(
  (product) => product.sneakerName.includes("A") && product.color === "White",
);

console.log(colorAndWordMatchSneaker);
