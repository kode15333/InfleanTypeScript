"use strict";
// 타입호환성은 어떤 타입을 다른 타입으로 취급해도 되는지 판단
// 정적타입의 언어는 타입 호환성을 통해 컴파일 타임에 호환되지 않는 타입을 찾아내는것
// 어떤 변수가 다른 변수에 할당 가능하기 위해서는 해당 변수의 타입이 다른 쪽 변수의 타입에 할당 가능해야 한다.
// 할당 가능을 판단할 때는 타입이 가질 수 있는 값의 집합을 생각하면 이해하기 쉽습니다.
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    var v1 = a;
    var v2 = b;
}
function func2(a) {
    var v1 = a;
    var v2 = a;
    0;
}
