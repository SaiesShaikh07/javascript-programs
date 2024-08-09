console.log(`================================="Assignment on if-else statement"=====================================`);
var voteEligible=function (age) {
    if (age==null||age<=0||age>130) {
        console.log(`Invalid data  Age - ${age}`);
        console.log("####################################");
        
        
    } else {
        console.log(`valid data : ${age}`);
        if (age>=18) {
            console.log(`eligible for voting`);
            console.log("--------------------------------------");
            
        } else {
            console.log(`Not eligible for voting`); 
            console.log("***************************************");
        }
    }
}
voteEligible(45);
voteEligible(440);
voteEligible(17);
voteEligible(18);
voteEligible(-17);
voteEligible(null);
