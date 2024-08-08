var age=24;
var candidateName="saies";


var votingChecker=function (age,person) {
    if (age>=18) {
        console.log(`hey ${candidateName} you are eligible for vote`);
        
    } else {
        console.log(`sorry ${candidateName} you are eligible for vote`);
        
    }
}
votingChecker(21,"jenny");
votingChecker(17,"jenny");

var voteEligible=function (age) {
    if (age==0||age<0||age>130) {
        console.log(`Invalid date  Age - ${age}`);
        
    } else {
        console.log(`valid date : ${age}`);
        if (age>=18) {
            console.log(`eligible for voting`);
        } else {
            console.log(`Not eligible for voting`); 
        }
    }
}
voteEligible(45);
voteEligible(44);
voteEligible(17);



