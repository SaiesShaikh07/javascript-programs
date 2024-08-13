let array=[10,20,30,40,50,60];
console.log(array);



let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];
console.log(arrayList[2]);
arrayList[3]='sanam';
console.log(arrayList);
console.log("");


console.log(`==============Traversing an array ======================`);

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);  
}

console.log(`==============Traversing an array in reverse order ======================`);
for (let i = arrayList.length-1; i >= 0; i--) {
    const element = arrayList[i];
    console.log(element);  
    
}


console.log(`============== print only even index in array ======================`);

for (let i = 0; i < array.length; i++) {
    if (i%2==0) {
        const element=arrayList[i];
        console.log(element);
        
    }
    
}




