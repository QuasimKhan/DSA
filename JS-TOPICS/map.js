// map is like object in js which stores data in key value pair
// In js Object , key is always in string wither we put in number or string at the end it will save as a string but in map we can store key at any datatype (even array and object as key) it will remain same as we put  , means in object key 1 and key "1" treat same as "1" but in map key 1 and key "1" both are two different keys and it will refering different values

const { log } = require("node:console");

// Exam
const map = new Map();
map.set("1", "one in string");
map.set(1, "one in number");
for (const [key, value] of map) {
    log("Key - ", key, "Value - ", value);
}

// loop only keys
// for (const key of map.keys()) {
//     console.log(key);
// }

// loop only values
// for (const value of map.values()) {
//     console.log(value);
// }

// console.log(map.get("1")); // one in string
// console.log(map.get(1)); // one in number

//Operations and functions or methods we can perform on map
//set -> set(key,value) , is a method use to set the value to the map and ask for key and value respectively
//get --> get(key), is a method that gives the of the given key from the map , without any parameter it will return undefined

// console.log(map.has("1")); //it checks either it present or not, take key as argument not value
// console.log(map.delete(1)); //it delets the value and return true or false, ask for key without key false
// log(map.size); //number of entries is like arr.length
// map.clear(); //it will delete all the element from the map , and return undefined
// console.log(map);

// converting into array then loop

const arr = [...map];

console.log(arr); //[ [ '1', 'one in string' ], [ 1, 'one in number' ] ]

arr.forEach(([key, value]) => {
    console.log(key, value);
    //output
    // 1 one in string
    // 1 one in number
});
