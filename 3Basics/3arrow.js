
// use of this
const user={
    name:"Arpit",
    prince:999,

    welcome:function(){
        console.log(`Hello ${this.name}`);
        console.log(this);                      //{ name: 'Arpit', prince: 999, welcome: [Function: welcome] }
    }
}

user.welcome();

user.name='Sam',
user.welcome();

console.log(this);                              // {} empty object     
                                                // where as if we print in Browser then it will give Window object
function chai(){
    console.log("hello");
    console.log(this);                                          // give Global Object
}

chai();


function user1(){
    let name="Arpit";
    console.log(this.name);                           // can't use to access   it give undefiened value because it access Global object and there is no name variable
}

user1()


// arrow function

// normal function

const sum=function(num1,num2){
    return num1+num2;
}
console.log(sum(4,5));

// now writing same function with arrow
const sum1=(num1,num2)=>{
    return num1+num2;
}

console.log(sum1(7,9));


// arrow function in one line

const sum2=(num1,num2) => num1+num2;
console.log(sum2(10,20));


// or
const sum3=(num1,num2) => (num1+num2);          // this is used most because it can use to return object also

// returning object with arrow function

const emp=(name)=>({user:name,age:22});
console.log(emp("Arpit"));


