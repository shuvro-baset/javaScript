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

a.insert(5, 5)
console.log(a)

// delete last element from the array
a.pop()
console.log(a)

// array length
console.log(a.length)