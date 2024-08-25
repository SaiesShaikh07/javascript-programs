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
str1="JavaScript";
console.log(`The count of 'a' & 'A' in *${str1}* is = ${countCharA(str1)}`);

str2="Do or Die";
console.log(`The count of 'a' & 'A' in *${str2}* is = ${countCharA(str2)}`);

str3="Learn with us, Job with us";
console.log(`The count of 'a' & 'A' in *${str3}* is = ${countCharA(str3)}`);

str4="Empowering Dreams, Guaranteeing Futures";
console.log(`The count of 'a' & 'A' in *${str4}* is = ${countCharA(str4)}`);

str5="Anny, My favorite fruit is Apple";
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
str6="Javascript";
console.log(`Vowels in the String ${str6} is = ${vowelsCount(str6)}`);

str7="HTML and CSS";
console.log(`Vowels in the String ${str7} is = ${vowelsCount(str7)}`);

str8= "Language Of Internet";
console.log(`Vowels in the String ${str8} is = ${vowelsCount(str8)}`);

str9="I am UI Developer";
console.log(`Vowels in the String ${str9} is = ${vowelsCount(str9)}`);

str10="Do or Die";
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



const array=[20,50,60,90];
const cloneArray=[...array];
console.log(cloneArray);
