var arr  = [1,2,5,4,8,]
var sum = 5 
// forEach function can call array elements recursive way.
arr.forEach(function(value, index, arr) {
    // console.log(value,index,arr)
    sum += value 
})
console.log(sum)