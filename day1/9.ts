export {};


// const enum type은 변수처럼 사용할 수 없다.
// Property 접근이나, index로 접근하여 사용할 수 만 있다.

const enum Fruit {
    Apple,
    Banana,
    Orangem,
}

const fruit: Fruit = Fruit.Apple;

const enum Language {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp'
}

const lang: Language = Language.Korean;
