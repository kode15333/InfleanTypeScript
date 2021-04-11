"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
function print(value) {
    console.log(value.name);
    if (value instanceof Person) { // 타입 가드
        console.log(value.age);
    }
    else {
        console.log(value.price);
    }
}
