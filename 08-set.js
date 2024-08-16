
let mySet = new Set(); 
mySet.add(10);
mySet.add(50);
mySet.add(20);
mySet.add(50);
mySet.add(20);
console.log(mySet);

console.log(mySet.size);
mySet.delete(20);

console.log(mySet);

console.log(mySet.has(100));
console.log(mySet.has(10));

console.log(`=======================`);
for (const element of mySet) {
    console.log(element);
}

console.log(`====== Remove duplicate elements from array =======`);
let array = [10, 20, 30, 20, 80, 30, 10];
let arrayNew = [...new Set(array)];
console.log(arrayNew);