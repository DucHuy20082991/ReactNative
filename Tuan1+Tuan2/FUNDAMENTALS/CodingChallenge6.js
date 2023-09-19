var value = 100;
function calcTip(a){
    return (a >= 50 && a <= 300) ? 0.15 : 0.2
}
console.log("Value of first bill is: ", calcTip(value));

var bills = [125, 555, 44], tips = [], total = [];
tips.push(calcTip(bills[0])*bills[0]);
total.push(tips[0]+bills[0]);

tips.push(calcTip(bills[1])*bills[1]);
total.push(tips[1]+bills[1]);

tips.push(calcTip(bills[2])*bills[2]);
total.push(tips[2]+bills[2]);

console.log("Bills in array: ", bills);
console.log("Tips in array: ", tips);
console.log("Total in array: ", total);
