export {};

type IsStringType<T> = T extends string ? 'yes' : 'no';
type T1 = IsStringType<string | number>;
type T2 = IsStringType<string> | IsStringType<number>;
// 조건부 타입에서 union 타입이 입력되면, T2 처럼 동작이된다.


type Array2<T> = Array<T>
type T3 = Array2<string | number>;
// string [] | number []
