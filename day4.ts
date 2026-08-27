/* 

typescript is great to fix the dynamic types problem

That means referencing a property that does not exist
on an object

*/

//created an interface so that the object Product has a "shape"
interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Gadget ${id}`,
    price: 150.5,
  };
}

const product = getProduct(1);
console.log(`The product is ${product.name} and its price is ${product.price}`);
