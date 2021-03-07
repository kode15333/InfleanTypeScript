export {};

// 숫자면, 양방향 맴핑
enum Fruit {
    Apple,
    Banana = 5,
    Orange
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;


console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5])

enum Language {
    Korea = 'ko',
    English = 'en',
    Japanese = 'jp'
}

function getIsValidEnumValue(enumObject: any, value: number | string) {
    return Object.keys(enumObject)
        .filter(key => isNaN(Number(key)))
        .some(key => enumObject[key] === value)
}

enum Some {
    Key1 = 1,
}
// 이러한 양방향 맵핑을 지워주기 위해 ₩필터를 걸어준다.
// Some[Key1] = 1
// Some[1] = 'Key1'

console.log('1 in Fruit', getIsValidEnumValue(Fruit, 1))
console.log('5 in Fruit', getIsValidEnumValue(Fruit, 5))
console.log('Orange in Fruit', getIsValidEnumValue(Fruit, 'Orage'))
console.log('ko in Language', getIsValidEnumValue(Language, 'ko'))
console.log('korea in Language', getIsValidEnumValue(Language, 'Korea'))
