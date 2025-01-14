function Name(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

Name();

function addNumber(num1,num2){
    return num1+num2;
}

const result=addNumber(2,5);
console.log(result);


function User(Name){                                             // default value (Name="Sam")  name is Parameter 
    if(!Name){
        console.log("Give Name");
        return;
    }
    console.log(`Hello ${Name}`);
}

User("Arpit");               // here Arpit is argument


// if n value is passed in function

function Sum(...num){                                         // ...num is Rest Operator        
    let result=0;
    for(let i=0;i<num.length;i++){
        result+=num[i];
    }
    return result;
}


console.log(Sum(1,2,3,4,5,6,7,8,9,10));



// taking object as perameter

const Obj={
    name:"Arpit",
    age:22,
}

function ObjectFunction(Obj){
    console.log(`My name is ${Obj.name} and age is ${Obj.age}`);
}

ObjectFunction(Obj);
ObjectFunction({
    name:"Sam",
    age:13
});


// array as perameter

const arr=[100,200,300,400];
function arrayF(arr){
    return arr[0];
}

console.log(arrayF(arr));
