"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694  \uC800\uB294 " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
var person = new Person('홍길동');
// person.#name;
