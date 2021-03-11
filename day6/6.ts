export {};

interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}

function swapProprty<T extends Person, K extends keyof Person> (
    p1 : T,
    p2: T,
    key: K,
): void {
    [p1[key], p2[key]] = [p2[key], p1[key]];
}

const p1: Korean = {
    name: '홍길동',
    age: 23,
    liveInSeoul: true
}

const p2: Korean = {
    name: '김삿갓',
    age: 31,
    liveInSeoul: false
}

swapProprty(p1, p2, 'age');
