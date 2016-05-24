
function getTotalPrice(cartItems) {
    var totalPrice = 0;
    var cartItemKey = Object.keys(cartItems);
    cartItemKey.forEach(function (item) {
        totalPrice += getCartItemPrice(cartItems, item);
    });
    return totalPrice;
}
function getCartItemPrice(cartItems, key) {
    return cartItems[key].price * cartItems[key].count;
}





