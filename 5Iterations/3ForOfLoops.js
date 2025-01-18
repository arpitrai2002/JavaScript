let arr=[1,2,3,4,5,6,7]

for (const a of arr) {
    console.log(a);
}

let heros=["Batman","Superman","Ironman","Hulk"]
for (const hero of heros) {
    console.log(hero);
}

let str="Hello World"
for (const ch of str) {
    console.log(ch);
    
}


// using map
const map=new Map();
map.set('IN','India');
map.set('USA','United State of America')
map.set('Fr','France')
map.set('UK','United Kindom')
map.set('IN','India');                  // duplicate value can't be use

for (const m of map) {
    console.log(m);                 // print map value in array
    
}
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]
// [ 'UK', 'United Kindom' ]


for (const [key,value] of map) {
    console.log(`Key :- ${key}, Value :- ${value}`); 
}

// Object can't be use with

let user={
    name:"Arpit",
    age: 23
}
// this will give error
// for (const item of user) {
//     console.log(item);
// }