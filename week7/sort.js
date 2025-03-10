class Sort{
    bubbleSort(arr){
        let temp;
        let size = arr.length;
        for(let i = 0; i < size-1; i++){
            for(let j = 0; j < (size-i)-1; j++){
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }

    insertionSort(arr){
        let key, j;
        for(let i = 1; i < arr.length; i++){
            key = arr[i];
            j = i-1;
            while(j >= 0 && arr[j] > key){
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }
        return arr;
    }

    shellSort(arr){
        let gap = Math.floor(arr.length/2);
        let temp,j;
        while(gap > 0){
            for(let i = gap; i < arr.length; i++){
            temp = arr[i];
            j = i;
            while(j >= gap && arr[j-gap] > temp){
                arr[j] = arr[j-gap];
                j = j-gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap/2);
    }
    return arr;
    }

    display(arr){
        let str = "";
        for(let i = 0; i < arr.length; i++){
            str += arr[i]+" ";
        }
        return str;
    }
}

let mySort = new Sort();
let data = [9,7,4,5,1,3];
console.log("---Bubble Sort---");
console.log("Before Sort: "+data);
let bubbleSort = mySort.bubbleSort(data);
console.log("After Sort: "+bubbleSort);

let data2 =[12,11,13,5,6];
console.log("---Insertion Sort---");
console.log("Before Sort: "+data2);
let insertionSort = mySort.insertionSort(data2);
console.log("After Sort: "+insertionSort);

let data3 = [23,12,1,8,34,54,2,3];
console.log("---Shell Sort---");
console.log("Before Sort: "+data3);
let shellSort = mySort.shellSort(data3);
console.log("After Sort: "+shellSort);



