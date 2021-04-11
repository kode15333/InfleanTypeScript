"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeArray(defaultValue, size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
var arr1 = makeArray(1, 3);
var arr2 = makeArray('empty', 3);
// 똑똑한 타입스크립트
var arr3 = makeArray('hello', 3);
var arr4 = makeArray(true, 10);
