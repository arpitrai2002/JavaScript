const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
   console.log(key);// this will print only key 
}


for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject.key}`);
}


// using array

let names=["Arpit","Mini","Ayush","Manav"]
for (const name in names) {
    console.log(name);          // this will print only index value
}
//names
for (const name in names) {
    console.log(names[name]);          
}


//map can't be used with forin
let map=new Map();
map.set("FR","France");
map.set("IN","India");

// no output
for (const key in map) {
    console.log(key);
    
}
