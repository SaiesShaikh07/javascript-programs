console.log(`--------------------[ Q7. program to count Character 'a' &'A' ]---------------------`);
function countCharA(str) {
    let count=0;
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
        if (str[i]==='a') {
            count++;
        }
        
    }
    return count;
}
const str1="JavaScript";
console.log(`The count of 'a' & 'A' in *${str1}* is = ${countCharA(str1)}`);

const str2="Do or Die";
console.log(`The count of 'a' & 'A' in *${str2}* is = ${countCharA(str2)}`);

const str3="Learn with us, Job with us";
console.log(`The count of 'a' & 'A' in *${str3}* is = ${countCharA(str3)}`);

const str4="Empowering Dreams, Guaranteeing Futures";
console.log(`The count of 'a' & 'A' in *${str4}* is = ${countCharA(str4)}`);

const str5="Anny, My favorite fruit is Apple";
console.log(`The count of 'a' & 'A' in *${str5}* is = ${countCharA(str5)}`);
console.log(" ");



console.log(`--------------------[ Q8. program to count vowels in both upper & lower case ]---------------------`);
function vowelsCount(str) {
    let count=0;
    str =str.toLowerCase();
    const vowels='aeiou';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
        
    }

    return count;
}
const str6="Javascript";
console.log(`Vowels in the String ${str6} is = ${vowelsCount(str6)}`);

const str7="HTML and CSS";
console.log(`Vowels in the String ${str7} is = ${vowelsCount(str7)}`);

const str8= "Language Of Internet";
console.log(`Vowels in the String ${str8} is = ${vowelsCount(str8)}`);

const str9="I am UI Developer";
console.log(`Vowels in the String ${str9} is = ${vowelsCount(str9)}`);

const str10="Do or Die";
console.log(`Vowels in the String ${str10} is = ${vowelsCount(str10)}`);

console.log(`--------------------[ Q9. program to Split the string by spaces and count the words ]---------------------`);
function wordCount(str) {
   
    const words = str.trim().split(' ');
    return words.length;
}


const str11 = "JavaScript The language of Internet";
console.log(`Word count for: "${str11}" is ${wordCount(str11)}`);

const str12 = "Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`Word count for: "${str12}" is ${wordCount(str12)}`);

const str13 = "Beyond frameworks, Beyond Imagination";
console.log(`Word count for: "${str13}" is ${wordCount(str13)}`);

const str14 = "I am passionate software developer";
console.log(`Word count for: "${str14}" is ${wordCount(str14)}`);


