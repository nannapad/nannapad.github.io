const n = document.getElementById("num");
const out = document.getElementById("result");
let data = [];

function pushData() {
    let num = parseInt(n.value);
    data.push(num);
    out.innerHTML = "";
    for(let item of data) {
        out.innerHTML = out.innerHTML + item + "<br>";
    };
    console.log(data);
    console.log(typeof(num));
};

function popData() {
    out.innerHTML = "";
    let remove = data.pop();
    out.innerHTML = "Data to remove : " + remove + "<br>";
    for(let item of data) {
        out.innerHTML = out.innerHTML + item + "<br>";
    };
};

function summation() {
    let sum = 0;
    out.innerHTML = "";
    for(let item of data) {
        out.innerHTML = out.innerHTML + item + "<br>";
        sum = sum + item;
    };
    out.innerHTML = out.innerHTML + "sum : " + sum;
};

// console.log("--- Array define number");
// let cars = ["Toyota", "Honda", "BMW"];
// console.log(cars);

// console.log("--- Array no define number");
// let score = [];
// console.log(score)

// score[0] = 79;
// score[1] = 80;
// score[2] = 25;
// console.log(score);

// console.log(cars[0]);
// console.log(cars[2]);

// console.log("--- length property ---");
// console.log(cars.length);

// console.log("--- for loop ---")
// for(let i = 0 ; i < cars.length; i++) {
//     console.log(i,cars[i]);
// }

// console.log("--- for of ---");
// for(let car of cars) {
//     console.log(car);
// }

// console.log("--- for in ---");
// for(let i in cars) {
//     console.log(i, cars[i]);
// }

// console.log("--- push method ---");
// cars.push("Volvo");
// console.log(cars);

// let remove = cars.pop();
// console.log
