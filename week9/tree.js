class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            const minNode = this._findMin(node.right);
            node.value = minNode.value;
            node.right = this._deleteNode(node.right, minNode.value);
        }
        return node;
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) return false;
        if (value < node.value) return this._searchNode(node.left, value);
        if (value > node.value) return this._searchNode(node.right, value);
        return true;
    }

    inOrder() {
        this._inOrder(this.root);
    }

    _inOrder(node) {
        if (node !== null) {
            this._inOrder(node.left);
            console.log(node.value);
            this._inOrder(node.right);
        }
    }

    preOrder() {
        this._preOrder(this.root);
    }

    _preOrder(node) {
        if (node !== null) {
            console.log(node.value);
            this._preOrder(node.left);
            this._preOrder(node.right);
        }
    }

    postOrder() {
        this._postOrder(this.root);
    }

    _postOrder(node) {
        if (node !== null) {
            this._postOrder(node.left);
            this._postOrder(node.right);
            console.log(node.value);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Traversal: In-Order");
console.log(bst)
bst.inOrder();

console.log("Traversal: Pre-Order");
bst.preOrder();

console.log("Traversal: Post-Order");
bst.postOrder();
console.log(" NO.7 :",bst.search(7));
console.log(" NO.20 :",bst.search(20));

bst.delete(5);
console.log("Traversal: after delete 5")
bst.inOrder();