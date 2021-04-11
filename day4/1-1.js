"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log('안녕하세요');
    };
    return Person;
}());
