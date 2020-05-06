// FIBBONACCI FUNCTION IN ACTION
const submitbtn =document.getElementById("submit");
submitbtn.addEventListener("click", () => {
    let count = document.getElementById("input").value;
    let fib = [0, 1];
    for (let i = fib.length; i < count; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib);
});


// FIBBONACCI FUNCTION
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



