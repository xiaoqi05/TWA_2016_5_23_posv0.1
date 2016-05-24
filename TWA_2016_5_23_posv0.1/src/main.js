//TODO: Please write code in this file.

function printInventory(inputs) {
    var cartItems = [];
    var cartItemsBarCodes = [];
    var totalPrice = 0;

    inputs.forEach(function (item) {
        var key = item.barcode;
        if (cartItems[key]) {
            cartItems[key].num++;
            cartItems[key].sumPrice += cartItems[key].price;
        } else {
            cartItems[item.barcode] = {
                barcode: item.barcode,
                name: item.name,
                unit: item.unit,
                price: item.price,
                sumPrice: item.price,
                num: 1
            };
            cartItemsBarCodes.push(item.barcode);

        }
        totalPrice += cartItems[key].price;

    });
    var resultString = spliceInventoryResultString(cartItems, cartItemsBarCodes, totalPrice);
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
    var resultTotalPrice = "总计：" + formatPrice(totalPrice) + "(元)\n";
    return resultTitle + resultContent + resultDivile + resultTotalPrice + resultStar;
}

function getSingleCartItemInventoryString(cartItems, key) {
    var singleCartItemResult = "";
    singleCartItemResult = "名称：" + cartItems[key].name + "，数量：" + cartItems[key].num + "瓶，单价：" + formatPrice(cartItems[key].price) + "(元)，小计：" + formatPrice(cartItems[key].num * cartItems[key].price) + "(元)\n";
    return singleCartItemResult;
}

function formatPrice(price) {
    return price.toFixed(2);
}



