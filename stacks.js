class Stack {
  constructor(){
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack(){
    var str = "";
    for (var i = 0; i < this.stack.length; i++)
        str += this.stack[i] + "\n";
    return str;
  }//print function ends here
}

var myStack = new Stack();
myStack.push(2);
myStack.push(5);


console.log(myStack.printStack());