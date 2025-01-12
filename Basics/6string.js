let name="Arpit";
let Age=22;

console.log(name+" "+Age);

console.log(`My name is ${name} and age is ${Age}`);

let newString=new String("Arpit Kumar Rai");
console.log(newString.length);
console.log(newString.toUpperCase());

console.log(newString.charAt(6));
console.log(newString.charCodeAt(0));
console.log(newString.indexOf('a'));



let Fname=newString.substring(0,5);
console.log(Fname);

console.log(newString.slice(1,9));
console.log(newString.slice(-8,-5,-1));

const a="     Hello     ";
console.log(a);
console.log(a.trim());
console.log(a.trimStart());
console.log(a.trimEnd());


const url="http://www.google.com/login%20Arpit%20Kumar%20Rai";
console.log(url.replace('%20','-'));
console.log(url.replaceAll('%20','-'));

console.log(url.includes("Bhumihar"));  //false
console.log(url.includes("Kumar"));   //true

console.log(newString.split(" "));








