console.log("============== Q1. Length of string  =================");
const  str1="Hello,world";
console.log(`The length of string "${ str1}" is ${ str1.length} `);
console.log(" ");
const str2="Javascript is the language of Internet";
console.log(`The length of string "${str2}" is ${str2.length}`);
console.log(" ");

console.log("==================== Q2. print last char of given string ========================");
function getLastChar(str) {
    return str.charAt(str.length-1);
}
str3="Hey,my friend, Programming Language";
console.log(`The last character of the string  "${str3}" is *${getFirstChar(str3)}* `);
console.log(" ");

str4="I am learning logical programs";
console.log(`The last character of the string  "${str4}" is *${getFirstChar(str4)}* `);
console.log(" ");

str5="Angular";
console.log(`The last character of the string  "${str5}" is *${getFirstChar(str5)}* `);
console.log(" ");

console.log("==================== Q3. print First char of given string ========================");
function getFirstChar(str) {
    return str.charAt(0);
}
const str6="React";
const str7="Elon Musk";
const str8="Apple founder is Stew Job";

console.log(`The first character of the string  "${str6}" is *${getFirstChar(str6)}* `);
console.log(" ");
console.log(`The first character of the string  "${str7}" is *${getFirstChar(str7)}* `);
console.log(" ");
console.log(`The first character of the string  "${str8}" is *${getFirstChar(str8)}* `);
console.log(" ");

console.log("==================== Q4. contains UI  ========================");
function containsUI(str) {
    return str.includes("UI");
}

str9="React - UI Developer";
console.log(`Is string "${str9}" contains "UI" = ${containsUI(str9)} `);
console.log(" ");

const str10="UI Developer";
console.log(`Is string "${ str10}" contains "UI" = ${containsUI( str10)} `);
console.log(" ");

const str11="Front end and backend technologies";
console.log(`Is string "${ str11}" contains "UI" = ${containsUI( str11)} `);
console.log(" ");

console.log("==================== Q5.substring of given string ========================");
function separator(str,delimiter) {
    return str.split(delimiter);
}

const str12="apple,orange,banana";
const result=separator(str12,',');
console.log(`array of substring from "${str12}" is `,result);
console.log(" ");

const str13="Stew,Bill,Jenny,Elon";
const result2=separator( str13,',');
console.log(`array of substring from "${str13}" is `,result2);
console.log(" ");

console.log("==================== Q6.Reverse string ========================");
console.log(" ");
console.log("-------- Step1.using inbuilt methods ----------");

function reverseStringUsingMethods(str) {
    return str.split('').reverse().join('');
}

const str14="Software";
console.log(`Reversed string of string {${str14}} is "${reverseStringUsingMethods(str14)}"`);
console.log(" ");
const str15="UI Developer";
console.log(`Reversed string of string {${str15}} is "${reverseStringUsingMethods(str15)}"`);

console.log(" ");
console.log("-------- Step2.without using inbuilt methods ----------");
function reverseStringManually(str) {
    let reversedStr = '';

    for (let i= str.length - 1; i>= 0; i--) {
    reversedStr += str[i];
    }
return reversedStr;  
}
const str16="Web Developer";
console.log(`Reversed string of string {${str16}} is "${reverseStringManually(str16)}"`);
console.log(" ");

const str17="Billion Dollar";
console.log(`Reversed string of string {${str17}} is "${reverseStringManually(str17)}"`);
console.log(" ");

const str18="Java";
console.log(`Reversed string of string {${str18}} is "${reverseStringManually(str18)}"`);
console.log(" ")