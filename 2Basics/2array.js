let MarverHero=["Ironman","Thor","Hulk"];
let DCHero=["Superman","Batman","flash"];

// MarverHero.push(DCHero);     [ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Batman', 'flash' ] ]

let all_hero=MarverHero.concat(DCHero);
console.log(all_hero);   //[ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'flash' ]


let all_hero2=[...MarverHero,...DCHero];
// console.log(all_hero2);   [ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'flash' ]

let array1=[1,2,3,[4,5],[[6,7,[8,9]]]];
// console.log(array1);            [ 1, 2, 3, [ 4, 5 ], [ [ 6, 7, [Array] ] ] ]
// console.log(array1.flat(3));     [1, 2, 3, 4, 5,6, 7, 8, 9]
// console.log(array1.flat(2));     [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
// console.log(array1.flat(Infinity))

console.log(Array.isArray("Arpit"));  false //check its array or not
console.log(Array.isArray(array1));   true
console.log(Array.from("Arpit"));     // cover it in array    [ 'A', 'r', 'p', 'i', 't' ]
console.log(Array.of("Arpit"));       // [ 'Arpit' ]

let a=100;
let b=200;
let c=300;

console.log(Array.of(a,b,c));







