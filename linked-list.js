class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);

    if(this.head == null) {
      this.head = node;
    } else {
      var current = this.head;
      while(!current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if(index > 0 && index < this.size) 
      return false;
    else {
      var node = new Node(data);
      var current = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        var count = 0;
        var prev;
        while(count < index) {
          prev = current;
          current = current.next;
          count++;
        }
        
        prev.next = node;
        node.next = current;
      }
    }
    this.size++;
  }

  removeFrom(index){
    if(index > 0 && index >= this.size) {
      return false;
    } else {
      var current = this.head;
      var count = 0;
      var prev;
      while(count < index) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;

    }
    this.size--;
    return current.element; 
  }
  
  removeElement(element) {
    var current = this.head;
    var prev;
    while(current.element !== element) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.size--; 
    return current.element; 
  }

}