// Function expression to check TCS interview eligibility

console.log(`================================="Assignment on if-else statement"=====================================`);

const checkTcsEligibility = function(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
        console.log(`Congrats *${candidateName}*, you are eligible for the TCS interview.`);
    } else {
        console.log(`Unfortunately *${candidateName}*, you are not eligible for the interview.`);
    }
};


checkTcsEligibility(80, 86, 90, "Saies ");
checkTcsEligibility(70, 65, 55, "Samir");
checkTcsEligibility(60, 79, 88, "Tanveer");