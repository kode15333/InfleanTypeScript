"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    if (a === void 0) { a = 'abc'; }
    if (b === void 0) { b = 10; }
    return a + " " + b;
}
func1(3, 6);
var v1 = func1('a', 1);
function func2(value) {
    if (value < 10) {
        return value;
    }
    else {
        return value + " is too big";
    }
}
