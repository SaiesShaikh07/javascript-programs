console.log(`================================== Assignment on Function expression  =========================================`);

// Function expression to check TCS interview eligibility
var checkEligibility = function(gradScore, hscScore, sscScore, candidateName) {
    var isEligible = (gradScore >= 70 || hscScore >= 80 || sscScore > 90) 
      ?` Congrats "${candidateName}", you are eligible for TCS interview.` 
      : `Unfortunately "${candidateName}", you are not eligible for TCS interview.`;
    console.log(isEligible);
  };
  
  checkEligibility(80, 86, 90, "Salim Khan");
  checkEligibility(70, 65, 55, "Ajit Yadav");
  checkEligibility(60, 79, 88, "Ram Singh");