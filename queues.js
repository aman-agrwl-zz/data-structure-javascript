class Queue {
  constructor() {
    this.container = [];
  }

  enqueue(data) {
    this.container.push(data);
  }

  dequeue() {
    return this.container.shift();
  }

  print() {
    var str = "";
    for (var i = 0; i < this.container.length;i++) {
      str+=this.container[i] + " ";
    }
    return str;
  }
}

let myQueue = new Queue();

//insert items into the queue
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.dequeue();
//print the queue (I'll discuss this function in detail later in this lesson)
console.log("Your queue is:\n"+myQueue.print());
