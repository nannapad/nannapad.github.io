let hashTable = {
    10 : "ten",
    20 : "twenty",
    30 : "thirty"
}

// console.log("Value is", hashTable[30]);

let hashTable2 = {};
hashTable2["name"] = "Alice";
hashTable2["age"] = 25;
hashTable2["city"] = "Bangkok";

console.log("My name is", hashTable2["name"]);
console.log("I am", hashTable2["age"], "years old");
console.log("I live in", hashTable2["city"]);

let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
map.set("city", "Bangkok");

console.log("My name is", map.get("name"));
console.log("I am", map.get("age"), "years old");
console.log("I live in", map.get("city"));
