function calcTip(a){
    return (a >= 50 && a <= 300) ? 0.15 : 0.2
}
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52], tips = [], total = [];
for (var i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i])*bills[i]);
    total.push(tips[i]+bills[i]);
}
function calcAverage(numbers){
    var sum = 0, i;
    for (i = 0; i < numbers.length; i ++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}

console.log("Bills in array: ", bills);
console.log("Tips in array: ", tips);
console.log("Total in array: ", total);
console.log("Average of total is:", calcAverage(total));

