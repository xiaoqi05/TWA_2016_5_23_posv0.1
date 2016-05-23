//TODO: Please write code in this file.

function printInventory(inputs) {
    var arr = new Array();
    var arrBarCode= new Array();
    var totalPrice=0;
    var jsonInputData = eval(inputs);
    var result="***<没钱赚商店>购物清单***\n";
    jsonInputData.forEach(function (element) {
        var key = element.barcode;
        if (arr[key]) {
            arr[key].num++;
            arr[key].sumPrice += arr[key].price;
        } else {
            arr[element.barcode] = {
                barcode: element.barcode,
                name: element.name,
                unit: element.unit,
                price: element.price,
                sumPrice: element.price,
                num: 1
            }
            arrBarCode.push(element.barcode);

        }
        totalPrice += arr[key].price;

    }, this);
  
    arrBarCode.forEach(function(element) {
        var key=element;
        result+="名称："+arr[key].name+"，数量："+arr[key].num+"瓶，单价："+arr[key].price.toFixed(2)+"(元)，小计："+(arr[key].num*arr[key].price).toFixed(2)+"(元)\n";
    }, this);
    result+="----------------------\n" +
            "总计："+totalPrice.toFixed(2)+"(元)\n" +
            "**********************";
  console.log(result);
}

