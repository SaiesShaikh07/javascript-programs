const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`======================== 1. log first & last element on console ==============================`);
console.log(`first Element : `, fruits[0] +` & last element : `, fruits[fruits.length-1]);
console.log("                                                            ");

console.log(`======================== 2.adding papaya before banana ==============================`);
fruits.unshift("Papaya");
console.log(`Result after papaya added = `,fruits);
console.log("                                                            ");

console.log(`======================== 3.removing mango from array ==============================`);
let after=fruits.splice(4,1);
console.log(`After removing Mango from array = `,fruits);
console.log("                                                            ");

console.log(`======================== 4.inserting Pineapple at last position ==============================`);
fruits.push(`Pineapple`);
console.log(`After Adding Pineapple at end = `,fruits);
console.log("                                                            ");

console.log(`======================== 5.Insert an element - 'Dragon Fruit' before "Water Melon"==============================`);
fruits.splice(4,0,"Dragon Fruit");
console.log(fruits);
console.log("                                                            ");

console.log(`======================== 6.Replace an element 'Orange' with 'Kiwi'==============================`);
fruits.splice(2,1,'Kiwi');
console.log(fruits);
console.log("                                                            ");

console.log(`======================== 7.Log the elements starting from index 1 to 4 ==============================`);
let Result=fruits.slice(1,5);
console.log(Result);
console.log("                                                            ");


console.log(`======================== 8.Only select last 3 element and log on console: Use the length property ==============================`);
var result=fruits.slice(fruits.length-3);
console.log(` last 3 element`,result);
console.log("                                                            ");