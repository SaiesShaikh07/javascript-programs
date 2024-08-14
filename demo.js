const array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`======================== 6.Find all the even positioned elements from array Numbers, sum it and log on console  ==============================`);
var add=0;
for (let index = 0; index < array.length; index++) {
  if (index%2==0) {
    const element = array[index];
    add=add+element;

  }
  
}
console.log(`Even positioned elements addition is = `,add);

console.log("                                                            ");

console.log(`======================== 7.Find all the odd positioned elements from array Numbers, sum it and log on console  ==============================`);
var add=0;
for (let index = 0; index < array.length; index++) {
  if (index%2==1) {
    const element = array[index];
    add=add+element;

  }
  
}
console.log(`Odd positioned elements addition is = `,add);
console.log("                                                            ");

console.log(`======================== 8. Find the sum of all elements from arrayNumbers, log on console  ==============================`);
let sum=0;
for (const element of array) {
  sum=sum+element;
}
console.log("Sum of all elements from array = ",sum);
console.log("                                                            ");
