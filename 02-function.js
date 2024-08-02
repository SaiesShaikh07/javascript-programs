console.log("-------------function with no argument with no return value-------------");

function show(){
console.log("Inside show function");
}

show(); //function call or invoke

console.log("-------------function with argument with no return value-------------");
function multiple(n1,n2){
console.log("Given number are ",n1,n2);
var result=n1*n2;
console.log("Result is : ",result);
}
multiple(8,9);
multiple(10);

console.log("-------------function with no argument with  return value-------------");

function demo(){
    console.log("inside the demo block");
    return "good morning";
}
var re=demo();
console.log(re);


function square (num) {
    console.log("Give number of square is :",num);
    var result=num*num;
    return result;
}
var returnValue=square(5);
console.log("square is:",returnValue);