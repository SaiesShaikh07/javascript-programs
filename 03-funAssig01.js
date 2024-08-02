console.log("============= Assignment function 01 ===============");
console.log("============= 1 ===============");

function past() {
    console.log("INSIDE THE PAST FUNCTION");
}
past();

function present() {
    console.log("INSIDE THE PRESENT FUNCTION");
}
present();

console.log("============= 2 ===============");

function personalDetails(firstName,lastName,collegeName) {
    console.log("My firstname is :",firstName);
    console.log("My lastname is :",lastName);
    console.log("My firstname is :",collegeName);
}
personalDetails("Saies","Shaikh","SANGOLA COLLEGE SANGOLA");

console.log("============= 3  ===============");

function addThreeValues(param1,param2,param3) {
    var result=param1+param2+param3;
    console.log("Addition is : ",result);

}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");