console.log(`------------------------ [ Palindrome logic ] ---------------------`);
console.log(" ");
function isPalindrome(str) {
    let firstString = str.toLowerCase();

    let nextString = firstString.split('').reverse().join('') ;

    return firstString === nextString;
}
const result="madam";
console.log(`Is this String "${result}" is Palindrome = ${isPalindrome(result)}`);
console.log(" ");

const result2="dad";
console.log(`Is this String "${result2}" is Palindrome = ${isPalindrome(result2)}`);
console.log(" ");

const result3="hello";
console.log(`Is this String "${result3}" is Palindrome = ${isPalindrome(result3)}`);
console.log(" ");

console.log(`------------------------ [ Anagram logic ] ---------------------`);
console.log(" ");
function isAnagram(str1,str2) {
    function cleanString(str) {
        return str.toLowerCase().split('').sort().join('');
    }

    return cleanString(str1) === cleanString(str2);
}
let str1="Silent";
let str2="Listen";
console.log(`Is this Strings "${str1}" , "${str2}" are Anagram = ${isAnagram(str1,str2)}`);
console.log(" ");


let str3="Hello" ;
let str4="World";
console.log(`Is this Strings "${str3}" , "${str4}" are Anagram = ${isAnagram(str3,str4)}`);
console.log(" ");

let str5="Such";
let str6="much";
console.log(`Is this Strings "${str5}" , "${str6}" are Anagram = ${isAnagram(str5,str6)}`);
console.log(" ");