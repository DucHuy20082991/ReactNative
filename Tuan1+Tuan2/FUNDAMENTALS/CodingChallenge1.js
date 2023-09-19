var weMark = 95, heMark = 1.88, weJohn = 85, heJohn = 1.76;
//var weMark = 78, heMark = 1.69, weJohn = 92, heJohn = 1.95;
function bmi(m, h){
    return (m/(h*h)).toFixed(1)
}
console.log("Mark's BMI:", bmi(weMark, heMark));
console.log("John's BMI:", bmi(weJohn, heJohn));
var check = Boolean(bmi(weMark, heMark)>bmi(weJohn, heJohn));
if(check == true)
    console.log("Mark's BMI higher than John's");
else
    console.log("John's BMI higher than Mark's");