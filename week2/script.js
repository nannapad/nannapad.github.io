function summary(n) {
    if (n <= 0) {
        return n;
    } else {
        return n + summary(n - 1);
    }
}

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function calculateSum() {
    const input = document.getElementById("num");
    const resultLabel = document.getElementById("result");
    const value = parseInt(input.value) || 0;
    resultLabel.textContent = summary(value);
}

function calculateFib() {
    const input = document.getElementById("num");
    const resultLabel = document.getElementById("result");
    const value = parseInt(input.value) || 0;
    resultLabel.textContent = fibonacci(value);
}