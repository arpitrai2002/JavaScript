//singleton
const ab=new Object();
console.log(ab);

const tinder={};

tinder.id="123abc";
tinder.user="ArpitRai";
tinder.email="apitr@xyz.com";

console.log(tinder);



// nested Object
const obj={
    Name:{
        userName:{
            fullName:{
                FirstName:"Arpit",
                LastName:"Rai"
            },
        }
    },
}

console.log(obj);
console.log(obj.Name.userName.fullName);
console.log(obj.Name.userName.fullName.FirstName);


// merging objects

const a={1:"a",2:"b"};
const b={3:"a",4:"b"};
const c={5:"a",6:"b"};

const objectMerge=Object.assign(a,b,c);
const objectMerge1=Object.assign({},a,b,c);       // good practice {} enter object in empty object
console.log(objectMerge);

const obj3={...a,...b,...c}              // using spread operation
console.log(obj3);


// object in array

const arr=[
    {
        User:1,
        Name:"Arpit",
    },
    {
        User:2,
        Name:"Manav",
    },
    {
        User:3,
        Name:"Ayush",
    }
]

console.log(arr[0].Name);
console.log(arr[1].User);



// some more imp method
// keys and values 
console.log(Object.keys(tinder));
console.log(Object.values(tinder));

console.log(Object.entries(tinder));   // give object in key value pair in array    [[ 'id', '123abc' ],[ 'user', 'ArpitRai' ],[ 'email', 'apitr@xyz.com' ]]



// to check weather that key is present in that object or not

console.log(tinder.hasOwnProperty("email"));
console.log(tinder.hasOwnProperty("userid"));



// object destructing

const Course={
    name:"JS Basic",
    price:"999",
    courceInstructor:"Arpit"
}

console.log(Course.name);

//destructing 
const {courceInstructor}=Course;
const {courceInstructor:inst}=Course;  // more small name

console.log(courceInstructor);
console.log(inst);








