export {};

abstract class Person {
    constructor(public name: string) {}

    sayHello(){
        console.log(`안녕하세요 저는 ${this.name} 입니다`);
    }

    abstract sayHello2(): void;
}

class Programmer extends Person {
    constructor(name: string) {
        super(name);
    }

    sayHello() {
        super.sayHello();
        console.log('저는 프로그래머입니다.');
    }

    sayHello2() {
        console.log('저는 프로그래머2입니다.');
    }
}

const person = new Person('홍길동');
const programmer = new Programmer('홍길동');

