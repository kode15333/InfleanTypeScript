"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(value) {
    if ('age' in value) {
        console.log(value.age);
    }
    else {
        console.log(value.price);
    }
}
