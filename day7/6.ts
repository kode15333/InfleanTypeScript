export {};

interface Person {
    name: string,
    age: number,
    language: string
}

// type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<'p1'| 'p2', Person>;
type T2 = Record<'p1'| 'p2', number>;

// Record 또한 내장타입이기 때문에 키워드만 써도 된다.
