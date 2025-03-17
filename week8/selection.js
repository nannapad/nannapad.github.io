class Sort {
    selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log("Round No : ", i + 1, arr);
        }
        return arr;
    }

    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    merge(left, right) {
        const sortedArr = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
        }
        return sortedArr.concat(left.slice(i), right.slice(j));
    }

    display(arr){
        let str = "";
        for(let i = 0; i < arr.length; i++){
            str += arr[i] + " ";
        }
        return str;
    }
}   

let mySort = new Sort();
let data = [29, 10, 14, 37, 13];
console.log("---Selection Sort---");
console.log("Before Sort: ", data);
let selectionSort = mySort.selectionSort(data);
console.log("After Sort: ", selectionSort);

let data2 = [64, 34, 25, 12, 22, 11, 90];
console.log("---Mearge Sort---");
console.log("Before Sort: ", data2);
let mergeSort = mySort.mergeSort(data2);
console.log("After Sort: ", mergeSort);