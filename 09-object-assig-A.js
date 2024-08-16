 console.log(`==================================== 1,2,3,4.Create an object with the name 'professor'====================================`);
let professor = {
    name: "Dr.Samir Khan",
    age: 45,
    department: "Computer Science",
    specialization: "Artificial Intelligence",
    university: "Pune University",
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        masters: "Software Engineering",
        bachelors: "Computer Science"
    },
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};
console.log("     ");
console.log(`==================================== 5. Add a new property 'totalExperience: "14 years"====================================`);
professor.totalExperience = "14 years";
console.log("After adding totalExperience =",professor);
console.log("  ");

console.log(`==================================== 6. Modify an existing property====================================`);
professor.age = 50;
console.log("After modifying the age =",professor);
console.log(" ");

console.log(`===============7. Add a new certificate at the 2nd index of the array 'certificates'========================`);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After adding a new certificate =",professor.certificates);
console.log(" ");

console.log(`=========== 8. Log the last element of the array 'certificates'==============`);
console.log("Last certificate =",professor.certificates[professor.certificates.length - 1]);
console.log(" ");

console.log("=============== 9. Traverse the array using a for loop=================");
for (let i = 0; i < professor.certificates.length; i++) {
    console.log(`Certificate no.${i+1} =`,professor.certificates[i]);
}
console.log(" ");

console.log("=========10. Log the complete object using a for...in loop=========");
console.log("Complete professor object = ");
for (let key in professor) {
    console.log(key + ": " + professor[key]);
}
console.log(" ");
