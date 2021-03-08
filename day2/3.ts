export {};

function getText(name: string, age: number, language?: string) : string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language ? language.substr(0, 10) : '';
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

// age가 들어왓는지 안들어왔는지 확실할 수 없다.
function getText(name: string, language?: string, age:number) : string


// 가독성이 좋지 않고, undefined를 넣어주기 때문에, 인자의 갯수가 많다 => 비구조화 할당으로 빼써 쓰자!
function getText(name: string, language: string || undefined, age:number) : string
getText('mike', undefined, 123)


getText('mike', 23, 'ko');
getText('mike', 23, );
getText('mike', 23, 123);
