export const cart = [];


export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    //1st step
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}