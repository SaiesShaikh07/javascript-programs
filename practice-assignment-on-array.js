console.log("==============[Q1. Number of element in array ]============== ");
function numberOfElement(arr) {
    console.log("Number of element in array",arr.length);  
}
numberOfElement([1,2,3,4,5,6]);
console.log(" ");

console.log("==============[Q2. print the sum of all the items of the array ]============== ");
function calculateSum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];   
    }
    return sum;
}
console.log(`The sum of all element in array = ${calculateSum([1,2,3,4,5,6])}`);
console.log(" ");

console.log("==============[Q4. sort the elements of an array in ascending order ]============== ");
function sortTheArray(arr) {
   return arr.sort( (n1, n2)=>{
        return n1>n2 ? 1 : -1; 
    });
}
console.log(`Original Array is [4,8,5,3,2,7,1,9,3]`);
console.log(`The Array in ascending order = [${sortTheArray([4,8,5,3,2,7,1,9,3])}]`);
console.log(" ");

console.log("==============[Q5. sort the elements of an array in Descending order ]============== ");
function sortInDesc(arr) {
   return arr.sort( (n1, n2)=>{
        return n1>n2 ? -1 : 1; 
    });
}
console.log(`Original Array is [4,8,5,3,2,7,1,9,3]`);
console.log(`The Array in descending order = [${sortInDesc([4,8,5,3,2,7,1,9,3])}]`);
console.log(" ");

console.log("==============[Q6. find the 3rd largest number in an array ]============== ");
function Find3rdLargest(arr) {
    if (arr.length<3) {
        console.log("Array does not have enough element ");
         
    }
    const first = arr.sort( (n1, n2)=>{
        return n1>n2 ? -1 : 1;  
    });
    return first[2];
}

let array=[5,4,6,8,3,9,1,4];
console.log(`The third largest number in [${array}] is = "${Find3rdLargest(array)}"`);
console.log(" ");

console.log("==============[Q7. find the 2nd largest number in an array ]============== ");
function Find2ndLargest(arr) {
    if (arr.length<2) {
        console.log("Array does not have enough element ");
         
    } 
      const sec = arr.sort( (n1, n2)=>{
            return n1>n2 ? -1 : 1;  
        });
        
    return sec[1];

}

let array1=[5,7,1,8,4,9,3,2];
console.log(`The second largest number in [${array1}] is = "${Find2ndLargest(array1)}"`);
console.log(" ");

console.log("==============[Q8. find largest number in an array ]============== ");
function FindLargest(arr) {
    if (arr.length == 0) {
        console.log("Array is empty");
         
    } 
      const largest = arr.sort( (n1, n2)=>{
            return n1>n2 ? -1 : 1;  
        });
        
    return largest[0];

}

let array2=[5,8,3,6,9,2,7,4];
console.log(`The largest number in [${array2}] is = "${FindLargest(array2)}"`);
console.log(" ");

console.log("==============[Q9. find 2nd smallest number in an array ]============== ");
function Find2ndSmallest(arr) {
    if (arr.length == 0) {
        console.log("Array is empty");
         
    } 
      const smallest = arr.sort( (n1, n2)=>{
            return n1>n2 ? -1 : 1;  
        });
    return smallest[smallest.length-2];
}

let array3=[5,9,7,3,8,4,1,5,2];
console.log(`Second Smallest number in [${array3}] is = "${Find2ndSmallest(array3)}"`);
console.log(" ");

console.log("==============[Q10. find smallest number in an array ]============== ");
function FindSmallest(arr) {
    if (arr.length == 0) {
        console.log("Array is empty");
         
    } 
      const smallest = arr.sort( (n1, n2)=>{
            return n1>n2 ? -1 : 1;  
        });
    return smallest[smallest.length-1];
}

let array4=[4,7,3,6,9,2,8,5,1];
console.log(`Smallest number in [${array4}] is = "${FindSmallest(array4)}"`);
console.log(" ");

console.log("==============[Q11. removal of Duplicate element from array ]============== ");
function removal(arr) {
    let unique =[];
    for (let i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) == -1) {
                 unique.push(arr[i]);
        }
    }
    return unique;
}
let array5=[4,6,7,3,4,9,5,3,8,2,6];
console.log(`After removal of Duplicate element = [${removal(array5)}]`);
console.log(" ");

console.log("==============[Q12.print even and odd number from array ]============== ");
function printEvenOdd(arr) {
    let odd=[];
    let even=[];
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        } 
    }  
    console.log("Even numbers are = ",even);
    console.log("Odd number are  =",odd); 
}
printEvenOdd([4,6,2,5,8,1,9,3,7]);
console.log(" ");

console.log("==============[Q13. Program to copy all elements from one array into another array ]============== ");
let array6=[1,2,3,4,5];
let newArray=[...array6]
console.log("New array is =",newArray);
console.log(" ");

console.log("==============[Q14. program to find the frequency of each element in the array ]============== ");
let array7=[1,2,2,3,3,3,4,4,4,4];
let frequency={};
for (let i = 0; i < array7.length; i++) {
    const element = array7[i];
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element]=1;
    }
    
}
console.log("The frequency of each element in array is",frequency);
console.log(" ");

console.log("==============[Q16. Program to print the duplicate element of an array ]============== ");
function removalPrint(arr) {
    let unique =[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j] && !unique.includes(arr[i])) {
                unique.push(arr[i]);
            }
            
        } 
        
    }
    return unique;
}
    

let array8=[2,4,8,5,6,3,2,4,6,6];
console.log(` Duplicate element = [${removalPrint(array8)}]`);
console.log(" ");

console.log("==============[Q17. Program to print the elements of an array ]============ ");

function printElement (arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
console.log("Using forEach loop :");
printElement([1,2,3,4,5])
console.log(" ");

console.log("==============[Q18. Program to print the elements of an array in reverse order ]============ ");
function printElementInReverse(arr) {
    arr.slice().reverse().forEach(element => {
        console.log(element);
    });
}
console.log("Reverse element Using forEach loop :");
printElementInReverse([1,2,3,4,5])
console.log(" ");

console.log("==============[Q19.  Program to print the element of an array present on even position ]============ ");
function evenPositionElement(arr) {
    arr.forEach((element,index)=>{
        if (index%2==0) {
            console.log(`The even index '${index}' & corresponding element is '${element}'`);
            
        }
        
    });
}
evenPositionElement([1,6,3,9,4,2,6,3,9])
console.log(" ");

console.log("==============[Q20. Program to print the element of an array present on Odd position.]============ ");
function oddPositionElement(arr) {
    arr.forEach((element,index)=>{
        if (index%2==1) {
            console.log(`The odd index '${index}' & corresponding element is '${element}'`);
            
        }
        
    });
}
oddPositionElement([1,6,3,9,4,2,6,3,9]);
console.log(" ");