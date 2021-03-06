// initializing an array . 
var a = [23,75,7,10]
console.log(a)

// finding index of element. ** in that case if the element is not present then it will return (-1)
console.log(a.indexOf(75))

// printing an element using index number. array index start from 0
console.log(a[0])

// adding new element. this time it will add an element in the last position of the element.
a.push(13)
console.log(a)
// adding new element as a 1st element.
a.unshift(100)

// adding new value in specific position (start, delete item, value)
a.splice(6,0,37)
console.log(a)


// delete last element from the array
a.pop()
console.log(a)
//delete 1st element from the array
a.shift()
// array length
console.log(a.length)

// ---- slicing array ---- // 
var sliceArray = ['baset', 'shuvro', 23, 75];
// slice function take start index and last index
console.log(sliceArray.slice(2))
console.log(sliceArray.slice(0,2 ))
