class Queue {
    constructor() {
        this.myList = [];
    }
    isEmpty() {
        return this.myList.length == 0;
    }
    enqueue(value) {
        this.myList.push(value);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.myList.shift();
    }
    rear() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.myList[this.myList.length - 1];
    }
    display() {
        const displayElement = document.getElementById('queueDisplay');
        displayElement.innerHTML = this.myList.length ? 
            this.myList.join(' <- ') : 'Queue is empty';
    }
}

let myQueue = new Queue();

function enqueueItem() {
    const input = document.getElementById('queueInput');
    const message = document.getElementById('message');
    if (input.value) {
        myQueue.enqueue(input.value);
        myQueue.display();
        message.textContent = `Enqueued: ${input.value}`;
        input.value = '';
    }
}

function dequeueItem() {
    const message = document.getElementById('message');
    const item = myQueue.dequeue();
    myQueue.display();
    message.textContent = item === "Queue is empty" ? item : `Dequeued: ${item}`;
}

function showRear() {
    const message = document.getElementById('message');
    const rear = myQueue.rear();
    message.textContent = `Rear: ${rear}`;
}