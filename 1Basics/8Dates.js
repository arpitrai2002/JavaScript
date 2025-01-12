

let d1=new Date();
console.log(d1);
console.log(d1.toString());
console.log(d1.toDateString());
console.log(d1.toLocaleDateString());
console.log(d1.toLocaleString());
console.log(d1.toJSON());
console.log(d1.toTimeString());
console.log(d1.toUTCString());
console.log(d1.toISOString());


// 2025-01-12T13:01:37.980Z
// Sun Jan 12 2025 18:31:37 GMT+0530 (India Standard Time)
// Sun Jan 12 2025
// 12/1/2025
// 12/1/2025, 6:31:37 pm
// 2025-01-12T13:01:37.980Z
// 18:31:37 GMT+0530 (India Standard Time)
// Sun, 12 Jan 2025 13:01:37 GMT
// 2025-01-12T13:01:37.980Z


//const d2=new Date(2001,5,17);           //Sun Jun 17 2001 00:00:00 GMT+0530 (India Standard Time)
// const d2=new Date(2001,5,17,18,30,20);           //Sun Jun 17 2001 18:30:20 GMT+0530 (India Standard Time)
//const d2=new Date("06-17-2002");                    //Mon Jun 17 2002 00:00:00 GMT+0530 (India Standard Time)
const d2=new Date("2002-5-15");      //Wed May 15 2002 00:00:00 GMT+0530 (India Standard Time)
console.log(d2.toString());


let d3=Date.now();          // give date in mili second
console.log(d3);        
console.log(Math.floor(d3/1000));          //give date in sec


let d4=new Date();
console.log(d4);
console.log(d4.getMonth());    // 0= jan ...........................11=dec
console.log(d4.getHours())



d1.toLocaleDateString('Default',{
    weekday:"long"
})
console.log(d1.toString());


