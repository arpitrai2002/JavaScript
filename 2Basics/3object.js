// how to define Symbol in object
const sym=Symbol("Key1");

const sym2=Symbol("Key2");



let user={
    userName:"arpitr2002",
    "full Name":"Arpit Kumar Rai",
    age:18,
    Mob:9868922246,
    "email":"arpitr2002@xyz.com",
    isloging:false,
    LogingHistory:["Monday","Saturday"],


    sym2:"good morning",                            // not symbol defined wrong way
    [sym]:"hello"
}

//access
console.log(user.userName);
// console.log(user.full Name);     give error
console.log(user["full Name"]);
console.log(user.email);              
console.log(user["email"]);


console.log(user.sym2);              // not symbol

console.log(user[sym]);             // accessing Symbol


console.log(user);


user.email="arpit@google.com";
console.log(user);
// Object.freeze(user);                         // now nothing can be change in Object
user.email="arpit@chatgpt.com";
console.log(user);                           // no change seen in object


// using function in object
user.greating=function(){
    console.log("Hello Ji");
}

user.greatingTwo=function(){
    console.log(`Good Morning, ${this["full Name"]}`);
}

console.log(user.greating());
console.log(user.greatingTwo());





