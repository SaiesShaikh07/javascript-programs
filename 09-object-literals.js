let person={
    firstName:"Jenny",
    lastName:"Gates",
    age:24,
    isMarried:true,
    skills:["HTML","CSS","JS"],
    marks:{
        math:80,
        physics:90,
        english:56,
        chemistry:78
    }
    
    
}
console.log(person);
const firstName =person.firstName;
console.log("first name=",firstName);
console.log("Age=",person.age);
console.log("persons skills = ",person.skills);
for (const element of person.skills ) {
    console.log(person.skills);
    
}

console.log(person.skills.push("git","github"));
 console.log(person.skills);
 





