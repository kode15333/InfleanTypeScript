export {};

function identity<T extends number | string>(p1: T) : T {
    return p1;
}

identity(1)
identity('1');
identity([])

// A extends B
// A는 B에 할당이 가능해야 한다.


// 리엑트의 속성값 전체는 객체 타입만 허용이 됩니다.
// 이것과 같이 제네릭에서 타입의 종류를 제한하기 위해서 extends를 사
