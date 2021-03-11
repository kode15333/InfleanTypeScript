export {};

class Stack<D> {
    private items: D[] = [];

    push(item : D) {
        this.items.push(item);
    }
    pop(){
        return this.items.pop()
    }
}

const numberStack = new Stack<number>();
numberStack.push(33)
const stringStack = new Stack<string>();
stringStack.push('33');
stringStack.pop();

let myStack:Stack<number>;
myStack = numberStack;
myStack = stringStack;
