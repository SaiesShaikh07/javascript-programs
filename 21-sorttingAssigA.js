const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(` ------------------------- [ 1 ] --------------------------- `);
let arrayOfReverse=arrayRollNumbers.reverse()
console.log(`The reverse array is = [${arrayOfReverse}]`);
console.log(" ");


console.log(` ------------------------- [ 2 ] --------------------------- `);
let sorting=arrayRollNumbers.sort();
console.log(`The sorted array with issue is [${sorting}]`);
console.log(" ");

console.log(` ------------------------- [ 3 ] --------------------------- `);
const arrayAscend = arrayRollNumbers.sort( (n1, n2)=>{
    return n1>n2 ? 1 : -1; 
});
console.log(`The scending order (custom logic) = [${arrayAscend}]`);
console.log(" ");

console.log(` ------------------------- [ 4 ] --------------------------- `);
const greatest=arrayRollNumbers.reduce((max,current)=>
   current > max ? current : max );
console.log(`The Greatest number from array is = ${greatest}`);
console.log(" ");

console.log(` ------------------------- [ 5 ] --------------------------- `);
const smallest=arrayRollNumbers.reduce((min,current)=>
   current < min ? current : min );
console.log(`The smallest number from array is = ${smallest}`);
console.log(" ");

console.log(` ------------------------- [ 6 ] --------------------------- `);
let unique =[];
for (let i = 0; i < arrayRollNumbers.length; i++) {
   let element=arrayRollNumbers[i];
   if (unique.indexOf(element) == -1) {
      unique.push(element);
   }
   
}
console.log(`After removal of Duplicate element = [${unique}]`);
