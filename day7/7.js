"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orage"] = 2] = "Orage";
    Fruit[Fruit["Oragen2"] = 3] = "Oragen2";
})(Fruit || (Fruit = {}));
var FRUIT_PRICE = (_a = {},
    _a[Fruit.Apple] = 1000,
    _a[Fruit.Banana] = 1500,
    _a[Fruit.Orage] = 1500,
    _a);
// mapped type 이용을 하면 에러가 발생하기 때문에 파악하기 좋다.