console.log(`--------------------[ Q10. program to find duplicate character ]---------------------`);
function duplicateCharCount(str) {
    str = str.toLowerCase();
    let charCount = {};

    for (let char of str) {
        if (char >= 'a' && char <= 'z') { 
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

   
    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}

console.log(`The duplicate character in "Banana" with Count are: - `);
duplicateCharCount("Banana"); 
console.log(" ");

console.log(`The duplicate character in "Apple" with Count are: - `);
duplicateCharCount("Apple");
console.log(" ");

console.log(`The duplicate character in "Software Developer" with Count are: - `);
duplicateCharCount("Software Developer"); 
console.log(" ");

console.log(`------------------------ [ Q11. Palindrome logic ] ---------------------`);
console.log(" ");
function isPalindrome(str) {
    let firstString = str.toLowerCase();

    let nextString = firstString.split('').reverse().join('') ;

    return firstString === nextString;
}
const result="madam";
console.log(`Is this String "${result}" is Palindrome = ${isPalindrome(result)}`);
console.log(" ");

const result2="banana";
console.log(`Is this String "${result2}" is Palindrome = ${isPalindrome(result2)}`);
console.log(" ");

const result3="radar";
console.log(`Is this String "${result3}" is Palindrome = ${isPalindrome(result3)}`);
console.log(" ");

const result4="civil";
console.log(`Is this String "${result4}" is Palindrome = ${isPalindrome(result4)}`);
console.log(" ");

const result5="noon";
console.log(`Is this String "${result5}" is Palindrome = ${isPalindrome(result5)}`);
console.log(" ");

const result6="stats";
console.log(`Is this String "${result5}" is Palindrome = ${isPalindrome(result5)}`);
console.log(" ");

console.log(`------------------------ [Q12. Anagram logic ] ---------------------`);
console.log(" ");
function isAnagram(str_1,str_2) {
    function cleanString(str) {
        return str.toLowerCase().split('').sort().join('');
    }

    return cleanString(str1) === cleanString(str2);
}
let str_1="Silent";
let str_2="Listen";
console.log(`Is this Strings "${str_1}" , "${str_2}" are Anagram = ${isAnagram(str_1,str_2)}`);
console.log(" ");


let str_3="heart" ;
let str_4="earth";
console.log(`Is this Strings "${str_3}" , "${str_4}" are Anagram = ${isAnagram(str_3,str_4)}`);
console.log(" ");

let str_5="debit card";
let str_6="credit card";
console.log(`Is this Strings "${str_5}" , "${str_6}" are Anagram = ${isAnagram(str_5,str_6)}`);
console.log(" ");

console.log(`------------------------ [ Q13. Remove the special character or extra character from string ] ---------------------`);
console.log(" ");
function removeNonChar(str, whichChar) {
    let leftChar = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
    
        if (currentChar !== whichChar) {
            leftChar += currentChar; 
        }
    }

    return leftChar; 
}



console.log(`The string [before] removal special char "java@script" [After] =  ${ removeNonChar('java@script', '@')}`);    
console.log(" ");
console.log(`The string [before] removal special char "Softyware" [After] = ${removeNonChar('Softyware', 'y')}`);  
console.log(" ");
console.log(`The string [before] removal special char "Code mind " [After] = ${removeNonChar('Code mind ', ' ')}`);    
console.log(" ");

console.log(`------------------------ [ Q14. Reverse the string word by word ] ---------------------`);
console.log(" "); 

function reverseTheString(str) {
    const words = str.split(' ');
    const reverseWord= words.map(word =>{
        return word.split('').reverse().join('');
    });
     return reverseWord.join(' ');                 
}
console.log(`Original String is "Arise! Awake! and stop not until the goal is reached"`);

console.log(`Reversed String = `,reverseTheString("Arise! Awake! and stop not until the goal is reached"));

console.log(`Original String is "Learn with us, Job with us"`);

console.log(`Reversed String = `,reverseTheString("Learn with us, Job with us"));

console.log(`------------------------ [ Q15.swap the two words without using third variable ] ---------------------`);
console.log(" ");
function swapWords() {
    let wordOne = "Angular";
    let wordTwo = "React";
    console.log("Before  swapping:");
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
    
    [wordOne, wordTwo] = [wordTwo, wordOne];
    
    console.log(" ");
    
    console.log("After swapping:");
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
}
swapWords();
    
console.log(`------------------------ [ Q16.Count spaces ] ---------------------`);
console.log(" ");
    
function countSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
         if (str[i] === ' ') {
                count++;
            }
        }
        return count;
}
const one = "Revision is the mother of success";
console.log(`Spaces count for: "${one}" is "${countSpaces(one)}"`);
console.log(" ");
const two = "Javascript is the language of internet world";
console.log(`Spaces count for: "${two}" is "${countSpaces(two)}"`);
console.log(" ");

console.log(`------------------------ [ Q17. Find the numeric digits ] ---------------------`);
console.log(" ");
function digitCount(str) {
    let count=0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            count++
        }
        
    }
    return count;
}
console.log(`Digit count in "Codemind2019" is = ${digitCount('Codemind2019')}`);
console.log(`Digit count in "Twenty24" is = ${digitCount('Twenty24')}`);
console.log(`Digit count in "Bharath1947India" is = ${digitCount('Bharath1947India')}`);
console.log(" ");

console.log(`------------------------ [ Q18. Program to count consonants ] ---------------------`);
console.log(" ");
function consonantsCount(str) {
    let count=0;
    str =str.toLowerCase();
    const vowels='aeiou';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            count++;
        }
        
    }

    return count;
}
const js="Javascript";
console.log(`Vowels in the String '${js}' is = ${consonantsCount(js)}`);

const html="HTML and CSS";
console.log(`Vowels in the String '${html}' is = ${consonantsCount(html)}`);

const language= "Language Of Internet";
console.log(`Vowels in the String '${language}' is = ${consonantsCount(language)}`);

const UI="I am UI Developer";
console.log(`Vowels in the String '${UI}' is = ${consonantsCount(UI)}`);

const Do="Do or Die";
console.log(`Vowels in the String '${Do}' is = ${consonantsCount(Do)}`);
console.log(" ");

console.log(`------------------------ [ Q19.Find longest word ] ---------------------`);
console.log(" ");
function longestWord(str) {
    const words = str.replace(/[.,\/#!$%^&\*;:{}=\-_'~()]/g,"").split(' ');
    let longest = '';
    let maxLength = 0;

    words.forEach(word => {
        if (word.length > maxLength) {
            longest = word;
            maxLength = word.length;
        }
    });
    return longest;
}

console.log(longestWord('Learn with us, Job with us'));
console.log(longestWord('Fail. Learn. Grow. Evolve. Succeed')); 
console.log(longestWord('Write Debug and Execute')); 
console.log(longestWord('Frontend Developer – Complete Web Development')); 
console.log(longestWord('Do or Die')); 


