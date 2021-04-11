"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface는 js로 컴파일되면, 없어지기떄문에 값의 영역인 instanceof에서 당연히 에러가 발생한다. 
function print(value) {
    if (value instanceof Person) { // 타입 가드
        console.log(value.age);
    }
    else {
        console.log(value.price);
    }
}
