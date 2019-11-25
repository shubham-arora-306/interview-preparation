//set if a way of storing unique values

const set1 = new Set();

var obj1 = {name: 'shubahm1'}

set1.add(obj1)
// it stores the values
console.log(set1.has(obj1))

console.log(set1)

// weakset is a weak way to store data, it only hold refernces not the values
const weakset1 = new WeakSet()

var obj = {name: 'shubahm'}

weakset1.add(obj)
// it only contains refernces
console.log(weakset1.has(obj))

console.log(weakset1)

// weakset1.delete(obj1)