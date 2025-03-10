function binarySearch(arr, key){
    let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === key) {
                return mid;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
}

const numbers = [30, 20, 10, 50, 40];
numbers.sort((a, b) => a - b);
console.log(numbers);

const target = 40;
const result = binarySearch(numbers, target);

if (result !== -1) {
  console.log("found on position is ", result);
} else {
  console.log("not found", result);
}