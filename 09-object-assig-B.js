
const sbiBank = {
    bankName:"State Bank of India",
    location: "Mumbai",
    accountNo:"1234567890",
    ifsc: "SBIN0000001",
    interestRate: "5.5%",
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName} || `, `Location: ${this.location} || `, `Account No: ${this.accountNo} || `,` IFSC: ${this.ifsc} || `, `Interest Rate: ${this.interestRate}`);
    }
};


const axisBank = {
    bankName:"Axis Bank",
    location: "Bangalore",
    accountNo: "0987654321",
    ifsc:"UTIB0000001",
    interestRate: "6.0%",
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName} || `, `Location: ${this.location} || `,` Account No: ${this.accountNo} || `, `IFSC: ${this.ifsc} || `, `Interest Rate: ${this.interestRate}`);
    }
};


const hdfcBank = {
    bankName:"HDFC Bank",
    location: "Delhi",
    accountNo: "1122334455",
    ifsc: "HDFC0000001",
    interestRate: "6.5%",
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName} || `,` Location: ${this.location} || `,` Account No: ${this.accountNo} || `, `IFSC: ${this.ifsc} || `, `Interest Rate: ${this.interestRate}`);
    }
};

const yesBank = {
    bankName: "Yes Bank",
    location: "Chennai",
    accountNo: "6677889900",
    ifsc: "YESB0000001",
    interestRate: "7.0%",
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName} || `,` Location: ${this.location} || `, `Account No: ${this.accountNo} || `, `IFSC: ${this.ifsc} || `, `Interest Rate: ${this.interestRate}`);
    }
};

console.log("                                               ");
sbiBank.showDetails();
console.log("                                               ");
axisBank.showDetails();
console.log("                                               ");
hdfcBank.showDetails();
console.log("                                               ");
yesBank.showDetails();
console.log("                                            ");