"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(value) {
    switch (value.type) {
        case "a":
            console.log(value.age);
            break;
        case "b":
            console.log(value.price);
            break;
        case "c":
            console.log(value.price2);
            break;
    }
}
