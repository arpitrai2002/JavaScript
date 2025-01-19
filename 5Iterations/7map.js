let num=[1,2,3,4,5,6,7,8,9,10]

const add=num.map((n)=> n+1);
console.log(add);


// contious map

const a=num.map((n)=>n+1).map((n)=>n*10);
console.log(a);


const b=num.map((n)=>n+1).map((n)=>n*10).filter((n)=>n>40);
console.log(b);