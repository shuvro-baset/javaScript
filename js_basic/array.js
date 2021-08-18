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
a.splice(9,0,37)
console.log("after splice: ",a)


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

// array splice function
var s = [23,75,7,10]
s.splice(3,0,10,11) // it can add items in a specific index position. (position, number of elements want to delete, your items)
console.log(s)


// search data 
var arr = [4,7,2,6,8,4,55,9,15]
var find = 55
var isFound = false

for (var i = 0; i < arr.length; i++){
    if (arr[i]===find){
        console.log('Data found at Index '+ i)
        isFound = true
        break;
    }
}
if (!isFound){
    console.log('Data not Found.')
}


// multidimensional array
var mul_arr = [
    [78,75,58,87],
    [78,75,58,87],
    [78,75,58,87],
    [78,75,58,87]
]
console.log(mul_arr)
for (var i=0; i<mul_arr.length; i++) {
    for (var j=0; j<mul_arr[i].length; j++) {
        console.log("Row " + i + ": "+ mul_arr[i][j])
    }
}

// reverse array
var rev_arr = [1,2,5,6,7,8]
// for (var i = 0; i <(rev_arr.length/2);i++) {
//     var temp =rev_arr[i]
//     rev_arr[i] = rev_arr[rev_arr.length-1-i]
//     rev_arr[rev_arr.length-1-i] = temp
// }
// console.log(rev_arr)
// we can do this reverse array using reverse function.
console.log(rev_arr.reverse())

// join method
var j = [4,5,6,8,7]
console.log(j.join(' '))// in the single quotation what we give it it will separate every element from the array

// fill method can fill all the elements of an array.
// arr.concat(my_array) 


var test_arr = [1,2,3,4,5,6,7];
console.log(test_arr.pop())

// sorting array in perfect way. js sorting new algorithm using compare function. 
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);