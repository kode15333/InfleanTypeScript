"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    Person.prototype.sayHello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694  \uC800\uB294 " + __classPrivateFieldGet(this, _name) + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
_name = new WeakMap();
var person = new Person('홍길동');
// person.#name;
