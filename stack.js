// Q - Implement stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    //Add element
    push(element) {
        this.items.push(element);
    }

    //remove element

    pop(element) {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.items.pop(element);
    }

    //see the top element
    peek() {
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size of stack
    size() {
        return this.items.length;
    }
}

const stackObj = new Stack();

stackObj.push(10);
stackObj.push(20);
stackObj.push(30);

console.log(stackObj.peek()); // 30
console.log(stackObj.pop()); // 30
console.log(stackObj.peek()); // 20
console.log(stackObj.size()); // 2
console.log(stackObj.isEmpty()); // false
