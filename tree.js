class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(currNode,newNode){
        if(currNode.left === null){
            currNode.left = newNode;
        }
        else if(currNode.right === null){
            currNode.right = newNode;
        }
        else{
            this.insertNode(currNode.left,newNode);
        }
    }

    preOrderTraversal(node = this.root){
        if(node === null) return;
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }
    inOrderTraversal(node = this.root){
        if(node === null) return;
        this.preOrderTraversal(node.left);
        console.log(node.value);
        this.preOrderTraversal(node.right);
    }
    postOrderTraversal(node = this.root){
        if(node === null) return;
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
        console.log(node.value);
    }
}

let tree = new BinaryTree();

tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(9);

// tree.preOrderTraversal();
// tree.postOrderTraversal();
// tree.inOrderTraversal();
