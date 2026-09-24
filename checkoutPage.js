const cartIsEmpty = false;
const itemInStock = true;
const paymentApproved = false;

function checkoutOrder() {
  return new Promise((resolve, reject) => {
    // TODO: check cartIsEmpty first — reject with a message like
    // "Your cart is empty. Add items before checking out."
    // TODO: else if item is NOT in stock — reject with
    // "Sorry, this item just went out of stock."
    // TODO: else if payment is NOT approved — reject with
    // "Payment failed. Please check your payment method."
    // TODO: else — resolve with a success message like
    // "Order confirmed! Your items are on the way."
    if (cartIsEmpty) {
      return reject("Your cart is empty. Add items before checking out.");
    } else if (!itemInStock) {
      return reject("Sorry, this item just went out of stock.");
    } else if (!paymentApproved) {
      return reject("Payment failed. Please check your payment method.");
    } else {
      return resolve("Order confirmed! Your items are on the way.");
    }
  });
}

checkoutOrder()
  .then((confirmation) => {
    // TODO: log the confirmation, prefixed with something like "✅ "
    console.log("✅ " + confirmation);
  })
  .catch((error) => {
    // TODO: log the error, prefixed with something like "❌ "
    console.log("❌ " + error);
  });
