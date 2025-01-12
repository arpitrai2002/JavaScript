let a=[1,2,3,4,5,6,7];
let name=["arpit","manav","yash"];
let x=[1,'d',true];

console.log(a);


let myArr=new Array(0,1,2,3,4,5,6);
console.log(myArr);

myArr.push(7);
myArr.push(8);
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr); 
// [
//     9, 0, 1, 2, 3,
//     4, 5, 6, 7
//   ]

myArr.shift();
console.log(myArr); 
// [
//     0, 1, 2, 3,
//     4, 5, 6, 7
//   ]

const newArr=myArr.join()    //give element in string format
console.log(newArr);            //0,1,2,3,4,5,6,7

// slice vs splice

console.log(myArr.slice(1,4));  //[ 1, 2, 3 ]
console.log(myArr);             // in slice array remain same
// [
//     0, 1, 2, 3,
//     4, 5, 6, 7
//   ]
// splice
console.log(myArr.splice(1,4));  //[ 1, 2, 3, 4 ]
console.log(myArr);             // in splice array remeove that range element
//[ 0, 5, 6, 7 ]





