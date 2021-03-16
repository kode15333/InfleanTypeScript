export {};

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}
// interface는 js로 컴파일되면, 없어지기떄문에 값의 영역인 instanceof에서 당연히 에러가 발생한다. 
function print(value: Person | Product) {
    if(value instanceof Person){ // 타입 가드
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
