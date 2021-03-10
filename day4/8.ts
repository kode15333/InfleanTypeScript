export {};


// contructor 인자의 접근제한자가 들어가면 알아서 필드변수를 만들어서 할당을 한다. 
class Person {
    constructor(public name: string, public age: number) {}

}

const person = new Person('홍길동', 23);
person.name = '김삿갓';
