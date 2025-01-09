class Node{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        var newNode=new Node();
        if(!this.first){
            this.first=newNode;
            this.last=newNode;

        }
        else{
            var temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        return++this.size;
    }
        
    
}
var stack=new Stack();
stack.push(10);
stack.push(20);
console.log(stack);
