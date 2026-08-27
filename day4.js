/*

typescript is great to fix the dynamic types problem

That means referencing a property that does not exist
on an object

*/
function getProduct(id) {
    return {
        id: id,
        name: `Gadget ${id}`,
        price: 150.5,
    };
}
const product = getProduct(1);
console.log(`The product is ${product.name} and its price is ${product.price}`);
