console.log("************************* Operator assignment B *************************");

console.log("========================== 1 ============================");

function greaterNumber(n1,n2) {
    var result=n1>=n2 ? n1 : n2;
    console.log(`Given number are ${n1} and ${n2} greater number is = ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("========================== 2 ============================");

function isEvenOrOddNum(num) {
    var res=num%2==0 ? true : false;
    return res;
}
var result=isEvenOrOddNum(29);
console.log(`Is number "29" is  even = ${result} `);

var result=isEvenOrOddNum(44);
console.log(`Is number "44" is even = ${result} `);

var result=isEvenOrOddNum(0);
console.log(`Is  number "0" is even = ${result} `);

var result=isEvenOrOddNum(101);
console.log(`Is number "101" is  even = ${result} `);

console.log("========================== 3 ============================");

function wordLength(num) {
    var result=num.length;
    var check=result%2==0 ? "even" : "odd" ;
   return check;
    
   
   
    
}
var result=wordLength("javascript");
console.log(`The word "javascript" has ${result} length.` );

var result=wordLength("developer");
console.log(`The word "developer" has ${result} length.` );

var result=wordLength("Google");
console.log(`The word "Google" has ${result} length.` );


