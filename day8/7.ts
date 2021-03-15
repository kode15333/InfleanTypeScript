export {};

type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>

interface Person {
    name: string;
    age: number;
    nation: string;
}

type T1 = Omit<Person, 'nation' | 'age'>
// 주어진 인터페이스에서 해당 키를 제거한다.
