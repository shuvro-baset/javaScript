// define a function. you must write a 'function' then give your function_name
function def(){
    // write what you wanna do in this function.... 
    console.log("this is my first function")
}
// call the function (invoking)
def();

// define a function with parameters
function mul(num){
    var result = num * 5;
    console.log(result);
    return result;
}
// calling function and passing a params value
mul(5);

// multiple parameters function
function add(num1, num2){
    var res = num1 + num2;
    console.log(res);
}
// passing arguments
add(23,17)


// return . we should use return method instead of console.log
function add(num1, num2){
    var result = num1 + num2;
    console.log("I am calling");
    return result
}
// passing arguments
var r = add(23,17)
console.log(r)