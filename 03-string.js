var great="Good Morning";
console.log(great);

var greatLength=great.length;
console.log(greatLength);

var chat0=great.charAt(0);
console.log(chat0);


var char5=great.charAt(5);
console.log("Characters at index 5 : ",char5);

console.log("-------------lastindex------------");
var lastidex=great.charAt(great.length-1);
console.log(lastidex);

console.log("------------- upper case ------------");
var upperCaseString=great.toUpperCase();
console.log(upperCaseString);

console.log("============= concat() ===============");
var firstName = "Jenny";
var lastName = " Gates";
var concatString = firstName + lastName;
console.log("Concat string using + Operator:",concatString );
var result = firstName.concat(lastName);
console.log("Concat string using concat() :",result );

console.log("============= index of() ===============");
var result=great.indexOf("M");
console.log("Result is =",result);

var morn=great.replace("Morning","Afternoon");
console.log(morn);
