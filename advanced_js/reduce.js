var arr = [1,2,3,4,5,6]

// var sum = arr.reduce(function(prev, curr){
//     return prev + curr
// })

// var max = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// })

// console.log(sum)
// console.log(max)

function myReduce(arr, cb, acc){
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)

var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, arr[0])

console.log(sum, max)