"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPerson(x) {
    return x.age != undefined;
}
function print(value) {
    if (isPerson(value)) {
        console.log(value.age);
    }
    else {
        console.log(value.price);
    }
}
