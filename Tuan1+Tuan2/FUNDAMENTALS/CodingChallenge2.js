var weMark = 95, heMark = 1.88, weJohn = 85, heJohn = 1.76;
//var weMark = 78, heMark = 1.69, weJohn = 92, heJohn = 1.95;
function BMI(m, h){
    return (m/(h*h)).toFixed(1)
}
var bmiM =  BMI(weMark, heMark);
var bmiJ = BMI(weJohn, heJohn);
var markHigherBMI = Boolean(bmiM>bmiJ);
if (markHigherBMI == true){
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${bmiM}) higher than John's (${bmiJ})`)
}
   
else{
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${bmiJ}) higher than Mark's (${bmiM})`)
}


