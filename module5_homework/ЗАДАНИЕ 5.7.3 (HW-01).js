let myMap = new Map();
myMap.set("key", "prop");
myMap.set(1, "prop2");
myMap.set(true, 123);
console.log(myMap.size) //аналог .length для массивов.
console.log(myMap.get("key"))
console.log(myMap.get(1))
console.log(myMap.get(true))