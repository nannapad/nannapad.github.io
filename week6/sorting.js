function getInput() {
    const input = document.getElementById('numbers').value;
    return input.split(',').map(num => parseInt(num.trim()));
}

function displayResult(arr, algorithm) {
    document.getElementById('result').innerHTML = `
        <h3>${algorithm}</h3>
        <p>Sorted array: ${arr.join(', ')}</p>
    `;
}

function displayStep(step, arr, indices = []) {
    const stepsDiv = document.getElementById('steps');
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    
    const arrayStr = arr.map((num, idx) => 
        indices.includes(idx) ? `<span class="highlight">${num}</span>` : num
    ).join(', ');
    
    stepDiv.innerHTML = `<p><strong>Step:</strong> ${step}<br><strong>Array:</strong> [${arrayStr}]</p>`;
    stepsDiv.appendChild(stepDiv);
    stepsDiv.scrollTop = stepsDiv.scrollHeight;
}

function clearSteps() {
    document.getElementById('steps').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

async function bubbleSort() {
    clearSteps();
    let arr = getInput();
    let steps = 1;
    
    displayStep("Initial array", arr);
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                displayStep(`Compare ${arr[j]} > ${arr[j + 1]}, swapping`, arr, [j, j+1]);
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                displayStep(`After swap`, arr, [j, j+1]);
            } else {
                displayStep(`Compare ${arr[j]} ≤ ${arr[j + 1]}, no swap needed`, arr, [j, j+1]);
            }
            steps++;
        }
    }
    
    displayStep("Final sorted array", arr);
    document.getElementById('result').innerHTML = `<h3>Bubble Sort completed in ${steps} steps</h3>`;
}

async function selectionSort() {
    clearSteps();
    let arr = getInput();
    let steps = 1;
    
    displayStep("Initial array", arr);
    
    for(let i = 0; i < arr.length; i++) {
        let minIdx = i;
        displayStep(`Finding minimum element from index ${i}`, arr, [i]);
        
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
                displayStep(`New minimum found: ${arr[j]} at index ${j}`, arr, [i, j]);
            }
        }
        
        if(minIdx !== i) {
            displayStep(`Swapping ${arr[i]} with ${arr[minIdx]}`, arr, [i, minIdx]);
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            displayStep("After swap", arr, [i]);
        }
        steps++;
    }
    
    displayStep("Final sorted array", arr);
    document.getElementById('result').innerHTML = `<h3>Selection Sort completed in ${steps} steps</h3>`;
}

function insertionSort() {
    let arr = getInput();
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    displayResult(arr, 'Insertion Sort');
}

function quickSort() {
    let arr = getInput();
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for(let j = low; j < high; j++) {
            if(arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    function sort(arr, low, high) {
        if(low < high) {
            let pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    
    sort(arr, 0, arr.length - 1);
    displayResult(arr, 'Quick Sort');
}

function mergeSort() {
    let arr = getInput();
    
    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        
        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    
    function sort(arr) {
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = sort(arr.slice(0, mid));
        let right = sort(arr.slice(mid));
        return merge(left, right);
    }
    
    let sorted = sort(arr);
    displayResult(sorted, 'Merge Sort');
}
