var person = [
    {
        name: 'A',
        age: 21,
    }, 
    {
        name: 'B',
        age: 41,
    },
    {
        name: 'C',
        age: 51,
    },
    {
        name: 'D',
        age: 31,
    },
]

var arr = [4,5,7,8,7,2,1,0,-5,-4,144,-41,0,10]
// sorting array
arr.sort()
console.log(arr) // this sorting did not work perfectly. negativeValue did not arrange correctly

// we will try another way to sort the array
arr.sort(function(a,b){
    if (a>b){
        return -1 // -1 for descending order
    }
    else if (a<b){
        return 1
    }
    else{
        return 0
    }
})
console.log(arr) // this sorting work perfectly

// array object did not sorted when we use simple sort method. we need to modify it to work perfectly
person.sort(function(a,b){
    if (a.age> b.age){
        return 1
    }
    else if (a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})

console.log(person) // it will return sorted array object based on age

// every method can check every element of array and return true/false as condition

var res1 = arr.every(function(value){
    return value % 2 == 0
})
console.log(res1) // it will return false because every element of array is not even number.

// some method can if at least one element is in the array as condition
var res2 = arr.some(function(value){
    return value % 2 == 1 
})
console.log(res2) // it will return true. because we have some elements in the array which is odd.