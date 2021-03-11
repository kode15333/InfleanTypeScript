export {};

function makeArray<T>(defaultValue: T, size: number): T[] {
    const arr: T[] = [];
    for(let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }

    return arr;
}

const arr1 = makeArray<number>(1, 3);
const arr2 = makeArray<string>('empty', 3);

// 똑똑한 타입스크립트
const arr3 = makeArray('hello', 3)
const arr4 = makeArray(true, 10);
