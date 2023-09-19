var person1 = {
    fullName: "Mark Miller",
    weight:78,
    height:1.69,
    calcBMI(weight, height){
        return (weight/(height*height)).toFixed(1);
    }
};
var person2 ={
    fullName: "John Smith",
    weight:92,
    height:1.95,
    calcBMI(weight, height){
        return (weight/(height*height)).toFixed(1);
    }
}

if(person1.calcBMI(person1.weight, person1.height) > person2.calcBMI(person2.weight, person2.height)){
    console.log(`Mark's BMI (${person1.calcBMI(person1.weight, person1.height)}) is higher than John's (${person2.calcBMI(person2.weight, person2.height)})!`);
}
else{
    console.log(`John's BMI (${person2.calcBMI(person2.weight, person2.height)}) is higher than Mark's (${person1.calcBMI(person1.weight, person1.height)})!`);
}