"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    return "name: " + nameText + ", age: " + ageText;
}
//
// const v1: string = getText('mike', 23);
// const v2: string = getText('mike', '23');
// const v3: number = getText('mike', 23);
