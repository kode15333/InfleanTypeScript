"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type GetText = (name: string, age: number) => string;
var getText = function (name, age) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    return "name: " + nameText + ", age: " + ageText;
};
