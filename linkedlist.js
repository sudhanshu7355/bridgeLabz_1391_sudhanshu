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
//push node to the last of the linkedlist
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
//remove node from this last of the linked list
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

       
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    //remove node from the begining of the linked list
    shift(){
        if(!this.head) return undefined;
        let current=this.head;
        this.head=current.next;
        this.length--;
    
    if(this.length===0){
        this.head=null;
        this.tail=null;
    }
    return current;
    }
    //push node to the begining of the linked list
    beginpush(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
        return this;

    }
    //get at index
    getat(index){
        if(index<0 || index>=this.length){
            return null;
        }
        let counter=0;
        let current=this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }
        return current;
    }
    //set node at index updates the existing value
    set(index,val){
        let foundNode=this.getat(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        else{
            return false;
        }
    }
    mid(){
        let slow=this.head;
        let fast=this.head;
        while(fast.next!==null && fast.next.next!=null){// for even and odd
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;

    }
    getNodeAt(index) {
        if (index < 0 || index >= this.length) return null; 
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    // reverse a linked list
    reverse() {
        let li = 0; 
        let ri = this.length - 1; 
    
        while (li < ri) {
            let left = this.getNodeAt(li);
            let right = this.getNodeAt(ri);
    
            
            let temp = left.val; 
            left.val = right.val; 
            right.val = temp; 
    
            li++;
            ri--;
        }
    
        return this;
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
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

// list.pop();
// list.shift();
// list.beginpush(200);
// let ans=list.getat(2);
// let ans=list.set(2,200);
// let ans2=list.getat(2);
// let ans=list.mid();
let ans=list.reverse();
console.log(ans);