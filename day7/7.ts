export {};

enum Fruit {
    Apple,
    Banana,
    Orage,
    Oragen2
}

const FRUIT_PRICE : { [key in Fruit] : number} = {
    [Fruit.Apple]: 1000,
    [Fruit.Banana]: 1500,
    [Fruit.Orage]: 1500,
}

// mapped type 이용을 하면 에러가 발생하기 때문에 파악하기 좋다.
