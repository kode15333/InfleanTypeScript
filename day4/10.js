"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 \uC800\uB294 " + this.name + " \uC785\uB2C8\uB2E4");
        console.log(Person.getIsAdult(this.age) ? '저는 성인이 아닙니다' : '저는 성인입니다.');
    };
    Person.getIsAdult = function (age) {
        return Person.adultAge <= age;
    };
    Person.adultAge = 20;
    return Person;
}());
var person = new Person('홍길동', 23);
person.sayHello();
console.log("\uC131\uC778 \uD310\uB2E8 \uAE30\uC900 \uB098\uC774: " + Person.adultAge);
