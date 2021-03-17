import {AppState} from "./type";
import {waitForInput} from "./input";

export abstract class Command {
    constructor(public key: string, private desc: string){
    }
    toString(){
        return `${this.key} : ${this.desc}`;
    }

    // abstract에는 더이상 async가 붙질 못한다.
    abstract run(state: AppState): Promise<void>;
}

export class CommandPrintTodos extends Command {
    constructor() {
        super('p', '모든 할 일 출력하기');
    }

    async run (state: AppState) : Promise<void> {
        for(const  todo of state.todos){
            const text = todo.toString();
            console.log(text);
        }

        await waitForInput('press any key:')
    }

}
