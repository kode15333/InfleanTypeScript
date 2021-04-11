"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swapProprty(p1, p2, key) {
    var _a;
    _a = [p2[key], p1[key]], p1[key] = _a[0], p2[key] = _a[1];
}
var p1 = {
    name: '홍길동',
    age: 23,
    liveInSeoul: true
};
var p2 = {
    name: '김삿갓',
    age: 31,
    liveInSeoul: false
};
swapProprty(p1, p2, 'age');
