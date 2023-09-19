//var dogsJulia = [3, 5, 2, 12, 7], dogsKate = [4, 1, 15, 8, 3];
var dogsJulia = [9, 16, 6, 8, 3], dogsKate = [10, 5, 6, 1, 4];
var newdogsJulia = [], allDogs = [];
function checkDogs(dogsJ, dogsK){
    for(var i = 0; i < 5; i++){
        if(i == 1 || i ==2){
            newdogsJulia.push(dogsJ[i]);
            allDogs.push(dogsJ[i]);
        } 
    }
    for(var j = 0; j < 5; j++){
        allDogs.push(dogsK[j]);
    }
    for (var k = 0; k < allDogs.length; k++){
        if(allDogs[k] < 3){
            console.log(`Dog number ${k+1} is still a puppy`);
        }
            
        else{
            console.log(`Dog number ${k+1} is an adult, and is ${allDogs[k]} years old`);
        }

    }
}
    checkDogs(dogsJulia, dogsKate);
   