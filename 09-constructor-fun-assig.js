function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}


const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0000123", 1234);
const sbiBank = new Bank("State Bank of India", "Delhi", "SBIN0000567", 5678);
const mahBank = new Bank("Bank of Maharashtra", "Pune", "MAHB0000890", 8901);
const axisBank = new Bank("Axis Bank", "Bangalore", "UTIB0000456", 4567);

console.log(`----------------[ Below are the Bank Details ]-------------`);
console.log(" ");
console.log(`Bank name = '${yesBank.bankName}' || Loaction = '${yesBank.location}' || IFSC Code ='${yesBank.ifscCode}' || Branch Code ='${yesBank.branchCode}'`);
console.log(" ");

console.log(`Bank name =  ${sbiBank.bankName} || Loaction =  ${sbiBank.location} || IFSC Code = ${sbiBank.ifscCode} || Branch Code = ${sbiBank.branchCode}`);
console.log(" ");

console.log(`Bank name =  ${mahBank.bankName} || Loaction =  ${mahBank.location} || IFSC Code = ${mahBank.ifscCode} || Branch Code = ${mahBank.branchCode}`);
console.log(" ");

console.log(`Bank name =  ${axisBank.bankName} || Loaction =  ${axisBank.location} || IFSC Code = ${axisBank.ifscCode} || Branch Code = ${axisBank.branchCode}`);
console.log(" ");

console.log(`----------------[ Adding data members to the prototype openTime & closeTime ]-------------`);
console.log(" ");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`----------------[ Logging openTime and closeTime of sbiBank ]-------------`);
console.log(" ");
console.log(`The SBI bank opens at ${sbiBank.openTime} and closes at ${sbiBank.closeTime}.`);
console.log(" ");

console.log(`----------------[ Logging bankName and closeTime of axisBank ]-------------`);
console.log(" ");
console.log(`The ${axisBank.bankName} closes at ${axisBank.closeTime}.`);
console.log(" ");

console.log(`----------------[ Logging bankName, branchCode, and openTime of yesBank ]-------------`);
console.log(" ");
console.log(`The ${yesBank.bankName}, branch code: ${yesBank.branchCode}, opens at ${yesBank.openTime}.`);
console.log(" ");