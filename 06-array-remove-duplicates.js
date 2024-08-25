console.log(`================ [ Remove duplicate element from array ] ================`);
console.log(" ");
const arrayNum=[11,3,4,11,4,7,3];
const duplicateNum=[];

for (let i = 0; i < arrayNum.length; i++) {
   if (duplicateNum.indexOf(arrayNum[i]) === -1) {
        duplicateNum.push(arrayNum[i]);
   }
}
console.log(`After Removal of duplicate element the array = [${duplicateNum}] `);

console.log(" ");

console.log(`================ [ convert the string into given  pattern ] ================`);
console.log(" ");

const str="How ary you mate";
let result="";

for (let i = 0; i < str.length; i++) {
    if (i%2==0) {
        result += str[i].toUpperCase();
    }
    else{
        result += str[i].toLowerCase();
    }
    
}

console.log(`String {${str}} After Converting = **${result}** `);

