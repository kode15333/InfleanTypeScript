"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeNumerArray(defaultValue, size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
function makeStringArray(defaultValue, size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
var arr1 = makeNumerArray(1, 10);
var arr2 = makeStringArray('empty', 10);
