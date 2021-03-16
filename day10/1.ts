export {};
// 타입 가드 : 타입의 범위를 좁혀주는 기능
// as와 같은 타입 단언코드를 피할 수 있다. 생상성/가독성을 높일 수 있다.
// 값 as 타입 => 값을 해당 타입으로 강제하는 기능 => 에러발생률이 매우 높다!!!
function print(value: number | string) {
    if (typeof value === 'number') { // 타입 가드
        console.log((value as number).toFixed(2));
    } else {
        console.log((value as string).trim());
    }
}
