const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("------------------------ [ 1 ] ------------------------");

arrayNumber.forEach((element,index)=>{
    console.log(`The index is [${index}] & The Element is [${element}]`);

});

console.log("------------------------ [ 2 ] ------------------------");
let positive=[];
arrayNumber.forEach((element)=>{
    if (element>=0) {
        positive.push(element);
        
    }
});

console.log(`The positive element in array [${arrayNumber}] is = [${positive}]`);

console.log("------------------------ [ 3 ] ------------------------");
let newArray=[];
arrayNumber.forEach((element)=>{
    if (element<0) {
        newArray.push(element)
    }
});
console.log(`The Negative element in array [${arrayNumber}] is = [${newArray}]`);

console.log("------------------------ [ 4 ] ------------------------");
let evenNo=[];
arrayNumber.forEach((element)=>{
    if (element%2==0) {
        evenNo.push(element);
    }

});
console.log(`The Even number in array [${arrayNumber}] is = [${evenNo}]`);

console.log("------------------------ [ 5 ] ------------------------");
let sum=0;
arrayNumber.forEach((element)=>{
    sum = sum+element;
    
});
console.log(`The Sum of all elements in array is = "${sum}"`);

console.log("------------------------ [ 6 ] ------------------------");
arrayNumber.forEach((element,index)=>{
    if (index%2==0) {
        console.log(`The even index '${index}' & corresponding element is '${element}'`);
        
    }
    
});
