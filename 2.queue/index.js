class Queue {
  constructor() {
    this.queue = [];
  }

  // adds data at the end
  enqueue(data) {
    this.queue.push(data);
  }

  // removes a data from front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // is queue empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // returns front Element (element that can be removed)
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  // length of queue
  size() {
    return this.queue.length;
  }

  // deletes elements of queue
  clear() {
    this.queue = [];
  }

  // print elements of queue
  print() {
    let str = "";
    for (let index = 0; index < this.queue.length; index++) {
      str += this.queue[index] + "\n";
    }
    return str;
  }
}

// ** USAGE
let myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.dequeue();
console.log(myQueue.print());
