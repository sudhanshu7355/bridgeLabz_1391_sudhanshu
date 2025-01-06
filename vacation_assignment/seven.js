//lowest common ancestor
class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }

  
  insert(val) {
      if (!this.root) {
          this.root = new Node(val);
      } else {
          this._insert(val, this.root);
      }
  }

  
  findLCA(node1, node2) {
      if (!this.root) {
          return null;
      }

      let curr = this.root;
      while (true) {
          if (node1.val < curr.val && node2.val < curr.val) {
              curr = curr.left;
          } else if (node1.val > curr.val && node2.val > curr.val) {
              curr = curr.right;
          } else {
              return curr;
          }
      }
  }

  
  _insert(val, node) {
      if (val < node.val) {
          if (!node.left) {
              node.left = new Node(val);
          } else {
              this._insert(val, node.left);
          }
      } else {
          if (!node.right) {
              node.right = new Node(val);
          } else {
              this._insert(val, node.right);
          }
      }
  }
}

var binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(51);
binaryTree.insert(6208);
binaryTree.insert(74);

var node1 = binaryTree.findNode(5);
var node2 = binaryTree.findNode(1);

var lca = binaryTree.findLCA(node1, node2);

console.log(lca.val); 