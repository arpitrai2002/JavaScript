let age=22;
let balance=new Number(50000000);

console.log(age);
console.log(balance);


console.log(balance.toString())
console.log(balance.toString().length)    // Now we can use all the string property 

console.log(balance.toLocaleString('en-US'));    // Give in us number system
console.log(balance.toLocaleString('en-IN'));    //console.log(balance.toLocaleString())  

let price=new Number(159.86954)
console.log(price.toPrecision(5))    //give pricise value like ound off

console.log(price.toExponential(1)); //The toExponential() method of Number values returns a string representing this number in exponential notation.




console.log((1.23e20).toFixed())  //The toFixed() method returns a string representation of a number without using exponential notation

const a=balance.valueOf();  // A number representing the primitive value of the specified Number object.


console.log(a);


// ******************************* Maths*****************************************