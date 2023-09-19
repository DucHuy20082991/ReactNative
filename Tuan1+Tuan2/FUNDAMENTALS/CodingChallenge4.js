var value1 = 275, value2 = 40, value3 = 430;
var tip1 = ((value1 >= 50 && value1 <=300) ? 0.15 : 0.2)*value1;
var tip2 = ((value2 >= 50 && value2 <=300) ? 0.15 : 0.2)*value2;
var tip3 = ((value3 >= 50 && value3 <=300) ? 0.15 : 0.2)*value3;

console.log(`The bill 1 was ${value1}, the tip was ${tip1}, and the total value: ${value1 + tip1}`);
console.log(`The bill 2 was ${value2}, the tip was ${tip2}, and the total value: ${value2 + tip2}`);
console.log(`The bill 3 was ${value3}, the tip was ${tip3}, and the total value: ${value3 + tip3}`);