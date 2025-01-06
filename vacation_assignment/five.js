//detect loop
class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  
  push(val) {
      let newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  
  detectAndRemoveLoop() {
      let slow = this.head;
      let fast = this.head;

      
      while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
          if (slow === fast) {
              break;
          }
      }

      
      if (!fast || !fast.next) {
          return;
      }

      
      slow = this.head;
      while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
      }

      
      fast = slow;
      while (fast.next !== slow) {
          fast = fast.next;
      }
      fast.next = null;
  }

  traverse() {
      let curr = this.head;
      while (curr) {
          console.log(curr.val);
          curr = curr.next;
      }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.tail.next = list.head.next; 

list.detectAndRemoveLoop();

list.traverse(); 