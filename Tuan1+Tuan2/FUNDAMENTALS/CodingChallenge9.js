var temp1 = [17, 21, 23], temp2 = [12, 5 , -5, 0, 4];
function printForecast(arr){
    i = 1;
    while(i<=arr.length){
        console.log(`${arr[i - 1]} in ${i} days`);
        i ++;
    }
}
console.log("Test Data 1");
printForecast(temp1);
console.log("Test Data 2");
printForecast(temp2);