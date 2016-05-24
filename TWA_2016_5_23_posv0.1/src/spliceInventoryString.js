function spliceInventoryResultString(cartItems) {
    var resultContent = "";
    var resultTitle = "***<没钱赚商店>购物清单***\n";
    var resultDivile = "----------------------\n";
    var resultStar = "**********************";
    var cartItemKey = Object.keys(cartItems);
    var totalPrice = 0;
    cartItemKey.forEach(function (item) {
        resultContent += getSingleCartItemInventoryString(cartItems, item);
    });
    var resultTotalPrice = "总计：" + formatPrice(getTotalPrice(cartItems)) + "(元)\n";
    return resultTitle + resultContent + resultDivile + resultTotalPrice + resultStar;
}

function getSingleCartItemInventoryString(cartItems, key) {
    var singleCartItemResult = "";
    singleCartItemResult = "名称：" + cartItems[key].name + "，数量：" + cartItems[key].count + "瓶，单价：" + formatPrice(cartItems[key].price) + "(元)，小计：" + formatPrice(getCartItemPrice(cartItems, key)) + "(元)\n";
    return singleCartItemResult;
}

function formatPrice(price) {
    return price.toFixed(2);
}





