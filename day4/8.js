"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// contructor 인자의 접근제한자가 들어가면 알아서 필드변수를 만들어서 할당을 한다. 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person('홍길동', 23);
person.name = '김삿갓';
