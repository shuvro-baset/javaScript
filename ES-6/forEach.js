var arr  = [1,2,5,4,8,]
var sum = 5 
/* forEach function can call array elements recursive way. do the same thing like as map but it did not return. 
Function to execute on each element. It accepts between one and three arguments: element, index and array
*/
arr.forEach(function(value, index, arr) {
    // console.log(value,index,arr)
    sum += value 
})
console.log(sum)