import {Action, ActionNewTodo, AppState, Priority, PRIORITY_NAME_MAP} from "./type";
import {waitForInput} from "./input";
import {getIsValidEnumValue} from "./util";

export abstract class Command {
    constructor(public key: string, private desc: string) {
    }

    toString() {
        return `${this.key} : ${this.desc}`;
    }

    // abstract에는 더이상 async가 붙질 못한다.
    abstract run(state: AppState): Promise<void | Action>;
}

export class CommandPrintTodos extends Command {
    constructor() {
        super('p', '모든 할 일 출력하기');
    }

    async run(state: AppState): Promise<void> {
        for (const todo of state.todos) {
            const text = todo.toString();
            console.log(text);
        }

        await waitForInput('press any key:')
    }
}

export class CommandNewTodo extends Command {
    constructor() {
        super('n', '할일 추가하기');
    }

    async run(): Promise<void | ActionNewTodo> {
        const title = await waitForInput("title : ");
        // priority 높음(0) ~ 낮음(2)
        const priorityStr = await waitForInput(`priority ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}) ~ ${PRIORITY_NAME_MAP[Priority.Low]}(${Priority.Low})`);
        const priority = Number(priorityStr);
        if (title && CommandNewTodo.getIsPriority(priority)) {
            // TODO를 추가하는 것은 앱의 상태를 변경하는것 => index 쪽에서 통합하는것이 좋다
            // 앱의 상태를 어떻게 바꿔야하는지만 설명을 해주고 인덱스쪽에서 직접 수정하는게 추천
            return {
                type: 'newTodo',
                title,
                priority
            }

        }
        await waitForInput('press any key:')
    }

    static getIsPriority(priority: number): priority is Priority {
        return getIsValidEnumValue(Priority, priority);
    }
}
