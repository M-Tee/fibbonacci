
function fibonacci(count) {
    let fib =[];
    fib[0] = 0;
    fib[1] = 1;
   
   if(count < 2){
     return fib;
   }
    else{
     for (let i = 2; i <= count; i++) {
   
     fib[i] = fib[i - 2] + fib[i - 1];
     //fib.push(fib[i]);
     console.log(fib[i]);
     }
     //console.log(fib);
   
   }
   
   }
   fibonacci(3);
   
