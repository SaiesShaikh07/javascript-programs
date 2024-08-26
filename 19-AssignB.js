class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`==================== [ 1 ] ===================`);
for (const element of employee) {
    if (element.emp_company=='TCS') {
        console.log(`The employee name ${element.emp_name} & company name is ${element.emp_company}`);
        
    }
}
console.log(" ");


console.log(`==================== [ 2 ] ===================`);
for (const element of employee) {
    if (element.emp_dept=='Finance') {
        console.log(`The employee name [ ${element.emp_name} ] & Department name is '${element.emp_dept}'`);
        
    }
}
console.log(" ");

console.log(`==================== [ 3 ] ===================`);
for (const element of employee) {
    if (element.emp_name.startsWith('R')) {
        console.log(`Employee id = ${element.emp_id} || Employee name = '${element.emp_name}' ||  Department name = '${element.emp_dept}' || Salary = ${element.emp_salary} || Company Name = '${element.emp_company}' `);
        console.log(" "); 
    }
}
console.log(" ");

console.log(`==================== [ 4 ] ===================`);

for (const element of employee) {
    if (element.emp_salary>75000) {
        console.log(`The employee name = [ ${element.emp_name} ] ,  Company name = '${element.emp_company}' Salary  = '${element.emp_salary}'`);
        
    }
}
console.log(" ");

console.log(`==================== [ 5 ] ===================`);

for (const element of employee) {
    if (element.emp_salary>=50000 && element.emp_dept=='IT') {
        console.log(`Employee id = ${element.emp_id} || Employee name = '${element.emp_name}' ||  Department name = '${element.emp_dept}' || Salary = ${element.emp_salary} || Company Name = '${element.emp_company}' `);
        console.log(" ");
    }
}
console.log(" ");

console.log(`==================== [ 6 ] ===================`);

for (const element of employee) {
    if (element.emp_company=="Infy") {
        console.log(`Employee id = ${element.emp_id} || Employee name = '${element.emp_name}' ||  Department name = '${element.emp_dept}' || Salary = ${element.emp_salary} || Company Name = '${element.emp_company}' `);
        console.log(" ");
    }
}
console.log(" ");