let cooding=['Js','Py','C','C++']
cooding.forEach(function (item){
    console.log(item);
})

// array function

cooding.forEach((item)=>{
    console.log(item);
})


function print(item){
    console.log(item);
}

cooding.forEach(print)


cooding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


// array with object
//[{},{},{}]


let ProgramingLanguage=[
    {
        Language:"C++",
        file:"cpp"
    },
    {
        Language:"Python",
        file:"py"
    },{
        Language:"Java",
        file:"java"
    }
]


ProgramingLanguage.forEach((item)=>{
    console.log(item.Language);
    
})






// best use
// forof-> array
// forin-> object
// foreach-> array