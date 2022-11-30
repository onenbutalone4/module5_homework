let mappingTest = new Map();
mappingTest.set(`key`, `value`);
mappingTest.set(1, `number`);
mappingTest.set(true, 123);
mappingTest.set(false, NaN);
console.log(mappingTest.size) //аналог .length для массивов.
console.log(mappingTest.get(`key`))
console.log(mappingTest.get(1))