function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

const numbers = [10, 20, 30, 40, 50];
const target = 60;
const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log("found on position is ", result);
} else {
  console.log("not found", result);
}