class Stack {
  //  creates object for stack
  constructor() {
    this.stack = [];
  }

  //   adds element at end of the stack
  push(element) {
    this.stack.push(element);
  }

  //   removes element from end of stack
  pop() {
    if (this.stack.isEmpty()) {
      return "stack is Empty";
    }
    return this.stack.pop();
  }

  //   gives top element of the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  //   gives length of stack
  size() {
    return this.stack.length;
  }

  //  is the stack empty or not
  isEmpty() {
    return this.stack.length == 0;
  }

  //   removes all elements of stack
  clear() {
    this.stack = [];
  }

  //   check if the element is present in stack
  contains(element) {
    this.stack.includes(element);
  }

  //   reverses the elements of stack
  reverse() {
    return this.stack.reverse();
  }

  //   print elements of stack
  print() {
    let str = "";
    for (let index = 0; index < this.stack.length; index++) {
      str += this.stack[index] + "\n";
    }
    return str;
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.pop();
console.log(myStack.print());
