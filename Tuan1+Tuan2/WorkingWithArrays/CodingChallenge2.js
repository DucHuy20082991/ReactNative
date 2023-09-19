//var dogsAge = [5, 2, 4, 1, 15, 8, 3], humanAge = [];
var dogsAge = [16, 6, 10, 5, 6, 1, 4], humanAge = [];
function calcAverageHumanAge(ages){
    var sum = 0;
    for(var i = 0; i < ages.length; i++){
        if(ages[i] <= 2){
            humanAge.push(ages[i]*2);
        }
        else{
            humanAge.push(16+ages[i]*4);
        }
    }
    console.log("The dog age in human years: ", humanAge);
    for(var j = 0; j < ages.length; j++){
        if(humanAge[j] < 18){
            humanAge.splice(j,1);
        }
    }
    console.log("Exclude all dogs that are less than 18 human years old: ", humanAge);
    for(var k = 0; k < humanAge.length; k++){
        sum += humanAge[k];
    }
    return (sum/humanAge.length).toFixed(1);
}
var avgAge = calcAverageHumanAge(dogsAge);
console.log("Average human age of all adult dogs: ", avgAge);