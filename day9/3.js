"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [10, 20, 30];
var n1 = arr1[0], n2 = arr1[1], n3 = arr1[2];
arr1.push('a');
var obj = { id: 'abcd', age: 123, language: 'korean' };
var id = obj.id, age = obj.age, language = obj.language;
console.log(id === age);
