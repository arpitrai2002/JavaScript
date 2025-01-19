const cooding=["Java","Python","C","C++","Ruby"]


const Lang=cooding.forEach(function (item) {
    return item;
})

console.log(Lang);

// For each does't return any value to overcome this problem Filter was introduce

const num=[1,2,3,4,5,6,7,8,9,10];
const even=num.filter((item)=>item%2==0)
console.log(even);



const newnum=num.filter(function (item){return item>4})
const newnum1=num.filter((item)=>item>4)    // arrow function

console.log(newnum);
console.log(newnum1);

// if we want do same thing with Foreach

const n=[]

num.forEach((item)=>{
    if(item>4){
        n.push(item);
    }
})

console.log(n);



// Practice

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// print book with genre 'History';

const HistoryBook=books.filter((bk)=> bk.genre==='History');
console.log(HistoryBook);


// book with publish date >2000 and edition >2010
const b=books.filter((bk)=>{
    return bk.publish>2000 && bk.edition>2010;
})

console.log(b);
