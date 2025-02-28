let data = [];

function addNumber() {
    let numInput = document.getElementById("num");
    let num = parseInt(numInput.value);

    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    data.push(num);
    numInput.value = "";
    displayNumbers();
}

function displayNumbers() {
    const numbersDiv = document.getElementById("numbers");
    numbersDiv.innerHTML = data.join(", ");
}

function calculateProducts() {
    if (data.length === 0) {
        alert("No numbers available to calculate.");
        return;
    }

    let evenProduct = 1, oddProduct = 1;
    let hasEven = false, hasOdd = false;

    for (let num of data) {
        if (num % 2 === 0) {
            evenProduct *= num;
            hasEven = true;
        } else {
            oddProduct *= num;
            hasOdd = true;
        }
    }

    let resultText = "";
    if (hasEven) {
        resultText += `Product of even numbers: ${evenProduct} <br>`;
    } else {
        resultText += `No even numbers found.<br>`;
    }

    if (hasOdd) {
        resultText += `Product of odd numbers: ${oddProduct}`;
    } else {
        resultText += `No odd numbers found.`;
    }

    document.getElementById("results").innerHTML = resultText;
}
