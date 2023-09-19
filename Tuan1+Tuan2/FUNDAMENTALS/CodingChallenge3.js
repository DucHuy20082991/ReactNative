// var s1 = 96, s2 = 108, s3 = 88, s4 = 88, s5 = 91, s6 = 110, scoreDol, scoreKoa;
//var s1 = 97, s2 = 112, s3 = 101, s4 = 109, s5 = 95, s6 = 123, scoreDol, scoreKoa;
 var s1 = 97, s2 = 112, s3 = 101, s4 = 109, s5 = 95, s6 = 106, scoreDol, scoreKoa;
function averageScore (a, b, c){
    return (a+b+c)/3
}
scoreDol = averageScore(s1, s2, s3).toFixed(1);
scoreKoa = averageScore(s4, s5, s6).toFixed(1);

if(scoreDol < scoreKoa && scoreKoa >= 100){
    console.log(`Koala Team (${scoreKoa}) beat Dolphin Team (${scoreDol}) `);
    console.log("Koala Team win the trophy");
}
else if(scoreDol > scoreKoa && scoreDol >= 100){
    console.log(`Dolphin Team (${scoreDol}) beat Koala Team (${scoreKoa}) `);
    console.log("Dolphin Team win the trophy");
}
else if((scoreDol == scoreKoa && scoreDol >= 100 && scoreKoa >= 100) ||(scoreDol < 100 && scoreKoa < 100)){
    console.log("Score's Koala Team is: ", scoreKoa);
    console.log("Score's Dolphin Team is: ", scoreDol);
    console.log("The two team were tied. No team win the trophy");
}