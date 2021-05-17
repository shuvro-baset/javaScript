var arr = [5,6,5,6,8,5,3,4,6,4,6];

var result = arr.find(function(value){
    return value === 8
})
// this find method will return element which we need.
console.log(result);

var result1 = arr.findIndex(function(value){
    return value ===8
})
// this findIndex method return the index number of the value.
console.log(result1);