// Immediately Invoked Function Expressions (IIFE)

//IMP use case=  Avoiding polluting the global namespace by creating a new scope.

(function port(portNumber){
    console.log(`port number ${portNumber} is free`);
})();                        // if ; semicolon is not there then other iife function can't start because we need to tell compiler that function end here


(()=>{
    console.log("DB Connected");
})();

((port)=>{
    console.log(`DB Connected and stated at port number ${port}`);
})(3000);