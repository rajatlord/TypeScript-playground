
// hashmap creation 
// let map = new Map<KeyType, ValueType>();

// exmaple
let map = new Map<String, number>();

// inset
map.set("apple", 10);
map.set("banana", 20);
map.set("orange", 30);
// get 
console.log(map.get("apple"));

// check if key exists
console.log(map.has("apple"));

// delete 
console.log(map.delete("orange"));
// console.log(map.has("orange"));

// clear entire hashmap
// console.log(map.clear());

// for (let entry of map.entries()) {
//   console.log(entry); 
//   // [key, value]
// }


// iterate over map
// Using for...of
for(let [key,value] of map){
    console.log(key,value);
}

// Keys Only
for(let key of map.keys()){
    console.log(key);
}

// value Only
for(let value of map.values()){
    console.log(value);
}

// 8. Convert Map → Array
let arr = Array.from(map);
console.log(arr);

// initialize with values
let map2 = new Map<string, number>([
  ["apple", 10],
  ["banana", 20]
]);