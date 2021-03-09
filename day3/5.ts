export {};


// 값의 type만 정의하는 것을 index type이라고 한다.

interface Person {
    readonly name: string;
    age: number;
    [key: string]: string | number;
}

const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
    age: '25'
}
