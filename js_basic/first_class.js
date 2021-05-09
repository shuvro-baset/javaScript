
// pure function can not affect others  

// first class function
function add(a,b){
    return a+b
}
// -- a function can be stored in a variable
var sum =add
console.log(sum(23,2))

// -- a function can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,4))
// -- a function can be stored in an object
var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(2,5))
// -- we can create a function as need

// -- we can pass function as an arguments


// -- we can return a function from another function

