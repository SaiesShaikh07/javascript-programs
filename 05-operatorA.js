console.log("************************* Operator assignment A *************************");

console.log("========================== 1 ============================");
function squareOfWorldLength(sent) {
    console.log("given sentence is :",sent);
    var result=sent.split(" ");
   var len= result.length;
   var square=len*len;
   return square;
}
var result=squareOfWorldLength("Javascript");
console.log("square of world length is : ",result);

var result=squareOfWorldLength("Google Chrome");
console.log("square of world length is : ",result);

var result=squareOfWorldLength("web developer smart");
console.log("square of world length is : ",result);

console.log("========================== 2 ============================");
console.log("-------------------------- 2.1 -----------------------------");
function checkTheDivision(){
var sentence="I am Angular Developer";
var len=sentence.length;
console.log(`The length of sentence "I am Angular Developer" is = ${len} ` );
var afterSplit=sentence.split(" ").length;
var afterDivide=(len/afterSplit);
console.log("The result After the divide is = ",afterDivide);
console.log("-------------------------- 2.2 -----------------------------");
var afterMulti=len*afterSplit;

console.log("The result After the Multiplication is = ",afterMulti);
}
checkTheDivision();
