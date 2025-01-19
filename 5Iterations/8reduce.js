let num=[1,2,3,4,5,6,7,8,9,10]

let sum=num.reduce(function(acc,currVal){
    return acc+currVal;
},0)
console.log(sum);

let arrowsum=num.reduce((acc,cur)=>acc+cur,0)
console.log(arrowsum);


const Cart=[
    {
        course:"JS Course",
        price:599
    },
    {
        course:"Py Course",
        price:1599
    },{
        course:"Data Science Course",
        price:6599,
    },{
        course:"DSA Course",
        price:2999,
    }
]


let total=Cart.reduce((accumulater,currVal)=>accumulater+currVal.price,0);

console.log(total);



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
