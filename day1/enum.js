"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 숫자면, 양방향 맴핑
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
var v1 = Fruit.Apple;
var v2 = Fruit.Banana;
console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);
var Language;
(function (Language) {
    Language["Korea"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
var Some;
(function (Some) {
    Some[Some["Key1"] = 1] = "Key1";
})(Some || (Some = {}));
// 이러한 양방향 맵핑을 지워주기 위해 ₩필터를 걸어준다.
// Some[Key1] = 1
// Some[1] = 'Key1'
console.log('1 in Fruit', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit', getIsValidEnumValue(Fruit, 'Orage'));
console.log('ko in Language', getIsValidEnumValue(Language, 'ko'));
console.log('korea in Language', getIsValidEnumValue(Language, 'Korea'));
