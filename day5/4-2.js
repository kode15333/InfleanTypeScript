"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = { name: 'mike', age: '23', city: 'abc' };
var person = obj;
var product = obj;
product = person;
person = product;
