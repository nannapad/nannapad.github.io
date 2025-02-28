class Node{
    constructor(elem){
        this.element = elem;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.firstNode){
            return undefined;
        }
        let currentNode = this.firstNode;
        let beforeNode = this.firstNode;
        while(currentNode.next){
            console.log("currentNode -- " + currentNode);
            console.log("currentNode.next -- " + currentNode.next);
            beforeNode = currentNode;
            currentNode = currentNode.next;
        }
        this.lastNode = beforeNode;
        this.lastNode.next = null;
        this.length--;
        if(this.length === 0){
            this.firstNode = null;
            this.lastNode = null;
        }
        return currentNode;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }else{
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.firstNode){
            return undefined;
        }
        let currentNode = this.firstNode;
        this.firstNode = this.firstNode.next;
        currentNode.next = null;
        this.length--;
        if(this.length === 0){
            this.lastNode = null;
        }
        return currentNode;
    }

    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.element = value;
            return true;
        }
        return false;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let currentNode = this.firstNode;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(index, value){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.length){
            return this.push(value);
        }
        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length - 1){
            return this.pop();
        }
        const beforeNode = this.get(index - 1);
        const currentNode = beforeNode.next;
        beforeNode.next = currentNode.next;
        currentNode.next = null;
        this.length--;
        return currentNode;
    }

    displayLinkedList(){
        let temp = this.firstNode;
        let r = document.getElementById("result");
        r.innerHTML = "";
        for(let i = 0; i < this.length; i++){
            let data = this.get(i);
            r.innerHTML = r.innerHTML + data.element + " ";
            if(i != this.length - 1){
                r.innerHTML = r.innerHTML + "==> ";
            }
        }
    }
}
let d = document.getElementById("data");
let r = document.getElementById("result");
let myList = new LinkedList();
// myList.push("a");
// myList.push("b");
// myList.push("c");

// myList.pop();

console.log(myList);

function pushData(){
    myList.push(d.value);
    console.log(myList);
    myList.displayLinkedList();
    d.value = "";
}

function unshiftData(){
    myList.unshift(d.value);
    console.log(myList);
    myList.displayLinkedList();
    d.value = "";
}

function displayData(){
    myList.displayLinkedList();
}

function getData(){
    let index = parseInt(d.value);
    let data = myList.get(index);
    if(data == undefined){
        r.innerHTML = "Index out of Bounds";
    }
    else{
        myList.displayLinkedList();
        r.innerHTML = r.innerHTML+"<br>Data in index at "+index+" is "+data.element;
    }
}