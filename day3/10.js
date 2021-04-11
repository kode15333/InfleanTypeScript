"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SomePerson = /** @class */ (function () {
    function SomePerson(name, age) {
        this.name = name;
        this.age = age;
    }
    SomePerson.prototype.isYoungerThan = function (age) {
        return this.age < age;
    };
    return SomePerson;
}());
