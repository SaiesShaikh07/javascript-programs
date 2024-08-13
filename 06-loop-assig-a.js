console.log("================================ count vowels ============================================");

var sentence="I am very good IT Developer";
var vowels="aeiou";
var count=0;
for (let i = 0; i < sentence.length; i++) {
    var char=sentence.charAt(i);
    char=char.toLowerCase();
    if (vowels.includes(char))  {
        count++;
       
    }
   
}
console.log("count of vowels=",count);

console.log("================================ function to get the sum of cube of numbers from 1 to 5 ============================================");

function cubeAddition() {
    var sumOfCube=0;
    for (let i = 1; i <=5; i++) {
        sumOfCube=sumOfCube+i*i*i;
  
    }
    console.log(`sum of cube of numbers from 1 to 5 = "${sumOfCube}"`);
}
cubeAddition();

console.log("================================ function to get odd positioned chars without empty space ============================================");
function oddPositionedChars(sentence) {
    for (let i = 0; i <=sentence.length; i++) {
        if (i%2==1 && sentence.charAt(i)!==" ") {
    
            console.log(`characters at odd position ${i} =`,sentence.charAt(i));  

        }
        
    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");
// function oddPositionedChars(sentence) {
//     let result = ''; // Initialize an empty string to store the result

//     for (let i = 0; i < sentence.length; i++) {
//         if (i % 2 ==1 && sentence.charAt(i) != ' ') { 
//             result += " "+ sentence.charAt(i); // Add each valid character to the result string
//         }
//     }

//     console.log(`character at odd position = `,result); // Log the final result string on the same line
// }

// oddPositionedChars("Hard work always pays back");
// oddPositionedChars("Soon I will be UI IT Champ");