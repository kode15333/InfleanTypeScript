export {};


// type이 많으면 집합의 범위는 좁아진다?
// 제약조건이 많으면 그것을 만족하는 타입이 적어진다 

interface Person {
    name: string;
    age: number;
    gender: string;
}

interface Product {
    name: string;
    age: number | string;
}

const person:Person = {
    name: 'mike',
    age: 23,
    gender: 'male',
}

const product: Product = person;
