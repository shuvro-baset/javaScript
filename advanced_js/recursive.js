// recursive function will call itself
function sayHi(n){
    if (n === 0){
        return
    }
    console.log("Hi, I am calling")
    sayHi(n -1)
}
sayHi(10) // it will show 1o times console log 


// get sum of nth term using recursive way 
function sum(n){
    if (n ===1){
        return 1 
    }
    return n + sum(n - 1)
}
console.log(sum(5)) // it return first 5the number sum


for(let i = 10; i>=1; i--){
    console.log(i);
 }