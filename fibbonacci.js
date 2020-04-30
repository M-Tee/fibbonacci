
function fibonacci(count) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    if (count < 2) {
        return fib;
    }
    else {
        for (let i = 2; i <= count; i++) {

            fib[i] = fib[i - 2] + fib[i - 1];
            //fib.push(fib[i]);
            console.log(fib[i]);
        }
        //console.log(fib);
    }
}
fibonacci(3);

//    function fibonacci(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibonacci(n - 1) + fibonacci(n - 2);
//  }

//  console.log(fibonacci(4));