function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);

// factorial using while loop 
function factorialWhile(n){
    var i = 1;
    var fact = 1;
    while(i<=n){
        fact = fact *i;
        i++;
    }
    return fact;
}
var result = factorialWhile(5);
console.log(result);


// fibonacci series
var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}