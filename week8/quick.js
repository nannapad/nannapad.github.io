class Sort{
    quickSort(arr){
        if(arr.length <= 1){
            return arr;
        }   
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const right = [];
        const equal = [];

        for(const num of arr){
            if(num < pivot){
                left.push(num);
            }else if(num > pivot){
                right.push(num);
            }else{
                equal.push(num);
            }
        }
        return [...this.quickSort(left), ...equal, ...this.quickSort(right)];
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
console.log("---Quick Sort---");
console.log("Before Sort: ", data);
let quickSort = mySort.quickSort(data);
console.log("After Sort: ", quickSort);