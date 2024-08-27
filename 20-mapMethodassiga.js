const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];

console.log("[------------------------ [ 1 ] -------------------------]");
const arrayAdd = arrayNumber.map((element)=>{
    return element+10;
});
console.log(`Add 10 in each element = [${arrayAdd}]`);
console.log(" ");

console.log("[------------------------ [ 2 ] -------------------------]");
const arraySquare = arrayNumber.map((element)=>{
    return element*element*element;
});
console.log(`Cube each element =  [${arraySquare}]`);
console.log(" ");

console.log("[------------------------ [ 3 ] -------------------------]");
const arrayIdxAdd = arrayNumber.map((element,index)=>{
    return element+index;
});
console.log(`Index + Element = [${arrayIdxAdd}]`);
console.log(" ");