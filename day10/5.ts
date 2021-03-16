export {};

// discriminated union 식별가능한 유니온 타입을 이용한다!
// 같은이름의 속성을 정의하고 속성의 타입은 모두 겹치지 않게(같지 않으면 된다 => 구별되면 된다)
interface Person {
    type: 'a';
    name: string;
    age: number;
}

interface Product {
    type: 'b',
    name: string;
    price: number;
}

function print(value: Person | Product) {
    if (value.type === 'a') {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
