var dogsAge = [5, 2, 4, 1, 15, 8, 3], humanAge = [];
//var dogsAge = [16, 6, 10, 5, 6, 1, 4], humanAge = [];

let calcAverageHumanAge = (ages) => {
    const humanAges = ages.map(age => {
        if (age <= 2) {
          return age * 2;
        } else {
          return 16 + age * 4;
        }
      });
    
      const adultHumanAges = humanAges.filter(humanAge => humanAge >= 18);
      const averageHumanAge = adultHumanAges.reduce((sum, humanAge) => sum + humanAge) / adultHumanAges.length;
      return averageHumanAge;
    };  
var avgAge = calcAverageHumanAge(dogsAge);
console.log("Average human age of all adult dogs: ", avgAge);