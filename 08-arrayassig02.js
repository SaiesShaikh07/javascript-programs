const array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`======================== 1.Find the total elements available ==============================`);
console.log(`the total elements available = `, array.length);
console.log("                                                            ");

console.log(`======================== 2.Log the first element and last element in array ==============================`);
console.log(`first Element : `, array[0] +` & last element : `, array[array.length-1]);
console.log("                                                            ");

console.log(`======================== 3.Log the third last element using length property ==============================`);
var result=array.splice(array.length-3,1);
console.log(`the third last element =`,result);
console.log("                                                            ");

console.log(`======================== 4. Find the all even numbers using for of loop ==============================`);
const array1 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
for (const element of array1) {
    if (element%2==0) {
      console.log(`Even number in given array is =`,element); 
    }   
}
console.log("                                                            ");

console.log(`======================== 5. Find the odd numbers for of loop ==============================`);
const array2 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
for (const element of array1) {
    if (element%2==1) {
      console.log(`Odd number in given array is =`,element); 
    }   
}
console.log("                                                            ");

console.log(`************************ 6 , 7 , 8 ignore ************************ `);
console.log("                                                            ");

console.log(`======================== 9. Find the numbers which are multiple of 5 ==============================`);
const array3 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
for (const element of array1) {
    if (element%5==0) {
      console.log(`multiple of 5 in given array is =`,element); 
    }   
}
console.log("                                                            ");

console.log(`======================== 10.Is number 115 available in array3 ? ==============================`);
console.log(`Is number 115 available in array3 = `,array3.includes(115));
console.log("                                                            ");

console.log(`======================== 11.Is number 23 available in array3 ? ==============================`);
console.log(`Is number 23 available in array3 = `,array3.includes(23));
console.log("                                                            ");

console.log(`======================== 12.Insert numbers → 55, 66 at index 3 and log  ==============================`);
const array4 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
array4.splice(3,0,55,66);
console.log(`After inserting 55 & 66 at index 3 =`,array4);
console.log("                                                            ");

console.log(`======================== 13. Delete 3 elements starting from index 4 and log array on console  ==============================`);
const array5 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let ind=array5.splice(4,3);
console.log(`Deleted 3 elements starting from index 4 =`,ind);
console.log("                                                            ");



