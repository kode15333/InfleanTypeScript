"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeArray(defaultValue, size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
var arr1 = makeArray(1, 10);
var arr2 = makeArray('empty', 10);
