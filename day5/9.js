"use strict";
/*
다음은 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건이다.
1. A의 매개변수 개수가 B의 매개변수 개수보다 적어야 한다.
2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.

결론 : 함수를 실제로 호출했을때 가정 타입을 생각하지
 */
var f1 = function (a, b) { return a + " " + b.length; };
var f2 = function (a, b) { return a + " " + b; };
var f3 = function (a) { return "" + a; };
var f4 = function (a) { return (a < 10 ? a : 'too big'); };
f1 = f3;
f3 = f1;
f1 = f2;
f2 = f1;
f4 = f3;
f3 = f4;
