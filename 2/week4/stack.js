class Stack {
    constructor() {
        this.myList = [];
    }

    isEmpty() {
        return this.myList.length == 0;
    }
    
    push(value) {
        this.myList.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "";
        }
        return this.myList.pop();
    }

    peek() {
        return this.myList[this.myList.length - 1];
    }

    stackDisplay() {
        let result = [];
        for(let i = this.myList.length - 1;i >= 0; i--) {
            result.push(this.myList[i]);
        }
    return result;
    }
}

let ex = document.getElementById("expression");
let lblR = document.getElementById("result");

function dataPostfix() {
    let str = "";
    str = ex.value;
    let output = infixToPostfix(str);
    console.log(output);
    lblR.innerHTML = output;
}

function infixToPostfix(str) {
    let output = "";
    let ch;
    let mystack = new Stack();
    console.log("str = ",str);
    for(let i=0; i<str.length; i++) {
        ch = str.charAt(i);
        console.log("ch = ",ch);
        if (ch == "("){
            mystack.push(ch);
            console.log("--- List of stack 1 ---");
            mystack.stackDisplay();
        }
        else if(checkOperator(ch)) {
            while(!mystack.isEmpty() && checkPriority(mystack.peek()) >= checkPriority(ch)) {
                output = output + mystack.pop();
            }
            mystack.push(ch);
            console.log("--- List of stack 2 ---");
            mystack.stackDisplay();
        }
        else if(ch == ")") {
            while(!mystack.isEmpty() && mystack.peek() != "(") {
                output = output + mystack.pop();
            }
            mystack.pop();
            console.log("--- List of stack 3 ---");
            mystack.stackDisplay();
        }
        else {
            output = output + ch;
            console.log("output",output);
        }
    }
    while(!mystack.isEmpty()) {
        output = output + mystack.pop();
    }
    return output;
}

function checkOperator(c) {
    if(c == "+" || c == "-" || c == "*" || c == "/"|| c == "^") {
        return true;
    }
    else {
        return false;
    }
}

function checkPriority(c) {
    if(c == "+" || c == "-") {
        return 1;
    }
    else if(c == "*" || c == "/") {
        return 2;
    }
    else if(c == "^") {
        return 3;
    }
    else {
        return 0;
    }
}
// let mystack = new Stack();

// console.log(mystack.isEmpty());
// mystack.push("a");
// mystack.push("b");
// mystack.push("c");
// mystack.push("d");
// console.log(mystack);
// console.log(mystack.isEmpty());
// console.log(mystack.peek());
// console.log(mystack.myList.length);
// console.log(mystack.stackDisplay());