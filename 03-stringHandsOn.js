
console.log("============= ASSIGNMENT 2  ===============");

function stringHandsOn() {
    console.log("============= Step 1  ===============");

    car="    Hey you are doing good, keep it up   ";
    
    console.log("The given string is = ",car);
    console.log("============= Step 2  ==============="); 

    console.log("The length of string is = ",car.length);
    console.log("============= Step 3  ===============");
    var len=car.trim("");
    console.log("The sentence after trim spaces = ",len);

    console.log("============= Step 4  ===============");
    console.log("the total no of spaces are = ",car.length-len.length);

    console.log("============= Step 5  ===============");
    console.log("The first & last character are =",len.charAt(0)+len.charAt(len.length-1));

    console.log("============= Step 6  ===============");
    var lencnt=len.split(" ");
    console.log("Total words available after step 3 = ",lencnt.length);

    console.log("============= Step 7  ===============");

    console.log("Index of good is = ",len.indexOf("good"));

    console.log("============= Step 8  ===============");

    console.log("substring starting from index 22 = ",len.substring(22));

    console.log("============= Step 9  ===============");

    console.log("Is string end with up =",len.endsWith("up"));

    console.log("============= Step 10  ===============");
    console.log("Is string starts with Hey =",len.startsWith("Hey"));


}
stringHandsOn();