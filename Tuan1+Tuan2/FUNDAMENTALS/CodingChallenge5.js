var s1 = 44, s2 = 23, s3 = 71, s4 = 65, s5 = 54, s6 = 49;
var s1A = 85, s2A = 54, s3A = 41, s4A = 23, s5A = 34, s6A = 27;

const calcAverage = (a, b, c) => (a+b+c)/3;
var scoreDol = calcAverage(s1, s2, s3).toFixed(0), scoreKoa = calcAverage(s4, s5, s6).toFixed(0);
var scoreDolA = calcAverage(s1A, s2A, s3A).toFixed(0), scoreKoaA = calcAverage(s4A, s5A, s6A).toFixed(0);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > 2*avgKoalas)
        return 1;
    else if (avgKoalas > 2*avgDolphins)
        return -1;
    else 
        return 0;
}
console.log("Test data A");
switch(checkWinner(scoreDol, scoreKoa)){
    case 1:
        console.log(`Dolphins win (${scoreDol} vs. ${scoreKoa})`);
        break;
    case -1:
        console.log(`Koalas win (${scoreKoa} vs. ${scoreDol})`);
        break;
    case 0:

        console.log(`No teams win (${scoreKoa} vs. ${scoreDol})`);
        break;
    default:
        break;
}

console.log("Test data B");
switch(checkWinner(scoreDolA, scoreKoaA)){
    case 1:
        console.log(`Dolphins win (${scoreDolA} vs. ${scoreKoaA})`);
        break;
    case -1:
        console.log(`Koalas win (${scoreKoaA} vs. ${scoreDolA})`);
        break;
    case 0:
        console.log("No teams win");
        break;
    default:
        break;
}

