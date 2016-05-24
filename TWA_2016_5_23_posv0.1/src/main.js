function printInventory(inputs) {
    var cartItems = [];
    inputs.forEach(function (item) {
        var key = item.barcode;
        if (cartItems[key]) {
            cartItems[key].count++;
            cartItems[key].sumPrice += cartItems[key].price;
        } else {
            cartItems[item.barcode] = {
                barcode: item.barcode,
                name: item.name,
                unit: item.unit,
                price: item.price,
                sumPrice: item.price,
                count: 1
            };
        }
    });
    var resultString = spliceInventoryResultString(cartItems);
    console.log(resultString);
}



