//TODO: Please write code in this file.

function printInventory(inputs) {
    var cartItems = [];
    var cartItemsBarCode = [];
    var totalPrice = 0;

    inputs.forEach(function (element) {
        var key = element.barcode;
        if (cartItems[key]) {
            cartItems[key].num++;
            cartItems[key].sumPrice += cartItems[key].price;
        } else {
            cartItems[element.barcode] = {
                barcode: element.barcode,
                name: element.name,
                unit: element.unit,
                price: element.price,
                sumPrice: element.price,
                num: 1
            };
            cartItemsBarCode.push(element.barcode);

        }
        totalPrice += cartItems[key].price;

    });
    
    var resultString = spliceInventoryResultString(cartItems,cartItemsBarCode,totalPrice);
    console.log(resultString);
}

function spliceInventoryResultString(cartItems, cartItemsBarCode, totalPrice) {
    var resultContent = "";
    var resultTitle = "***<没钱赚商店>购物清单***\n";
    var resultDivile = "----------------------\n";
    var resultStar = "**********************";
    cartItemsBarCode.forEach(function (item) {
        resultContent += getSingleCartItemInventoryString(cartItems, item);
    });
    return resultTitle + resultContent + resultDivile + "总计：" + totalPrice.toFixed(2) + "(元)\n" + resultStar;
}

function getSingleCartItemInventoryString(cartItems, key) {
    var singleCartItemResult = "";
    singleCartItemResult = "名称：" + cartItems[key].name + "，数量：" + cartItems[key].num + "瓶，单价：" + cartItems[key].price.toFixed(2) + "(元)，小计：" + (cartItems[key].num * cartItems[key].price).toFixed(2) + "(元)\n";
    return singleCartItemResult;
}



